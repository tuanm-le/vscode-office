## Context

**Current State:**
During the Vditor v3.11.2 upgrade (change: `replace-vditor-codebase`), the `resource/vditor/icon/` directory was replaced with the standard Vditor v3.11.2 distribution. The standard distribution only includes:
- `emoji/` directory
- `img-loading.svg`
- `logo.png`

However, the custom toolbar configuration in `resource/vditor/util.js` references four additional icons that were present in v3.9.9:
- `vscode.svg` - "Edit in VSCode" toolbar button
- `codicon-files.svg` - "Quick Open" toolbar button
- `pdf.svg` - "Export PDF" toolbar button
- `theme.svg` - "Theme Switcher" toolbar button

These icons exist in the backup at `resource/vditor.backup.3.9.9/icon/`.

**Problem:**
The toolbar buttons are configured to load these icons via `loadRes()` function in util.js (lines 77, 86, 95, 112), but the icon files are missing from the current `resource/vditor/icon/` directory, causing the toolbar buttons to display without icons.

**Constraints:**
- Must preserve Vditor v3.11.2 core functionality
- Cannot break the existing toolbar configuration
- Icons must be in the correct path for the webview to load them
- Need to prevent this issue in future Vditor upgrades

## Goals / Non-Goals

**Goals:**
- Restore missing custom toolbar icons from v3.9.9 backup
- Verify all toolbar buttons display correctly with icons
- Document the custom icons to prevent future removal
- Ensure build process includes these icons

**Non-Goals:**
- Modifying the toolbar configuration code
- Changing the visual design of toolbar buttons
- Adding new toolbar buttons or icons
- Modifying Vditor core functionality

## Decisions

### 1. Icon Restoration Strategy

**Decision:** Copy the four missing toolbar icons from `resource/vditor.backup.3.9.9/icon/` to `resource/vditor/icon/`.

**Rationale:**
- Backup contains the exact icons that were working in v3.9.9
- No code changes required - paths already correct
- Minimal risk - restoring known working assets
- Fastest path to resolution

**Alternatives Considered:**
- **Redesign icons**: Rejected - unnecessary work, breaks visual consistency
- **Remove custom toolbar buttons**: Rejected - degrades user experience
- **Use different icon paths**: Rejected - requires code changes, higher risk

### 2. Icon Management Approach

**Decision:** Create a `README.md` in `resource/vditor/icon/` documenting custom icons that must be preserved during Vditor upgrades.

**Rationale:**
- Prevents accidental removal in future upgrades
- Documents the purpose of each custom icon
- No automated enforcement needed (documentation sufficient for this scale)

**Implementation:**
```markdown
# Custom Toolbar Icons

This directory contains custom toolbar icons for VS Code integration.

## Custom Icons (preserve during Vditor upgrades)

- `vscode.svg` - Edit in VSCode button
- `codicon-files.svg` - Quick Open button
- `pdf.svg` - Export PDF button
- `theme.svg` - Theme Switcher button

## Standard Vditor Icons (from Vditor distribution)

- `emoji/` - Emoji picker icons
- `img-loading.svg` - Loading indicator
- `logo.png` - Vditor logo
```

### 3. Build Integration

**Decision:** No changes to build process required - the esbuild copy plugin already handles the entire `resource/` directory.

**Rationale:**
- Build configuration in `build.ts` copies template directory which includes vditor resources
- Package.json includes all files by default (no "files" field filtering)
- Icons will be automatically included in extension package
- Verified during Vditor upgrade that build process works correctly

### 4. Verification Approach

**Decision:** Test toolbar icon display by loading a markdown file in development mode and visually inspecting all custom toolbar buttons.

**Rationale:**
- Manual verification is sufficient for this UI fix
- Icons are either present or missing - binary outcome
- No automated testing infrastructure currently exists for webview UI
- Quick manual check provides immediate confidence

## Risks / Trade-offs

### Risk 1: Icon File Corruption or Format Issues
**Risk:** Backup icon files might be corrupted or incompatible with v3.11.2.

**Mitigation:**
- Icons are standard SVG files - format is stable
- Visual inspection will quickly reveal any rendering issues
- Original v3.9.9 was working, so backup should be valid

### Risk 2: Path Resolution Issues
**Risk:** Webview might not resolve icon paths correctly after restoration.

**Mitigation:**
- Paths haven't changed - same locations as v3.9.9
- `loadRes()` function in util.js already handles path resolution
- Can verify by testing toolbar in development mode

### Risk 3: Future Vditor Upgrades
**Risk:** Future Vditor upgrades might again overwrite these custom icons.

**Mitigation:**
- README.md documentation will serve as reminder
- Can add checklist item to upgrade process
- Icons are now tracked in git (unlike vendor distribution)

### Trade-off: Documentation vs. Automation
**Trade-off:** Using README documentation instead of automated icon preservation.

**Justification:**
- Scale is small (4 icons, low frequency of upgrades)
- Automated solution would be over-engineering
- Documentation is sufficient and maintainable
- Can add automation later if upgrades become frequent

## Migration Plan

### Phase 1: Icon Restoration (Immediate)
1. Copy `vscode.svg` from backup to `resource/vditor/icon/`
2. Copy `codicon-files.svg` from backup to `resource/vditor/icon/`
3. Copy `pdf.svg` from backup to `resource/vditor/icon/`
4. Copy `theme.svg` from backup to `resource/vditor/icon/`
5. Verify all files exist in target directory

### Phase 2: Documentation (Immediate)
1. Create `resource/vditor/icon/README.md`
2. Document custom icons and their purposes
3. Add note about preserving during upgrades

### Phase 3: Verification (Immediate)
1. Start development server: `yarn dev`
2. Open a test markdown file
3. Visually inspect toolbar buttons
4. Verify all four custom buttons display icons correctly
5. Test button functionality (click and verify actions work)

### Phase 4: Commit (After Verification)
1. Stage icon files and README
2. Commit with message: `fix: restore custom toolbar icons after Vditor upgrade`
3. Monitor for any user-reported issues

### Rollback Strategy
If icons don't display correctly:
1. Verify icon files exist in `resource/vditor/icon/`
2. Check webview console for 404 errors loading icons
3. Verify `loadRes()` function paths are correct
4. If needed, use alternative inline SVG icons in toolbar config

## Open Questions

None - this is a straightforward file restoration with clear requirements.

## Success Criteria

- [ ] All four custom icon files present in `resource/vditor/icon/`
- [ ] README.md created documenting custom icons
- [ ] Toolbar buttons display icons correctly in development mode
- [ ] All toolbar button functionality works (Edit in VSCode, Quick Open, Export PDF, Theme)
- [ ] No console errors related to icon loading
- [ ] Icons included in built extension package
