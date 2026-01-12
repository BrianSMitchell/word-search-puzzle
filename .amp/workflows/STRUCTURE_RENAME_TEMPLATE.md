# PRD Template: Structure Name Refactoring

**Purpose:** Reusable template for renaming any building/structure/defense/unit throughout the Attrition codebase.

**How to Use:** Copy this template and replace all `[OLD_NAME]`, `[new_name]`, `[OLD_KEY]`, and `[NEW_KEY]` with specific values.

---

# Product Requirements Document: [OLD_NAME] → [NEW_NAME] Refactoring

**Document Version:** 1.0  
**Date:** [TODAY'S DATE]  
**Status:** Planning Phase  
**Priority:** Medium  
**Structure Type:** [Building/Defense/Unit/Technology]  

---

## 1. Executive Summary

This document outlines the comprehensive requirements for renaming the "[OLD_NAME]" [structure type] to "[NEW_NAME]" across the Attrition game codebase.

The change involves updating:
- Internal identifier: `[OLD_KEY]` → `[NEW_KEY]`
- Display name: "[OLD_NAME]" → "[NEW_NAME]"

This refactoring affects the shared type system, database interactions, client-side rendering, server-side logic, tests, and documentation.

**Estimated Impact:** 30-50 source files + test/configuration files  
**Estimated Effort:** 2-4 hours (including testing)  
**Risk Level:** Medium-High (core game mechanic, requires comprehensive testing)  

---

## 2. Objectives

- Rename internal [structure type] key from `[OLD_KEY]` to `[NEW_KEY]`
- Update display name from "[OLD_NAME]" to "[NEW_NAME]"
- Maintain all existing functionality and game mechanics
- Ensure backward compatibility where needed (for existing save data)
- Minimize risk of bugs or data corruption
- Update all references across codebase systematically

---

## 3. Files to Search

### Step 1: Identify All References

Use these commands to locate all occurrences:

```bash
# Search for old key (internal identifier)
grep -r "[OLD_KEY]" packages/ tests/ docs/ scripts/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.md"

# Search for old display name
grep -r "[OLD_NAME]" packages/ tests/ docs/ scripts/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.md"

# Count matches
grep -r "[OLD_KEY]" packages/ tests/ docs/ scripts/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.md" | wc -l
```

### File Categories

#### A. **Type Definitions & Shared Exports** (Highest Priority)
| Category | Example Files | Changes Required |
|----------|--------|------------------|
| [Structure Type] Key Union | `packages/shared/src/buildings.ts` (or `defenses.ts`, `units.ts`) | Update union type enum; update catalog entry |
| Type Comments | `packages/shared/src/types.ts` | Update example comments |
| Structure Costs/Levels | `packages/shared/src/structureLevels.ts` (or relevant level file) | Rename object keys; update comments |

#### B. **Client-Side Components** (High Priority)
| Category | Example Files | Changes Required |
|----------|--------|------------------|
| Display/Table Components | `packages/client/src/components/game/levelTables/structures/` | File rename + constant names |
| Index/Exports | `packages/client/src/components/game/levelTables/structures/index.ts` | Update imports and keys |
| Detail/Info Views | `packages/client/src/components/game/BaseDetail/breakdownBuilders.ts` | Update lookup keys and fallback text |
| Help/FAQ | `packages/client/src/components/help/faqData.tsx`, `helpData.tsx` | Update text references |

#### C. **Server-Side Services** (Critical)
| Category | Example Files | Changes Required |
|----------|--------|------------------|
| Base Stats/Capacity | `packages/server/src/services/baseStatsService.ts`, `bases/StatsService.ts`, `bases/CapacityService.ts` | Update SQL queries + comments |
| Building/Defense/Unit Services | `packages/server/src/services/buildings/BuildingsService.ts`, etc. | Update key checks and logic |
| Planet Claiming | `packages/server/src/services/PlanetClaimingService.ts` | Update initial config |
| Resource Calculation | `packages/server/src/services/resources/ResourceCalculationService.ts` | Update switch/case statements |
| Population/Capacity Logic | `packages/server/src/services/structures/StructuresService.ts` | Update conditional checks |
| Other Services | Grep results will show other files | Update case statements and comments |

#### D. **Test Files** (Comprehensive Coverage)
| Category | Files | Pattern |
|----------|-------|---------|
| Shared Tests | `tests/unit/shared/structureLevels.test.ts` | String literals in expect() calls |
| Server Tests | `tests/unit/server/services/*.test.ts` | Mock data objects with keys |
| | | `catalog_key: '[OLD_KEY]'` |
| | | `display_name: '[OLD_NAME]'` |

#### E. **Documentation**
| Category | Files | Changes |
|----------|-------|---------|
| Game Rules | `docs/Game Mechanics and Rules.md` | Update table entries and descriptions |
| Legacy Docs | `docs/legacy/*.md` | Update example mentions |
| Comments | Throughout code | Update JSDoc and inline comments |

#### F. **Database** (If applicable)
| Item | Action |
|------|--------|
| Existing data | May need migration script |
| catalog_key column | Update values from old to new key |

---

## 4. Search & Replace Strategy

### Pattern 1: Exact Key References (Highest Risk)
**Search for:** `'[OLD_KEY]'` (with quotes)  
**Replace with:** `'[NEW_KEY]'`  
**Caution:** Make sure to include quotes in search to avoid partial matches

### Pattern 2: SQL Query Strings
**Search for:** `sum('[OLD_KEY]', ...` or similar SQL patterns  
**Replace with:** `sum('[NEW_KEY]', ...`  
**Caution:** SQL changes are critical—verify the entire query is correct

### Pattern 3: Display Names
**Search for:** `[OLD_NAME]` (without context)  
**Replace with:** `[NEW_NAME]`  
**Caution:** May have false positives in comments; manually verify each

### Pattern 4: TypeScript Type Names
**Search for:** `[OLD_KEY]` in type definitions  
**Replace with:** `[NEW_KEY]`  
**Files to check:** `buildings.ts`, `defenses.ts`, `units.ts`, `tech.ts`

### Pattern 5: Comments & Documentation
**Search for:** `[OLD_NAME]` in comments  
**Replace with:** `[NEW_NAME]`  
**Files to check:** All `.ts`, `.tsx`, `.md` files

---

## 5. Implementation Checklist

### Phase 1: Preparation (15 minutes)
- [ ] Create a Git branch: `feat/rename-[old_key]-to-[new_key]`
- [ ] Run grep searches to identify all references (note counts)
- [ ] Set up local test environment
- [ ] Back up current test data if needed

### Phase 2: Type System Changes (30 minutes)
- [ ] Update `packages/shared/src/buildings.ts` (or relevant file)
  - [ ] Update BuildingKey/DefenseKey/UnitKey union type
  - [ ] Update catalog entry key and name
- [ ] Update `packages/shared/src/structureLevels.ts` (or relevant file)
  - [ ] Rename object keys
  - [ ] Update comments
- [ ] Verify TypeScript compilation: `pnpm run build:shared`
- [ ] Run type checker: `pnpm run type-check`

### Phase 3: Client-Side Changes (45 minutes)
- [ ] Rename display files (if applicable)
  - [ ] `packages/client/src/components/game/levelTables/structures/[old_key].ts` → `[new_key].ts`
- [ ] Update index/exports in `packages/client/src/components/game/levelTables/[type]/index.ts`
  - [ ] Update import statements
  - [ ] Update object keys
- [ ] Update `packages/client/src/components/game/BaseDetail/breakdownBuilders.ts`
  - [ ] Update lookup keys
  - [ ] Update fallback text
- [ ] Update FAQ files: `packages/client/src/components/help/faqData.tsx`
  - [ ] Search for [OLD_NAME] references
  - [ ] Replace with [NEW_NAME]
- [ ] Update help files: `packages/client/src/components/help/helpData.tsx`
  - [ ] Search for [OLD_NAME] references
- [ ] Verify client builds: `pnpm run build:client`

### Phase 4: Server-Side Changes (60 minutes)
- [ ] Update all service files in `packages/server/src/services/`
  - [ ] Search each service file for `[OLD_KEY]` and `[OLD_NAME]`
  - [ ] Update case statements
  - [ ] Update SQL queries (CRITICAL)
  - [ ] Update comments
- [ ] Check these specific files:
  - [ ] `baseStatsService.ts` - Update comments
  - [ ] `bases/StatsService.ts` - Update comments and logic
  - [ ] `bases/CapacityService.ts` - Update SQL queries (CRITICAL)
  - [ ] `PlanetClaimingService.ts` - Update initial building config
  - [ ] `resources/ResourceCalculationService.ts` - Update switch statements
  - [ ] `structures/StructuresService.ts` - Update conditional logic
  - [ ] Other [structure type]-specific services
- [ ] Verify server builds: `pnpm run build:server`

### Phase 5: Test Updates (60 minutes)
- [ ] Update all test files with string literals
  - [ ] `tests/unit/shared/*.test.ts` - Update string literals
  - [ ] `tests/unit/server/services/*.test.ts` - Update mock objects
- [ ] Update all mock data objects:
  - [ ] `catalog_key: '[OLD_KEY]'` → `catalog_key: '[NEW_KEY]'`
  - [ ] `display_name: '[OLD_NAME]'` → `display_name: '[NEW_NAME]'`
- [ ] Run all tests: `pnpm run test`
- [ ] Verify 100% test pass rate

### Phase 6: Documentation & Final Checks (30 minutes)
- [ ] Update `docs/Game Mechanics and Rules.md`
  - [ ] Update table entries
  - [ ] Update mechanic descriptions
- [ ] Update legacy documentation files
- [ ] Run linter: `pnpm run lint`
- [ ] Final grep to verify no remaining `[OLD_KEY]` in source: `grep -r "[OLD_KEY]" packages/ --include="*.ts" --include="*.tsx"`

### Phase 7: Quality Assurance (60 minutes)
- [ ] Manual testing in development environment
  - [ ] Verify [structure type] creation works
  - [ ] Verify [structure type] upgrade works
  - [ ] Verify costs are correct
  - [ ] Verify calculations (capacity/energy/resources)
  - [ ] Verify UI displays "[NEW_NAME]" consistently
  - [ ] Verify FAQ/help text displays correctly
- [ ] Run full build: `pnpm run build`

### Phase 8: Database Migration (if needed)
- [ ] Create migration script:
  ```sql
  -- Update existing records in database
  UPDATE public.buildings
  SET catalog_key = '[NEW_KEY]'
  WHERE catalog_key = '[OLD_KEY]';
  
  UPDATE public.defenses
  SET catalog_key = '[NEW_KEY]'
  WHERE catalog_key = '[OLD_KEY]';
  
  -- Verify update
  SELECT COUNT(*) FROM public.buildings WHERE catalog_key = '[NEW_KEY]';
  SELECT COUNT(*) FROM public.buildings WHERE catalog_key = '[OLD_KEY]';
  ```
- [ ] Test migration on staging
- [ ] Execute on production with backup

**Total Estimated Time:** 4-5 hours

---

## 6. Critical Areas (Double-Check These)

### SQL Queries (Highest Risk)
File: `packages/server/src/services/bases/CapacityService.ts`

Look for patterns like:
- `sum('[OLD_KEY]', ...)`
- `'[OLD_KEY]'` in SQL string literals
- These MUST match database catalog_key values

**Action:** After replacement, visually verify entire query syntax is correct.

### TypeScript Type System
Files: `packages/shared/src/buildings.ts`, `defenses.ts`, `units.ts`

Look for:
- Union type definitions
- Catalog entries
- Type comments

**Action:** Run `pnpm run type-check` after changes—errors will immediately show mismatches.

### Test Mock Data
Files: `tests/unit/server/services/*.test.ts`

Look for:
- `catalog_key: '[OLD_KEY]'`
- `display_name: '[OLD_NAME]'`
- String literals in expect() calls

**Action:** Make sure mock data is consistent. If one test file is wrong, tests will fail.

### Comments (Easy to Miss)
Many files have comments mentioning the structure name.

**Action:** Search for `[OLD_NAME]` in comments and update descriptively.

---

## 7. Verification Commands

### After Type Changes
```bash
pnpm run type-check
pnpm run build:shared
```

### After All Changes
```bash
# Verify no lingering old key references
grep -r "[OLD_KEY]" packages/ --include="*.ts" --include="*.tsx"

# If matches appear, they need to be updated or are false positives (in comments, strings, etc.)
```

### Test Verification
```bash
pnpm run test
# All tests must pass with 0 failures
```

### Full Build
```bash
pnpm run build
# Must complete with no errors
```

### Lint Check
```bash
pnpm run lint
# Must pass with no errors
```

---

## 8. Risk Mitigation

### High-Risk Items

| Risk | Mitigation |
|------|-----------|
| SQL query string mismatch | Visually verify entire query after replacement; ensure it matches database schema |
| Test data inconsistency | Use script to verify all test files have consistent key names |
| Missed references | Use grep extensively; search multiple times with different patterns |
| Build artifacts not regenerated | Run full `pnpm run build` after all changes |
| Database value mismatch | Create and test migration script on staging first |

### Rollback Plan

If critical issues occur:
1. `git revert [commit-hash]` to undo code changes
2. Run reverse migration if data was updated: `UPDATE buildings SET catalog_key = '[OLD_KEY]' WHERE catalog_key = '[NEW_KEY]'`
3. Redeploy previous version
4. Root cause analysis

---

## 9. Success Criteria

The rename is considered successful when:

1. ✅ All TypeScript files compile without errors
2. ✅ All ESLint checks pass
3. ✅ All unit tests pass (100% pass rate)
4. ✅ All integration tests pass
5. ✅ `grep -r "[OLD_KEY]" packages/` returns zero results in source code
6. ✅ [Structure type] can be created and upgraded in dev environment
7. ✅ All calculations work correctly (energy/capacity/resources)
8. ✅ UI displays "[NEW_NAME]" consistently
9. ✅ FAQ/help text updated correctly
10. ✅ Code review approved with no outstanding comments
11. ✅ Database migration runs successfully (if applicable)

---

## 10. Files Modified Summary

After completing all steps, this should be the change summary:

### Type Definitions
- `packages/shared/src/buildings.ts` (or defenses.ts/units.ts)
- `packages/shared/src/structureLevels.ts` (or relevant)
- `packages/shared/src/types.ts` (if comments mention it)

### Client
- `packages/client/src/components/game/levelTables/structures/[new_key].ts` (renamed file)
- `packages/client/src/components/game/levelTables/structures/index.ts`
- `packages/client/src/components/game/BaseDetail/breakdownBuilders.ts`
- `packages/client/src/components/help/faqData.tsx`
- `packages/client/src/components/help/helpData.tsx` (if applicable)

### Server
- `packages/server/src/services/baseStatsService.ts`
- `packages/server/src/services/bases/StatsService.ts`
- `packages/server/src/services/bases/CapacityService.ts`
- `packages/server/src/services/PlanetClaimingService.ts`
- `packages/server/src/services/resources/ResourceCalculationService.ts`
- `packages/server/src/services/structures/StructuresService.ts`
- Plus any other service files using the key

### Tests (7-10 files)
- `tests/unit/shared/structureLevels.test.ts`
- `tests/unit/shared/energyBudget.test.ts`
- `tests/unit/server/services/baseStatsService.test.ts`
- `tests/unit/server/services/StatsService.test.ts`
- `tests/unit/server/services/StructuresService.test.ts`
- `tests/unit/server/services/PlanetClaimingService.test.ts`
- Others as identified by grep

### Documentation
- `docs/Game Mechanics and Rules.md`
- Any legacy documentation

### Database (if needed)
- Migration script (SQL file)

---

## 11. Questions Before Starting

Before beginning implementation, confirm:

1. Is "[NEW_NAME]" the final name, or is this subject to change?
2. Is there a live production database that needs migration?
3. Should we rename all [structure type]s in one PR or one at a time?
4. Are there any other names/identifiers that should change together?

---

## Next Steps

Once this template is completed for your specific [structure type]:

1. Create a branch: `feat/rename-[old_key]-to-[new_key]`
2. Follow the checklist in Phase 1-8
3. Create a pull request with this PRD as the description
4. Request code review
5. Merge and deploy

---

**Document Template Created:** [TODAY'S DATE]  
**For:** Attrition Structure Renaming  
**Questions?** Refer to the completed example PRD: `docs/prds/BUILDING_RENAME_PRD.md`
