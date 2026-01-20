---
name: Agent Browser CLI
description: Use agent-browser for headless browser automation, screenshots, and web testing
---

# Agent Browser CLI Skill

Use `agent-browser` for browser automation tasks like taking screenshots, testing web pages, and interacting with elements.

## Windows Usage (Required)

On Windows PowerShell, use the native executable directly:

```powershell
& 'C:\Users\roand\AppData\Roaming\npm\node_modules\agent-browser\bin\agent-browser-win32-x64.exe' <command>
```

## Core Commands

### Navigation
```powershell
# Open a URL
& 'C:\...\agent-browser-win32-x64.exe' open https://example.com

# Navigate to a new page
& 'C:\...\agent-browser-win32-x64.exe' navigate https://other-page.com

# Close browser session
& 'C:\...\agent-browser-win32-x64.exe' close
```

### Screenshots
```powershell
# Full page screenshot
& 'C:\...\agent-browser-win32-x64.exe' screenshot page.png

# Screenshot with viewport only
& 'C:\...\agent-browser-win32-x64.exe' screenshot --viewport page.png
```

### Get Page Info
```powershell
# Get accessibility tree with element refs (for AI agents)
& 'C:\...\agent-browser-win32-x64.exe' snapshot

# Get page title
& 'C:\...\agent-browser-win32-x64.exe' get title

# Get page URL
& 'C:\...\agent-browser-win32-x64.exe' get url

# Get text content of an element by ref
& 'C:\...\agent-browser-win32-x64.exe' get text @e1
```

### Interactions
```powershell
# Click element by ref (from snapshot)
& 'C:\...\agent-browser-win32-x64.exe' click @e2

# Fill input by ref
& 'C:\...\agent-browser-win32-x64.exe' fill @e3 "text to enter"

# Type text (keystrokes)
& 'C:\...\agent-browser-win32-x64.exe' type "hello world"

# Press key
& 'C:\...\agent-browser-win32-x64.exe' press Enter
```

### CSS Selectors (Alternative to refs)
```powershell
# Click using CSS selector
& 'C:\...\agent-browser-win32-x64.exe' click "button.submit"

# Get text using CSS selector
& 'C:\...\agent-browser-win32-x64.exe' get text "h1"
```

## Workflow Example

1. **Open page:**
   ```powershell
   & 'C:\Users\roand\AppData\Roaming\npm\node_modules\agent-browser\bin\agent-browser-win32-x64.exe' open http://localhost:3000
   ```

2. **Take snapshot to see elements:**
   ```powershell
   & 'C:\...\agent-browser-win32-x64.exe' snapshot
   ```
   This returns refs like `@e1`, `@e2` for each interactive element.

3. **Interact with elements:**
   ```powershell
   & 'C:\...\agent-browser-win32-x64.exe' click @e5
   ```

4. **Take screenshot:**
   ```powershell
   & 'C:\...\agent-browser-win32-x64.exe' screenshot result.png
   ```

5. **Close when done:**
   ```powershell
   & 'C:\...\agent-browser-win32-x64.exe' close
   ```

## When to Use

- Taking screenshots for documentation or verification
- Testing web pages programmatically
- Automating form submissions
- Extracting text content from pages
- Browser-based testing and validation

## Notes

- The browser runs headless by default
- Sessions persist between commands until `close` is called
- Use `snapshot` to get element refs before clicking/filling
- Screenshots are saved to the current working directory
