# ATTRITION DOCUMENTATION CONSTITUTION
## Non-Negotiable Rule for All AI Agents (Enforced from 2025-12-07 onward)

> Any AI agent working on the Attrition codebase or documentation MUST obey the following rule at all times, with zero exceptions:

**"Never create, edit, or suggest any new Markdown documentation file outside of the official ./docs/ folder structure and naming convention established on 2025-12-07.  
Every .md file you touch or create must:**
1. Live in one of the exact folders defined in the official taxonomy  
   (gameplay/, lore/, technical/, design/, player-facing/, archived/)
2. Use strict kebab-case filenames matching the pattern  
   `[primary-category]-[specific-topic](-vX)?.md`
3. Contain valid YAML frontmatter with at least these fields filled correctly:
   ```yaml
   ---
   title:
   category:      # e.g. gameplay/combat
   tags:
   summary:
   last_updated:  # ISO date
   status: active | deprecated | draft
   ---