## 1. Icon Restoration

- [x] 1.1 Copy `vscode.svg` from `resource/vditor.backup.3.9.9/icon/` to `resource/vditor/icon/`
- [x] 1.2 Copy `codicon-files.svg` from `resource/vditor.backup.3.9.9/icon/` to `resource/vditor/icon/`
- [x] 1.3 Copy `pdf.svg` from `resource/vditor.backup.3.9.9/icon/` to `resource/vditor/icon/`
- [x] 1.4 Copy `theme.svg` from `resource/vditor.backup.3.9.9/icon/` to `resource/vditor/icon/`
- [x] 1.5 Verify all four icon files exist in `resource/vditor/icon/`
- [x] 1.6 Verify each icon file is a valid SVG (check file size > 0)

## 2. Documentation

- [x] 2.1 Create `resource/vditor/icon/README.md`
- [x] 2.2 Document custom icons and their purposes in README
- [x] 2.3 Add preservation note for future Vditor upgrades
- [x] 2.4 Verify README is clear and comprehensive

## 3. Build Verification

- [x] 3.1 Run `yarn build` to ensure extension builds successfully
- [x] 3.2 Verify icon files are included in build output
- [x] 3.3 Check that no build errors or warnings occur
- [x] 3.4 Confirm extension package includes icon directory

## 4. Development Testing

- [ ] 4.1 Start development server with `yarn dev`
- [ ] 4.2 Open VS Code with the extension loaded
- [ ] 4.3 Open a test markdown file (.md or .qmd)
- [ ] 4.4 Inspect markdown editor toolbar for icon display

## 5. Toolbar Icon Verification

- [ ] 5.1 Verify "Edit in VSCode" button displays vscode.svg icon
- [ ] 5.2 Verify "Quick Open" button displays codicon-files.svg icon
- [ ] 5.3 Verify "Export PDF" button displays pdf.svg icon
- [ ] 5.4 Verify "Theme Switcher" button displays theme.svg icon
- [ ] 5.5 Check browser console for no 404 errors on icon loads
- [ ] 5.6 Verify icons render correctly at toolbar size

## 6. Button Functionality Testing

- [ ] 6.1 Click "Edit in VSCode" button and verify it opens file in VS Code
- [ ] 6.2 Click "Quick Open" button and verify it opens Quick Open panel
- [ ] 6.3 Click "Export PDF" button and verify export dialog appears
- [ ] 6.4 Click "Theme Switcher" button and verify theme picker appears
- [ ] 6.5 Verify all buttons work correctly after clicking

## 7. Visual Quality Checks

- [ ] 7.1 Verify icons are properly aligned in toolbar buttons
- [ ] 7.2 Check icons display correctly on light background
- [ ] 7.3 Check icons display correctly on dark background
- [ ] 7.4 Verify no visual distortion or scaling issues
- [ ] 7.5 Confirm icons are visually distinct from each other

## 8. Regression Testing

- [ ] 8.1 Test markdown editor with various file types (.md, .qmd, .typ)
- [ ] 8.2 Verify standard Vditor toolbar buttons still work
- [ ] 8.3 Check that emoji picker icon still displays
- [ ] 8.4 Verify no other toolbar functionality is broken
- [ ] 8.5 Test toolbar in both WYSIWYG and editing modes

## 9. Cross-platform Verification

- [ ] 9.1 Verify icons load correctly on macOS
- [ ] 9.2 Verify icons load correctly on Windows (if possible)
- [ ] 9.3 Verify icons load correctly on Linux (if possible)
- [ ] 9.4 Check that icon paths work regardless of OS path separators

## 10. Code Quality

- [ ] 10.1 Ensure no changes to toolbar configuration code were needed
- [ ] 10.2 Verify icon paths in util.js match restored file locations
- [ ] 10.3 Check that loadRes() function can access all icon files
- [ ] 10.4 Confirm no hardcoded paths that could break

## 11. Documentation Updates

- [ ] 11.1 Update VDIFFER_UPGRADE_NOTES.md if it exists
- [ ] 11.2 Add note to upgrade checklist about preserving custom icons
- [ ] 11.3 Document icon restoration in CHANGELOG.md
- [ ] 11.4 Update any relevant contributor documentation

## 12. Final Verification

- [ ] 12.1 Perform full visual inspection of toolbar
- [ ] 12.2 Test all toolbar buttons in sequence
- [ ] 12.3 Verify no console errors or warnings
- [ ] 12.4 Confirm extension loads without issues
- [ ] 12.5 Test extension packaging with `yarn package` (optional)

## 13. Cleanup and Commit

- [ ] 13.1 Remove any temporary test files created
- [ ] 13.2 Stage icon files and README for commit
- [ ] 13.3 Write clear commit message describing icon restoration
- [ ] 13.4 Create pull request if using version control workflow
- [ ] 13.5 Monitor for any user-reported issues after deployment
