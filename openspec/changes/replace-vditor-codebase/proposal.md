## Why

The current Vditor integration (v3.9.9) in `resource/vditor/` is outdated and lacks recent improvements, bug fixes, and performance enhancements available in Vditor v3.11.2. Upgrading will provide better markdown rendering, enhanced QMD support, improved WYSIWYG editing, and compatibility with modern browsers. The newer version also includes important security patches and accessibility improvements.

## What Changes

- Replace bundled Vditor files in `resource/vditor/` with v3.11.2 distribution from `~/Documents/workspace/AI-for-biz/markdown-editors/vditor/dist`
- Update Vditor initialization and configuration code in `src/react/` to match v3.11.2 API
- **BREAKING**: Review and update any custom Vditor plugin configurations that may have changed between versions
- Update build process to properly include new Vditor assets
- Test all markdown editor functionality including:
  - Standard Markdown (.md, .markdown)
  - Quarto Markdown (.qmd) with callouts and code cells
  - Typst files (.typ)
  - Image paste functionality
  - PDF export
  - Theme switching (Auto/Light/Solarized)
  - Multi-language support

## Capabilities

### New Capabilities

- `vditor-upgrade`: Modern markdown editor core with v3.11.2 features including improved rendering performance, enhanced syntax highlighting, and better accessibility

- `qmd-enhanced-support`: Extended Quarto Markdown support leveraging latest Vditor improvements for callouts, custom divs, and code cell options

- `markdown-export`: Enhanced export functionality with improved PDF generation and HTML export using updated Vditor APIs

### Modified Capabilities

- `markdown-editing`: Enhanced markdown editing capabilities with better WYSIWYG mode, improved toolbar, and enhanced keyboard shortcuts

## Impact

**Affected Code:**
- `resource/vditor/` - All Vditor assets (JS, CSS, icons, dist files)
- `src/provider/markdownEditorProvider.ts` - Vditor initialization and configuration
- `src/react/view/markdown/` - React components using Vditor
- `src/service/markdown/` - Markdown processing services
- `build.ts` - Build process for bundling Vditor assets
- `vite.config.ts` - Vite configuration for webview development

**Dependencies:**
- Upgrade from bundled Vditor v3.9.9 → v3.11.2
- No new npm dependencies required (using bundled distribution)

**Configuration:**
- All existing VS Code settings remain compatible
- No breaking changes to user-facing configuration

**Testing Required:**
- All markdown file types (.md, .markdown, .qmd, .typ)
- Custom markdown features (callouts, code cells, mathematical expressions)
- Image paste and path handling
- PDF export functionality
- Theme switching
- Multi-language support
- Keyboard shortcuts and toolbar functionality
