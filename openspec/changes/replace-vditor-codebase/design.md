## Context

**Current State:**
The extension uses Vditor v3.9.9 bundled in `resource/vditor/` directory. The integration consists of:
- Pre-built Vditor assets (JS, CSS, icons) from v3.9.9
- Custom initialization code in `resource/vditor/index.js` that configures Vditor with QMD support, Mermaid v11.12.2, and custom toolbars
- Provider code in `src/provider/markdownEditorProvider.ts` that handles markdown file editing
- Custom utilities in `resource/vditor/util.js` for image handling, toolbar customization, and context menus

**Target State:**
Upgrade to Vditor v3.11.2 from the local development repository at `~/Documents/workspace/AI-for-biz/markdown-editors/vditor/dist`, which includes bug fixes, performance improvements, and enhanced features.

**Constraints:**
- Must maintain backward compatibility with existing QMD syntax and features
- Cannot break existing user configurations (themes, languages, toolbar settings)
- Must preserve custom functionality (image paste handling, context menus, toolbar customizations)
- Build process must properly bundle the new assets

## Goals / Non-Goals

**Goals:**
- Replace all Vditor assets in `resource/vditor/` with v3.11.2 distribution
- Update Vditor initialization to leverage v3.11.2 API improvements
- Ensure all existing features continue to work (QMD support, image paste, PDF export, themes)
- Maintain custom toolbars and context menu functionality
- Improve markdown rendering performance and syntax highlighting

**Non-Goals:**
- Modifying the QMD preprocessor architecture (already working)
- Changing the VS Code extension configuration schema
- Replacing the custom markdown service layer
- Modifying image path handling logic

## Decisions

### 1. Asset Replacement Strategy

**Decision:** Copy distribution files from `~/Documents/workspace/AI-for-biz/markdown-editors/vditor/dist` to `resource/vditor/`, preserving custom wrapper files.

**Rationale:**
- The target repository has built distribution files ready to use
- Preserves custom initialization code (`index.js`, `util.js`, `index.html`, `index.css`)
- Allows selective updates rather than full replacement
- Easier rollback if issues arise

**Alternatives Considered:**
- **Full directory replacement:** Rejected because would lose customizations and require recreating all wrapper code
- **NPM package upgrade:** Rejected because the local repository has custom build configurations and modifications not published to NPM

### 2. Configuration Update Approach

**Decision:** Update `resource/vditor/index.js` to use v3.11.2 CDN URL in Vditor initialization options.

**Rationale:**
- The current code already references `cdn: 'https://unpkg.com/vditor@3.11.2'` (line 55)
- This approach is already in place and working correctly
- Allows loading Vditor core from CDN while using local assets for customization

**Alternatives Considered:**
- **Fully local bundling:** Rejected because it would increase extension size significantly
- **Keep v3.9.9 CDN:** Rejected because defeats the purpose of upgrade

### 3. Build Process Integration

**Decision:** No changes needed to `build.ts` - the current esbuild copy configuration already handles `resource/vditor/`.

**Rationale:**
- The `build.ts` file uses `esbuild-plugin-copy` to copy the entire `resource/` directory to `out/`
- This automatically includes any updates to `resource/vditor/`
- No special handling required

**Verification Required:**
- Confirm that all new v3.11.2 assets are properly copied to `out/` after build
- Test that webview can load all resources correctly

### 4. API Compatibility Handling

**Decision:** Review and test all Vditor API calls in `resource/vditor/util.js` and `index.js` for v3.11.2 compatibility.

**Rationale:**
- Vditor maintains good backward compatibility, but some APIs may have changed
- Need to verify custom toolbar, hint, and upload configurations still work
- Testing is safer than assuming compatibility

**Key Areas to Verify:**
- `Vditor` constructor options (line 52-118 in `index.js`)
- `editor.setValue()` and other editor methods
- Toolbar configuration format
- Upload handler signature
- Preview configuration options

## Risks / Trade-offs

### Risk 1: Breaking Changes in Vditor API
**Risk:** Vditor v3.11.2 may have introduced breaking changes to API methods used in custom code.

**Mitigation:**
- Test all custom functionality after upgrade (image paste, PDF export, toolbar actions)
- Check Vditor changelog between v3.9.9 and v3.11.2 for breaking changes
- Keep v3.9.9 assets backed up for quick rollback

