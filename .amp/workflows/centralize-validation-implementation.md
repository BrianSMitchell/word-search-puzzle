# Workflow: Centralize Building Validation Logic

**Objective:** Fix scattered building validation causing bugs like terraform area requirement error and prevent similar issues.

**Reference:** `docs/PRD_CENTRALIZE_VALIDATION.md`

---

## Phase 1: Create BuildingValidationService

### Task 1.1: Create Service File
- [ ] Create `packages/server/src/services/structures/BuildingValidationService.ts`
- [ ] Implement `BuildingValidationContext` interface
- [ ] Implement `ValidationError` interface
- [ ] Implement `validateCanStart()` orchestrator method
- [ ] Implement tech gates validation
- [ ] Implement credits validation
- [ ] Implement capacity validation (with queue projection)
- [ ] Implement energy validation
- [ ] Add helper methods for building list mapping and location mapping

**Acceptance:** Service can validate all building construction requirements in one place

### Task 1.2: Write Unit Tests
- [ ] Create `packages/server/src/services/structures/__tests__/BuildingValidationService.test.ts`
- [ ] Test terraform with 0 area requirement (the bug case)
- [ ] Test building with 1 area requirement
- [ ] Test queue projection updates capacity correctly
- [ ] Test energy balance with multiple building types
- [ ] Test tech prerequisites validation
- [ ] Test credits validation
- [ ] Test edge cases (zero capacity, no queue, multiple queued items)

**Acceptance:** All tests pass, coverage > 90%

### Task 1.3: Audit Capacity Calculations
- [ ] Review `CapacityService.ts` - ensure compatible with new service
- [ ] Review `StatsService.ts` - ensure area/population calculations match
- [ ] Review `computeEnergyBalance()` - ensure energy calc consistent
- [ ] Document any differences in calculation logic

**Acceptance:** No conflicts found or conflicts resolved

---

## Phase 2: Migrate Routes to Use Service

### Task 2.1: Update territoryRoutes.ts
- [ ] Import `BuildingValidationService`
- [ ] Replace lines 868-893 (area/pop/credits/energy checks) with service call
- [ ] Test UI shows correct eligibility
- [ ] Test terraform shows as available (no more "1 required" error)

**Files to modify:**
- `packages/server/src/routes/v1/territoryRoutes.ts` (lines 860-895)

**Acceptance:** Route uses service, terraform eligible with 0 area

### Task 2.2: Update buildingRoutes.ts
- [ ] Audit for any validation logic
- [ ] Migrate any local validation to service
- [ ] Document any route-specific validation that should stay local

**Files to modify:**
- `packages/server/src/routes/v1/buildingRoutes.ts`

**Acceptance:** No hardcoded defaults, no duplicate validation

---

## Phase 3: Migrate Services to Use Central Service

### Task 3.1: Update StructuresService.ts
- [ ] Review current validation (lines 208-500+)
- [ ] Replace with `BuildingValidationService.validateCanStart()`
- [ ] Ensure tech check still works
- [ ] Ensure credits check still works
- [ ] Ensure energy check still works
- [ ] Ensure capacity check with queue projection still works

**Files to modify:**
- `packages/server/src/services/structures/StructuresService.ts`

**Acceptance:** Service uses central validation, no duplicate logic

### Task 3.2: Review StructureCore.ts
- [ ] Audit lines 122-200+ for validation logic
- [ ] Document any special validation that core does
- [ ] Determine if core should use service or if it's for different purposes

**Files to review:**
- `packages/server/src/core/structures/StructureCore.ts`

**Acceptance:** Validation pattern documented, no duplicate hardcoded defaults

### Task 3.3: Test Construction Workflow
- [ ] Test starting new building
- [ ] Test queuing upgrade
- [ ] Test with zero area requirement (terraform)
- [ ] Test with various capacity states
- [ ] Test with insufficient resources (all types)

**Acceptance:** All construction workflows work correctly

---

## Phase 4: Audit Similar Issues (Scan Phase)

### Task 4.1: Audit Units Validation
- [ ] Search `UnitsCore.ts` for validation logic
- [ ] Search `UnitsService.ts` for validation logic
- [ ] Document scattered validation locations
- [ ] Create task for `UnitsValidationService` if needed

**Files to audit:**
- `packages/server/src/core/units/UnitsCore.ts`
- `packages/server/src/services/units/UnitsService.ts`
- `packages/server/src/routes/v1/game/units.ts`

**Acceptance:** Validation pattern documented, issues listed

### Task 4.2: Audit Defenses Validation
- [ ] Search `DefensesCore.ts` for validation logic
- [ ] Search `DefensesService.ts` for validation logic
- [ ] Document scattered validation locations
- [ ] Create task for `DefensesValidationService` if needed

