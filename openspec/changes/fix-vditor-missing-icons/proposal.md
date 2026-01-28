## Why

During the Vditor v3.11.2 upgrade, the custom toolbar icons (vscode.svg, codicon-files.svg, pdf.svg, theme.svg) were replaced with the standard Vditor distribution, which doesn't include these custom icons. The toolbar code in `resource/vditor/util.js` still references these missing icons, causing them to not display in the markdown editor toolbar.

## What Changes

- Restore custom toolbar icons from v3.9.9 backup to `resource/vditor/icon/`
- Ensure these icons are preserved in future Vditor upgrades
- Verify toolbar buttons display correctly with restored icons

## Capabilities

### New Capabilities

- `custom-toolbar-icons`: Custom toolbar icons for VS Code integration features (Edit in VSCode, Quick Open, Export PDF, Theme Switcher)

### Modified Capabilities

None - this is a bug fix, not a requirement change

## Impact

**Affected Code:**
- `resource/vditor/icon/` - Icon assets directory
- `resource/vditor/util.js` - Toolbar configuration (already references these icons)

**Files to Restore:**
- `resource/vditor/icon/vscode.svg` - Edit in VS Code button
- `resource/vditor/icon/codicon-files.svg` - Quick Open button
- `resource/vditor/icon/pdf.svg` - Export PDF button
- `resource/vditor/icon/theme.svg` - Theme Switcher button

**Testing Required:**
- Verify all custom toolbar buttons display with correct icons
- Test toolbar button functionality (Edit in VSCode, Quick Open, Export PDF, Theme)