### Risk 2: QMD Preprocessor Compatibility
**Risk:** The QMD preprocessor (`src/service/qmdPreprocessor.ts`) may produce output incompatible with v3.11.2 rendering.

**Mitigation:**
- Test all QMD features (callouts, code cells, custom divs) after upgrade
- Verify that Mermaid v11.12.2 integration still works with new Vditor version
- Have fallback plan to adjust preprocessor output if needed

### Risk 3: Increased Bundle Size
**Risk:** v3.11.2 distribution may be larger than v3.9.9, increasing extension size.

**Mitigation:**
- Compare bundle sizes before and after upgrade
- If significant increase, consider tree-shaking or removing unused assets
- Monitor VSIX package size during build

### Risk 4: Theme and Styling Conflicts
**Risk:** New Vditor version may have CSS changes that break custom themes or styling.

**Mitigation:**
- Test all three editor themes (Auto, Light, Solarized)
- Verify syntax highlighting styles apply correctly
- Check custom toolbar and context menu styling

### Trade-off: Manual Asset Management vs. NPM Dependency
**Trade-off:** Managing bundled assets manually requires more effort but allows custom modifications.

**Justification:** The current approach is necessary because:
- Custom wrapper code and configuration are tightly integrated
- QMD support requires specific Vditor configuration
- Image paste handling needs custom upload logic
- Using the local development repository provides better control

## Migration Plan

### Phase 1: Preparation (Low Risk)
1. Backup current `resource/vditor/` directory
2. Build v3.11.2 distribution in target repository if not already built
3. Document current customizations in `index.js`, `util.js`, and `index.html`

### Phase 2: Asset Replacement (Medium Risk)
1. Copy v3.11.2 dist files to `resource/vditor/`, preserving:
   - `index.html` (custom HTML wrapper)
   - `index.js` (custom initialization)
   - `index.css` (custom styling)
   - `util.js` (custom utilities)
2. Update `vditor.js` and `vditor.css` from new dist
3. Update `lute.min.js` if new version available
4. Copy new icon sets and assets if changed

### Phase 3: Code Updates (Medium Risk)
1. Review `resource/vditor/index.js` for API changes:
   - Verify all Vditor constructor options
   - Check toolbar configuration format
   - Validate preview options
2. Update CDN URL if different in v3.11.2
3. Test Mermaid integration configuration
4. Verify upload handler signature

### Phase 4: Testing (High Risk)
1. Build extension: `yarn build`
2. Test in development: `yarn dev`
3. Manual testing checklist:
   - [ ] Standard Markdown (.md) editing and preview
   - [ ] Quarto Markdown (.qmd) with callouts
   - [ ] Code cells with options (#|echo: false, etc.)
   - [ ] Image paste functionality
   - [ ] PDF export (with/without outline)
   - [ ] HTML/Docx export
   - [ ] Theme switching (Auto/Light/Solarized)
   - [ ] Syntax highlighting styles
   - [ ] Multi-language support
   - [ ] Toolbar buttons and shortcuts
   - [ ] Context menu functionality
   - [ ] Mathematical expressions (KaTeX)
   - [ ] Mermaid diagrams

### Phase 5: Rollback Plan
If critical issues found:
1. Restore backed-up `resource/vditor/` directory
2. Rebuild extension
3. Document issues for future investigation
4. Create GitHub issue tracking problems

### Deployment Strategy
- Deploy as patch version bump (3.5.6 → 3.5.7)
- Include upgrade notes in CHANGELOG.md
- Monitor GitHub issues for user-reported problems
- Have quick rollback plan ready

## Open Questions

1. **Should we update the Mermaid version?**
   - Current: Mermaid v11.12.2 (recently upgraded)
   - Question: Does Vditor v3.11.2 recommend a specific Mermaid version?
   - Resolution needed: Check Vditor v3.11.2 documentation for Mermaid compatibility

2. **Are there new features in v3.11.2 we should enable?**
   - Question: Does v3.11.2 introduce new editor features or configuration options?
   - Resolution needed: Review v3.11.2 changelog and release notes

3. **Should we rebuild from source or use pre-built dist?**
   - Current plan: Use pre-built dist from target repository
   - Question: Are there build-time options we should customize?
   - Resolution needed: Review webpack.config.js in target repository

4. **Performance impact assessment needed**
   - Question: How does v3.11.2 performance compare to v3.9.9?
   - Resolution needed: Benchmark large markdown file rendering before/after
