## 1. Preparation and Backup

- [x] 1.1 Create backup of current `resource/vditor/` directory
- [x] 1.2 Document current Vditor version and customizations
- [x] 1.3 Verify target Vditor v3.11.2 dist files exist at `~/Documents/workspace/AI-for-biz/markdown-editors/vditor/dist`
- [x] 1.4 Review Vditor changelog between v3.9.9 and v3.11.2 for breaking changes
- [x] 1.5 Create git branch for Vditor upgrade work

## 2. Asset Replacement

- [x] 2.1 Copy `vditor.js` from v3.11.2 dist to `resource/vditor/`
- [x] 2.2 Copy `vditor.css` from v3.11.2 dist to `resource/vditor/`
- [x] 2.3 Copy `lute.min.js` from v3.11.2 dist (if updated)
- [x] 2.4 Copy icon assets from v3.11.2 dist to `resource/vditor/icon/`
- [x] 2.5 Copy CSS assets from v3.11.2 dist to `resource/vditor/css/`
- [x] 2.6 Verify custom wrapper files are preserved (`index.html`, `index.js`, `index.css`, `util.js`)

## 3. Code Updates and API Compatibility

- [x] 3.1 Review `resource/vditor/index.js` Vditor constructor options for v3.11.2 compatibility
- [x] 3.2 Verify CDN URL in `index.js` points to v3.11.2 (currently `https://unpkg.com/vditor@3.11.2`)
- [x] 3.3 Test toolbar configuration format compatibility
- [x] 3.4 Verify upload handler signature matches v3.11.2 API
- [x] 3.5 Check preview configuration options (theme, hljs, mermaid, math) for compatibility
- [x] 3.6 Review `resource/vditor/util.js` for any Vditor API calls that may have changed
- [x] 3.7 Verify Mermaid v11.12.2 integration configuration works with new Vditor version

## 4. Build Process Verification

- [x] 4.1 Run `yarn build` to build extension with new Vditor assets
- [x] 4.2 Verify `out/resource/vditor/` contains all v3.11.2 files
- [x] 4.3 Check bundle size impact of upgrade
- [x] 4.4 Confirm esbuild copy plugin correctly includes all Vditor assets

## 5. Development Testing

- [ ] 5.1 Start development server with `yarn dev`
- [ ] 5.2 Open a test .md file and verify editor initializes correctly
- [ ] 5.3 Test WYSIWYG mode editing and formatting
- [ ] 5.4 Test toolbar buttons and keyboard shortcuts
- [ ] 5.5 Verify syntax highlighting works correctly

## 6. QMD Feature Testing

- [ ] 6.1 Open a .qmd file with callout blocks and verify rendering
- [ ] 6.2 Test callout variants (note, warning, tip, important, caution)
- [ ] 6.3 Verify custom div containers render correctly
- [ ] 6.4 Test code cells with `#|echo: false` option
- [ ] 6.5 Test code cells with `#|output: false` option
- [ ] 6.6 Test code cells with `#|eval: false` option
- [ ] 6.7 Verify QMD preprocessor works with new Vditor version

## 7. Advanced Feature Testing

- [ ] 7.1 Test image paste functionality with automatic path handling
- [ ] 7.2 Verify Mermaid diagram rendering in markdown files
- [ ] 7.3 Test Mermaid diagram rendering in .qmd files
- [ ] 7.4 Verify mathematical expressions (inline math with `$`)
- [ ] 7.5 Verify mathematical expressions (block math with `$$`)
- [ ] 7.6 Test internal links and cross-references

## 8. Theme and Localization Testing

- [ ] 8.1 Test Auto theme switching
- [ ] 8.2 Test Light theme
- [ ] 8.3 Test Solarized theme
- [ ] 8.4 Verify syntax highlighting styles apply correctly
- [ ] 8.5 Test English language (en_US)
- [ ] 8.6 Test Chinese language (zh_CN)
- [ ] 8.7 Test other supported languages (ja_JP, ko_KR, ru_RU, zh_TW)

## 9. Export Functionality Testing

- [ ] 9.1 Test PDF export with outline
- [ ] 9.2 Test PDF export without outline
- [ ] 9.3 Verify PDF export includes QMD features correctly
- [ ] 9.4 Test HTML export functionality
- [ ] 9.5 Test Docx export functionality
- [ ] 9.6 Verify custom Chromium path configuration works
- [ ] 9.7 Test export with large documents

## 10. Context Menu and Toolbar Testing

- [ ] 10.1 Test context menu Copy functionality
- [ ] 10.2 Test context menu Paste functionality
- [ ] 10.3 Test context menu Export PDF options
- [ ] 10.4 Test context menu Export Docx option
- [ ] 10.5 Test context menu Export HTML option
- [ ] 10.6 Verify custom toolbar buttons work correctly

## 11. Performance and Regression Testing

- [ ] 11.1 Compare rendering speed with large markdown files (>1000 lines)
- [ ] 11.2 Test editor responsiveness during typing
- [ ] 11.3 Verify memory usage is acceptable
- [ ] 11.4 Test scrolling performance in documents with many code blocks
- [ ] 11.5 Verify no console errors or warnings during normal use
- [ ] 11.6 Test all file types (.md, .markdown, .qmd, .typ)

## 12. Documentation and Release

- [ ] 12.1 Update CHANGELOG.md with v3.11.2 upgrade notes
- [ ] 12.2 Document any breaking changes or migration steps
- [ ] 12.3 Update package.json version (3.5.6 → 3.5.7)
- [ ] 12.4 Create PR with changes
- [ ] 12.5 Test full extension package with `yarn package`
- [ ] 12.6 Verify VSIX installs and functions correctly

## 13. Rollback Planning

- [ ] 13.1 Document rollback procedure if critical issues found
- [ ] 13.2 Keep backup of v3.9.9 assets for quick restoration
- [ ] 13.3 Monitor GitHub issues for user-reported problems post-release
- [ ] 13.4 Prepare hotfix release plan if needed
