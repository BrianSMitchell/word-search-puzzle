# Fleet Dispatch System - Distance & Travel Mechanics Clarifications

**Date:** 2025-01-15
**Updated PRD:** `/docs/prds/0002-prd-fleet-dispatch-system.md`

---

## Key Clarifications Applied to PRD

### 1. Distance Calculation (Critical: Used by Both Travel & Trade Routes)

Distance is now calculated in tiers based on location hierarchy:

#### Same System Distance
- **Same solar position**: `0.1`
- **Different solar positions**: `0.2 × (absolute difference in positions)`
  - Example: Position 1 → Position 3 = `0.2 × 2 = 0.4`

#### Between Regions in Same Galaxy
- **Adjacent regions** (Chebyshev distance = 1): `10 units`
- **Non-adjacent regions**: Pythagorean theorem on 2D grid
  - Formula: `distance = √((ΔRegion_X)² + (ΔRegion_Y)²) × 10`
  - Example: Region (0,0) → Region (1,1) = `√(1² + 1²) × 10 = 14.14 units`
  - Alternative (Manhattan): `(ΔX + ΔY) × 10 = 20 units`

#### Between Galaxies
- Use wormhole connections if available (70% distance reduction)
- Otherwise use direct galaxy-to-galaxy distance formula

**Coordinate Format (Expanded from original PRD):**
```
A00:51:09:01:04
├─ Server: A00
├─ Galaxy: 51
├─ Region_X: 09
├─ Region_Y: 01
└─ System: 04
```

---

### 2. Travel Speed Formulas (Updated with Multiple Scenarios)

#### Base Formula
```
Travel Time (hours) = Distance / Speed
```

#### With Drive Technology (Stellar or Warp)
```
Speed = Base Speed × (1 + 0.05 × Drive Tech Level)
```
- **Stellar Drive**: 1-12 levels, applies to Stellar units
- **Warp Drive**: 1-20 levels, applies to Warp units

#### With Jump Gate (Level 1-5)
```
Speed = Base Speed × (1 + 0.7 × Jump Gate Level)
```
- **Jump Gate level 1**: 70% speed increase
- **Jump Gate level 2**: 140% speed increase (2.4× multiplier)
- **Jump Gate level 5**: 350% speed increase (4.5× multiplier)
- **Death Stars CANNOT use Jump Gates** (travel at Drive Tech speed only)

#### With Logistics Commander (Level 1-100)
```
Travel Duration = Base Duration × (1 - Commander Level × 0.01)
```
- **Commander level 1**: 1% reduction
- **Commander level 5**: 5% reduction
- **Commander level 100**: 100% reduction (instant arrival)
- **Does NOT affect wormhole travel** (separate mechanic)

#### Combined Jump Gate + Logistics Commander
```
Speed = Base Speed × (1 + 0.7 × Jump Gate Level) / (1 - Commander Level × 0.01)
```

#### Combined Drive Tech + Logistics Commander
```
Travel Duration = (Distance / Speed) × (1 - Commander Level × 0.01)
Speed = Base Speed × (1 + 0.05 × Drive Tech Level)
```

---

### 3. User Stories Added/Updated

**Story 6 (NEW): Logistics Commander Travel Reduction**
- Commander assigned to base reduces fleet travel time
- Formula: `Travel Duration × (1 - Commander Level × 0.01)`
- Works with Drive Tech and Jump Gate bonuses
- Does NOT affect wormhole travel
- Example: 10-hour trip + level 5 Logistics = `10 × 0.95 = 9.5 hours`

**Story 3 (UPDATED): Jump Gate Speed Bonus and Interstellar Travel**
- Jump Gate provides level-based speed bonus, not fixed 70%
- Formula: `Speed × (1 + 0.7 × Jump Gate Level)`
- Stellar units REQUIRE Jump Gate to cross galaxies
- Warp units CAN cross without Jump Gate (optional bonus)
- Death Stars cannot use Jump Gates

**Story 7 (RENUMBERED): Real-Time Fleet Tracking**
- Was Story 6, renumbered due to new Logistics story

---

### 4. Requirements Updated

**REQ-001: Fleet Dispatch Command Processing**
- Updated coordinate format validation to show 5 components
- Added explicit coordinate component ranges

**REQ-002: Distance Calculation**
- Completely rewritten with tiered distance rules
- Includes same-system, inter-region, and inter-galaxy calculations
- Emphasizes importance to both travel AND trade routes

**REQ-003: Fleet Speed Determination**
- Clarified that tech bonuses only apply to matching drive types
- Added example calculations

**REQ-004: Jump Gate and Interstellar Travel**
- Changed from fixed 70% bonus to level-based formula
- Jump Gate level 1-5 provides 70%-350% speed increase
- Death Stars explicitly cannot use Jump Gates
- Clarified Logistics commander exception for wormhole travel

**REQ-006: Travel Time Calculation with Bonuses**
- Completely restructured with multiple formulas
- Shows Drive Tech, Jump Gate, Logistics Commander, and combined scenarios
- Added special rules for Death Stars and wormholes

