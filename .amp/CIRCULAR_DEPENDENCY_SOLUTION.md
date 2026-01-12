# Circular Dependency Solution: ai-player-service ↔ server

## Problem

Before this refactor, the build order mattered when updating AI code because:

```
server imports from ai-player-service (dynamically)
    ↓
ai-player-service imports types from server (for type-checking)
    ↓
CIRCULAR DEPENDENCY
```

Every time AI code changed, the build could fail with:
```
Cannot find module '@game/server/services' or its corresponding type declarations
```

This forced careful build ordering and made CI/CD fragile.

## Solution

### 1. Service Type Definitions Moved to @game/shared

Created `/packages/shared/src/types/service-interfaces.ts` containing:

- `BaseStatsDTO` - Base statistics interface
- `BaseCapacitiesDTO` - Capacity calculation results
- `CoordinateParsed` - Coordinate parsing result
- `IStatsService` - Service interface (reference)
- `ICapacityService` - Service interface (reference)
- `ICoordinateService` - Service interface (reference)
- `IEnergyService` - Service interface (reference)

### 2. Proper Build Order

Updated `/scripts/render-build.sh` to enforce correct build order:

```bash
pnpm --filter @game/shared build       # No dependencies
pnpm --filter @game/server build        # Depends on shared
pnpm --filter @game/ai-player-service build  # Depends on both
```

### 3. How It Works

**Type Safety:**
- ai-player-service can import type definitions from `@game/shared` (no circular dep)
- Server implements the services without importing ai-player-service types
- Type-checking passes because `@game/shared` is built first

**Runtime:**
- ai-player-service uses dynamic imports: `await import('@game/server/services')`
- These imports happen at runtime, not compile-time
- By the time code runs, server has already been built

**Dependency Graph (After Fix):**
```
┌─────────────────┐
│  @game/shared   │  (types only)
└────────┬────────┘
         │
         ├─────────────────────┐
         ▼                     ▼
┌─────────────────┐     ┌──────────────────────┐
│  @game/server   │     │ @game/ai-player-svc  │
│  (implements)   │     │  (uses dynamically)  │
└─────────────────┘     └──────────────────────┘
         │                      │
         └──────────┬───────────┘
                    ▼
            Dynamic imports at runtime
            (no compile-time dependency)
```

## Usage for AI Developers

When updating AI code in `packages/ai-player-service/src`:

1. **Import types from @game/shared:**
   ```typescript
   import type { BaseStatsDTO, CoordinateParsed } from '@game/shared';
   ```

2. **Use dynamic imports for server utilities:**
   ```typescript
   const { StatsService } = await import('@game/server/services');
   const stats = await StatsService.getBaseStats(empireId, coord);
   ```

3. **Build locally (happens automatically):**
   ```bash
   pnpm build  # Respects dependency order automatically
   ```

## Future Improvements

### Potential Long-term Enhancements

1. **Decouple AI Service Calls**
   - Create `AIServiceAdapter` interface in shared
   - Dependency inject service implementations
   - Makes ai-player-service testable without server

2. **Lazy Loading Pattern**
   - Only load server services when needed
   - Reduces startup time
   - Clear initialization points

3. **Event-Driven Architecture**
   - AI listens to game events (emit-only)
   - Server doesn't import AI at all
   - Complete decoupling possible

## Testing

The circular dependency is verified to be broken by:

1. **Type checking:** `tsc --noEmit` in ai-player-service succeeds independently
2. **Build order:** `pnpm build` completes without errors
3. **Runtime:** Dynamic imports work correctly at execution time

To verify locally:
```bash
# Build independently
pnpm --filter @game/shared build
pnpm --filter @game/server build
pnpm --filter @game/ai-player-service build

# All should succeed without errors
```

## References

- **Service Types:** `/packages/shared/src/types/service-interfaces.ts`
- **Build Script:** `/scripts/render-build.sh`
- **AI Player Service:** `/packages/ai-player-service/`
- **Server Services:** `/packages/server/src/services/`
