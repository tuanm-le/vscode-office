## ADDED Requirements

### Requirement: Enhanced Quarto Markdown rendering
The system SHALL leverage Vditor v3.11.2 improvements to render Quarto Markdown (.qmd) files with better support for callouts, custom divs, and code cells.

#### Scenario: Callout block rendering
- **WHEN** a .qmd file contains callout blocks using `:::callout-note`, `:::callout-warning`, etc.
- **THEN** the system SHALL render these blocks with appropriate styling and icons
- **AND** callout content SHALL be properly formatted with syntax highlighting
- **AND** callout blocks SHALL be collapsible if configured

#### Scenario: Custom div container rendering
- **WHEN** a .qmd file contains custom div containers
- **THEN** the system SHALL apply the correct CSS classes and styling
- **AND** nested divs SHALL be rendered with proper hierarchy

#### Scenario: Code cell options rendering
- **WHEN** a .qmd file contains code cells with options like `#|echo: false`, `#|output: false`
- **THEN** the system SHALL respect these options during preview rendering
- **AND** code cells SHALL be hidden or shown based on the options
- **AND** code cell output SHALL be formatted correctly

### Requirement: QMD preprocessor compatibility
The system SHALL ensure the existing QMD preprocessor (`src/service/qmdPreprocessor.ts`) works correctly with Vditor v3.11.2.

#### Scenario: QMD syntax transformation
- **WHEN** the preprocessor transforms QMD-specific syntax before rendering
- **THEN** the transformed content SHALL render correctly in Vditor v3.11.2
- **AND** all QMD features SHALL display as expected
- **AND** no syntax errors SHALL occur during transformation

#### Scenario: QMD file editing
- **WHEN** a user edits a .qmd file in the editor
- **THEN** the preview SHALL update correctly with QMD features rendered
- **AND** the WYSIWYG mode SHALL handle QMD syntax properly
- **AND** live preview SHALL work seamlessly

### Requirement: Mermaid diagram integration
The system SHALL maintain Mermaid v11.12.2 integration for rendering diagrams in QMD files with Vditor v3.11.2.

#### Scenario: Mermaid diagram rendering in QMD
- **WHEN** a .qmd file contains Mermaid diagram code blocks
- **THEN** the system SHALL render these diagrams correctly
- **AND** Mermaid v11.12.2 SHALL be loaded before Vditor initialization
- **AND** diagram rendering SHALL use the configured Mermaid theme

#### Scenario: Mermaid error handling
- **WHEN** a Mermaid diagram contains syntax errors
- **THEN** the system SHALL display user-friendly error messages
- **AND** the editor SHALL remain functional despite diagram errors
- **AND** error messages SHALL be logged to the console for debugging

### Requirement: Mathematical expressions support
The system SHALL render mathematical expressions in QMD files using KaTeX with Vditor v3.11.2.

#### Scenario: Inline math rendering
- **WHEN** a .qmd file contains inline math expressions using `$` delimiters
- **THEN** the system SHALL render these expressions with proper formatting
- **AND** math SHALL be visually distinct from regular text

#### Scenario: Block math rendering
- **WHEN** a .qmd file contains block math expressions using `$$` delimiters
- **THEN** the system SHALL render these expressions centered on their own line
- **AND** complex mathematical notation SHALL display correctly

### Requirement: Code cell execution options
The system SHALL support QMD code cell execution options in preview mode with Vditor v3.11.2.

#### Scenario: Code cell visibility control
- **WHEN** a code cell has `#|echo: false` option
- **THEN** the preview SHALL NOT display the code source
- **AND** only the output SHALL be shown (if present)

#### Scenario: Code cell output control
- **WHEN** a code cell has `#|output: false` option
- **THEN** the preview SHALL NOT display the cell output
- **AND** the code source SHALL still be visible

#### Scenario: Code cell evaluation control
- **WHEN** a code cell has `#|eval: false` option
- **THEN** the preview SHALL NOT execute the code cell
- **AND** neither code nor output SHALL be displayed

### Requirement: QMD file type handling
The system SHALL correctly identify and handle .qmd files alongside other markdown variants.

#### Scenario: QMD file detection
- **WHEN** a user opens a file with .qmd extension
- **THEN** the system SHALL detect it as a QMD file
- **AND** the QMD preprocessor SHALL be applied
- **AND** the editor SHALL be initialized with QMD-specific configuration

#### Scenario: Multi-format markdown support
- **WHEN** the extension handles .md, .markdown, .qmd, and .typ files
- **THEN** each file type SHALL be processed appropriately
- **AND** .qmd files SHALL receive QMD-specific preprocessing
- **AND** standard markdown files SHALL be processed normally