---

### 5. Testing Scenarios Added/Updated

**Test Scenario 4 (UPDATED): Jump Gate Bonus Interstellar Travel**
- Updated to test level-based Jump Gate formula

**Test Scenario 5 (UPDATED): Speed 0 Unit Validation**
- No changes needed (already correct)

**Test Scenario 10 (NEW): Logistics Commander Bonus**
- Tests commander level impact on travel time
- Verifies interaction with Jump Gate bonuses
- Confirms wormhole exclusion

---

### 6. Glossary Enhanced

Added/Updated definitions:
- **Unit Speed**: 0-12 value; speed 0 units travel in hangars
- **Drive Type**: Hangar/Speed 0, Stellar, Warp with specific speed ranges
- **Effective Speed**: Unit speed × (1 + 0.05 × matching drive tech level)
- **Jump Gate**: Structure with level 1-5 providing 70%-350% speed increase
- **Interstellar Travel**: Movement between different galaxies
- **Intra-Galaxy Travel**: Movement within same galaxy
- **Technology Bonus**: Speed increase from researched drive tech (+5% per level)

---

### 7. Critical Implementation Notes

1. **Distance is Shared Logic**
   - Used by fleet dispatch system (travel time)
   - Used by trade route system (value calculation)
   - Any distance formula changes must be coordinated

2. **Jump Gate Level Matters**
   - Not a binary on/off
   - Speed bonus scales with gate level (1-5)
   - Higher level gates significantly speed up travel

3. **Speed Calculation Order of Operations**
   - Calculate base speed for each unit
   - Apply tech bonuses (Drive Tech OR Jump Gate, not both)
   - Apply Logistics commander reduction (multiplicative)
   - Use slowest effective speed for fleet

4. **Death Star Limitations**
   - Cannot use Jump Gates
   - Must use Drive Tech speed only (likely Anti-Gravity tech)
   - Can still benefit from Logistics commander

5. **Wormhole Exception**
   - Logistics commanders do NOT affect wormhole travel
   - This is a special case to handle in code

---

### 8. Examples for Implementation

**Example 1: Stellar Unit with Tech & Jump Gate**
- Base speed: 8
- Stellar Drive tech level: 3
- Jump Gate at origin: level 2
- Logistics commander: none
- Calculation: `8 × (1 + 0.7 × 2) = 8 × 2.4 = 19.2 effective speed`
- Distance: 40 units
- Travel time: `40 / 19.2 = 2.08 hours → 2 hours`

**Example 2: Warp Unit with Tech, Jump Gate, & Commander**
- Base speed: 5
- Warp Drive tech level: 5
- Jump Gate at origin: level 1
- Logistics commander: level 10
- Step 1: Tech speed = `5 × (1 + 0.05 × 5) = 5 × 1.25 = 6.25`
- Step 2: Jump Gate speed = `5 × (1 + 0.7 × 1) = 5 × 1.7 = 8.5`
- Step 3: Use Jump Gate speed: `8.5`
- Step 4: Apply commander: `(40 / 8.5) × (1 - 0.10) = 4.71 × 0.9 = 4.24 hours → 4 hours`

**Example 3: Death Star (No Jump Gate)**
- Base speed: 2
- Anti-Gravity tech level: 8 (Death Star's engine tech)
- No Jump Gate available (or Death Star ignores it)
- Logistics commander: level 5
- Calculation: `2 × (1 + 0.05 × 8) = 2 × 1.4 = 2.8 effective speed`
- Apply commander: `(50 / 2.8) × (1 - 0.05) = 17.86 × 0.95 = 16.97 hours → 17 hours`

---

## Files Modified

- **PRD:** `/docs/prds/0002-prd-fleet-dispatch-system.md`
  - Updated Stories 3-6 (renumbered 6 → 7)
  - Updated REQ-001, REQ-002, REQ-003, REQ-004, REQ-006
  - Updated test scenarios
  - Updated glossary
  - Added trade route coordination note in non-goals

---

## Next Steps for Implementation

1. **Coordinate with Trade Route System**
   - Confirm distance calculation matches
   - Ensure both systems use same formula

2. **Database Schema**
   - Store commander_id in fleet_movements (nullable)
   - Store jump_gate_level in fleet_movements (for audit)
   - Store actual_speed_used for verification

3. **API Response**
   - Include breakdown of speed calculations
   - Show base speed, tech bonus, Jump Gate bonus, commander reduction separately
   - Help players understand how their ETA was calculated

4. **UI Display**
   - Show all components of travel time calculation
   - Example: "10h (base) - 3h (Jump Gate) - 0.5h (Commander) = 6.5h (final)"
   - Color code speed improvements from tech vs Jump Gate vs Commander

5. **Commander System Integration**
   - Query base for assigned Logistics commander
   - If none assigned, skip reduction
   - Validate commander level exists and is active
