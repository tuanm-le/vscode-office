# Custom Toolbar Icons

This directory contains custom toolbar icons for VS Code integration features in the markdown editor.

## ⚠️ Important: Preserve During Vditor Upgrades

**When upgrading Vditor to a new version, DO NOT replace this entire `icon/` directory.**
Only update the standard Vditor icons (emoji/, img-loading.svg, logo.png) and preserve the custom icons listed below.

## Custom Icons (must be preserved)

These icons are used by the custom toolbar buttons configured in `resource/vditor/util.js`:

- **`vscode.svg`** - "Edit in VSCode" toolbar button
  - Opens the current markdown file in VS Code's default editor
  - Referenced in util.js line ~77

- **`codicon-files.svg`** - "Quick Open" toolbar button
  - Opens VS Code's Quick Open panel (Cmd/Ctrl+P)
  - Referenced in util.js line ~86

- **`pdf.svg`** - "Export PDF" toolbar button
  - Exports the current markdown document to PDF format
  - Referenced in util.js line ~95

- **`theme.svg`** - "Theme Switcher" toolbar button
  - Opens theme picker for changing editor appearance
  - Referenced in util.js line ~112

## Standard Vditor Icons (from Vditor distribution)

These icons are part of the standard Vditor distribution and can be safely updated during upgrades:

- **`emoji/`** - Emoji picker icons
- **`img-loading.svg`** - Loading indicator animation
- **`logo.png`** - Vditor logo

## Icon Format

All custom icons are SVG (Scalable Vector Graphics) files:
- Format: XML-based SVG
- Scalable: Yes (vector graphics)
- Typical size: 16x16px or 20x20px (toolbar size)
- Colors: Optimized for both light and dark themes

## Adding New Custom Icons

If adding new custom toolbar buttons:

1. Create or obtain an SVG icon file
2. Save it to this `resource/vditor/icon/` directory
3. Add the icon reference in `resource/vditor/util.js` `getToolbar()` function
4. Document the icon here in this README

## Troubleshooting

**Icons not displaying in toolbar:**
- Check browser console for 404 errors on icon files
- Verify icon paths in util.js match actual filenames
- Ensure icon files exist and are valid SVG (use `file` command to check)
- Check that VS Code webview has permission to load local resources

**Icons appear distorted:**
- Verify SVG viewBox and width/height attributes
- Check that icon size matches toolbar expectations (usually 16-20px)
- Test icon in both light and dark themes

## Related Files

- `resource/vditor/util.js` - Toolbar configuration and icon loading
- `resource/vditor/index.js` - Vditor initialization
- `src/provider/markdownEditorProvider.ts` - Extension provider
