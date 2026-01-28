## ADDED Requirements

### Requirement: Custom toolbar icons availability
The system SHALL provide custom toolbar icons for VS Code integration features in the markdown editor.

#### Scenario: Icons exist in resource directory
- **WHEN** the extension is loaded
- **THEN** the system SHALL have all custom toolbar icons in `resource/vditor/icon/`
- **AND** the icons SHALL include `vscode.svg`, `codicon-files.svg`, `pdf.svg`, and `theme.svg`
- **AND** each icon file SHALL be a valid SVG file

#### Scenario: Icons are loadable by webview
- **WHEN** the markdown editor webview loads
- **THEN** the system SHALL serve the custom icon files
- **AND** the webview SHALL be able to load icons via relative paths
- **AND** no 404 errors SHALL occur for icon requests

### Requirement: Edit in VSCode button icon
The system SHALL display the vscode.svg icon for the "Edit in VSCode" toolbar button.

#### Scenario: Toolbar button displays icon
- **WHEN** the user views the markdown editor toolbar
- **THEN** the "Edit in VSCode" button SHALL display the vscode.svg icon
- **AND** the icon SHALL be visually distinct and recognizable
- **AND** the icon SHALL render correctly at the toolbar's icon size

#### Scenario: Icon loads without errors
- **WHEN** the toolbar initializes
- **THEN** the vscode.svg file SHALL load successfully
- **AND** no console errors SHALL occur related to vscode.svg
- **AND** the icon SHALL be cached by the browser for performance

### Requirement: Quick Open button icon
The system SHALL display the codicon-files.svg icon for the "Quick Open" toolbar button.

#### Scenario: Toolbar button displays icon
- **WHEN** the user views the markdown editor toolbar
- **THEN** the "Quick Open" button SHALL display the codicon-files.svg icon
- **AND** the icon SHALL match VS Code's file icon style
- **AND** the icon SHALL be visually clear at small sizes

#### Scenario: Icon loads without errors
- **WHEN** the toolbar initializes
- **THEN** the codicon-files.svg file SHALL load successfully
- **AND** the icon SHALL maintain proper aspect ratio
- **AND** no rendering artifacts SHALL appear

### Requirement: Export PDF button icon
The system SHALL display the pdf.svg icon for the "Export PDF" toolbar button.

#### Scenario: Toolbar button displays icon
- **WHEN** the user views the markdown editor toolbar
- **THEN** the "Export PDF" button SHALL display the pdf.svg icon
- **AND** the icon SHALL be clearly identifiable as a PDF-related action
- **AND** the icon SHALL be consistent with common PDF icon conventions

#### Scenario: Icon loads without errors
- **WHEN** the toolbar initializes
- **THEN** the pdf.svg file SHALL load successfully
- **AND** the icon SHALL render with correct colors
- **AND** the icon SHALL be visible on both light and dark backgrounds

### Requirement: Theme Switcher button icon
The system SHALL display the theme.svg icon for the "Theme Switcher" toolbar button.

#### Scenario: Toolbar button displays icon
- **WHEN** the user views the markdown editor toolbar
- **THEN** the "Theme Switcher" button SHALL display the theme.svg icon
- **AND** the icon SHALL represent theme or appearance settings
- **AND** the icon SHALL be visually distinct from other toolbar icons

#### Scenario: Icon loads without errors
- **WHEN** the toolbar initializes
- **THEN** the theme.svg file SHALL load successfully
- **AND** the icon SHALL be scalable without quality loss
- **AND** no visual glitches SHALL occur during theme transitions

### Requirement: Icon preservation during upgrades
The system SHALL preserve custom toolbar icons when Vditor distribution files are updated.

#### Scenario: Icons are documented
- **WHEN** developers review the icon directory
- **THEN** a README.md file SHALL exist in `resource/vditor/icon/`
- **AND** the README SHALL list all custom icons that must be preserved
- **AND** the README SHALL explain the purpose of each custom icon

#### Scenario: Icons survive Vditor upgrade
- **WHEN** a developer upgrades Vditor to a new version
- **THEN** the custom toolbar icons SHALL remain in the icon directory
- **AND** the README SHALL serve as a reminder to preserve these files
- **AND** toolbar functionality SHALL remain intact after upgrade

### Requirement: Icon file integrity
The system SHALL ensure custom toolbar icon files are valid and not corrupted.

#### Scenario: SVG files are well-formed
- **WHEN** the icon files are loaded
- **THEN** each SVG file SHALL be valid XML
- **AND** each SVG SHALL have proper namespace declarations
- **AND** each SVG SHALL be renderable by standard browsers

#### Scenario: Icons display correctly
- **WHEN** the toolbar is displayed
- **THEN** all custom icons SHALL render without distortion
- **AND** all icons SHALL maintain their intended colors
- **AND** all icons SHALL be properly aligned within toolbar buttons