**Files to audit:**
- `packages/server/src/core/defenses/DefensesCore.ts`
- `packages/server/src/services/defenses/DefensesService.ts`
- `packages/server/src/routes/v1/game/defenses.ts`

**Acceptance:** Validation pattern documented, issues listed

### Task 4.3: Audit Tech Validation
- [ ] Search `TechCore.ts` for eligibility checks
- [ ] Search `hybridGameLoopService.ts` for tech validation
- [ ] Document double-validation in game loop
- [ ] Create task for `TechValidationService` if needed

**Files to audit:**
- `packages/server/src/core/tech/TechCore.ts`
- `packages/server/src/services/hybridGameLoopService.ts`

**Acceptance:** Validation pattern documented, issues listed

### Task 4.4: Audit Economy/Resources
- [ ] Search for hardcoded calculations of energy/credits
- [ ] Document all places that access `baseStats.area.free`, `baseStats.population.free`
- [ ] Document all places that call `computeEnergyBalance()`
- [ ] Create task for centralized economy service if needed

**Files to audit:**
- `packages/server/src/services/economy/`
- `packages/server/src/services/bases/CapacityService.ts`
- `packages/server/src/services/bases/StatsService.ts`
- `packages/shared/src/improvedEnergyBudget.ts`

**Acceptance:** Economy calculation pattern documented, issues listed

---

## Phase 5: Create Follow-Up Tasks (Out of Scope for This PR)

### Task 5.1: Create UnitsValidationService Task
- [ ] Create task based on Phase 4.1 findings
- [ ] Link to this workflow
- [ ] Prioritize if units have similar bugs

### Task 5.2: Create DefensesValidationService Task
- [ ] Create task based on Phase 4.2 findings
- [ ] Link to this workflow
- [ ] Prioritize if defenses have similar bugs

### Task 5.3: Create TechValidationService Task
- [ ] Create task based on Phase 4.3 findings
- [ ] Link to this workflow
- [ ] Address game loop double-validation

### Task 5.4: Create EconomyValidationService Task
- [ ] Create task based on Phase 4.4 findings
- [ ] Link to this workflow
- [ ] Unify resource/capacity calculations

---

## Testing Strategy

### Unit Tests
- Test each validator independently
- Test with various building specs
- Test queue projection logic
- Test edge cases

### Integration Tests
- Test full construction workflow
- Test UI eligibility matches backend
- Test with multiple bases
- Test terraform building (regression test for bug)

### Manual Testing
- Build terraform when base has 0 area (should succeed)
- Build terraform when base has full area (should work)
- Queue multiple buildings and check capacity projection
- Test with various building types

---

## Success Criteria

- [x] Bug identified: terraform requires area when it shouldn't
- [ ] Root cause identified: scattered validation with hardcoded defaults
- [ ] `BuildingValidationService` created and tested
- [ ] No hardcoded `|| 1` defaults in validation code
- [ ] All routes use centralized service
- [ ] All services use centralized service
- [ ] Similar issues identified in units/defenses/tech/economy
- [ ] No regression in construction workflow
- [ ] Terraform building works correctly
- [ ] Follow-up tasks created for units/defenses/tech/economy

---

## Timeline Estimate

**Phase 1 (Service):** 4-6 hours
- Implementation: 2-3 hours
- Testing: 1-2 hours
- Audit: 1 hour

**Phase 2 (Routes):** 2-3 hours
- territoryRoutes: 1 hour
- buildingRoutes: 0.5 hour
- Testing: 1-1.5 hours

**Phase 3 (Services):** 3-4 hours
- StructuresService: 1.5-2 hours
- StructureCore audit: 0.5-1 hour
- Testing: 1-1.5 hours

**Phase 4 (Audit):** 2-3 hours
- Units audit: 0.5 hour
- Defenses audit: 0.5 hour
- Tech audit: 0.5 hour
- Economy audit: 0.5-1 hour
- Documentation: 1 hour

**Total:** 11-16 hours (~2-3 day effort)

---

## Dependencies

- Understanding of building system architecture
- Access to test environment
- Understanding of validation patterns in codebase
- Ability to run test suite

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Breaking existing construction workflow | Comprehensive unit tests, manual testing before deploy |
| Missing validation edge cases | Thorough audit of existing code, test edge cases |
| Performance impact of queue projection | Optimize sorting logic, cache results if needed |
| Similar bugs in units/defenses/tech | Create follow-up tasks in Phase 5 |

---

## Notes

- This fixes the immediate terraform bug
- This establishes pattern for future validation services
- Audit phase will identify ~4-5 more services needed
- Recommend implementing units/defenses next
- Economy/resources most complex, prioritize last
