## ADDED Requirements

### Requirement: PDF export functionality
The system SHALL provide PDF export functionality for markdown files using Vditor v3.11.2's improved export APIs.

#### Scenario: PDF export with outline
- **WHEN** a user selects "Export PDF" from the context menu
- **THEN** the system SHALL generate a PDF file with table of contents
- **AND** the PDF SHALL preserve document formatting and structure
- **AND** headers SHALL be properly linked in the PDF outline

#### Scenario: PDF export without outline
- **WHEN** a user selects "Export PDF (Without Outline)" from the context menu
- **THEN** the system SHALL generate a PDF file without table of contents
- **AND** the PDF SHALL preserve document formatting and structure
- **AND** the PDF generation SHALL be faster than with outline

#### Scenario: PDF export with QMD content
- **WHEN** a user exports a .qmd file to PDF
- **THEN** the system SHALL render QMD features (callouts, code cells, diagrams) correctly
- **AND** callout boxes SHALL be visually distinct in the PDF
- **AND** Mermaid diagrams SHALL be rendered as images in the PDF

### Requirement: HTML export functionality
The system SHALL provide HTML export functionality using Vditor v3.11.2's enhanced export capabilities.

#### Scenario: HTML export with styling
- **WHEN** a user selects "Export HTML" from the context menu
- **THEN** the system SHALL generate a standalone HTML file
- **AND** the HTML SHALL include embedded CSS for styling
- **AND** the HTML SHALL render correctly in modern browsers

#### Scenario: HTML export with QMD content
- **WHEN** a user exports a .qmd file to HTML
- **THEN** the HTML SHALL include properly styled QMD elements
- **AND** callouts SHALL be rendered with appropriate CSS classes
- **AND** code blocks SHALL maintain syntax highlighting

### Requirement: Docx export functionality
The system SHALL provide Microsoft Word (.docx) export functionality using Vditor v3.11.2's export APIs.

#### Scenario: Docx export with formatting
- **WHEN** a user selects "Export Docx" from the context menu
- **THEN** the system SHALL generate a .docx file with preserved formatting
- **AND** headers SHALL be converted to Word heading styles
- **AND** code blocks SHALL be formatted appropriately in Word

#### Scenario: Docx export with images
- **WHEN** a markdown file contains embedded images
- **THEN** the exported .docx SHALL include these images
- **AND** images SHALL be properly sized and positioned
- **AND** image captions SHALL be preserved if present

### Requirement: Export quality improvements
The system SHALL leverage Vditor v3.11.2's improved export rendering for better output quality.

#### Scenario: PDF rendering quality
- **WHEN** exporting complex markdown with tables, code blocks, and mathematical expressions
- **THEN** the PDF SHALL maintain high rendering quality
- **AND** tables SHALL be properly formatted with borders
- **AND** mathematical expressions SHALL be rendered correctly

#### Scenario: Cross-reference preservation
- **WHEN** a markdown document contains internal links and cross-references
- **THEN** exported files SHALL preserve these links
- **AND** internal links in PDF SHALL be clickable
- **AND** cross-references SHALL resolve correctly

### Requirement: Export performance
The system SHALL provide efficient export operations using Vditor v3.11.2's performance improvements.

#### Scenario: Large document export
- **WHEN** a user exports a large markdown document (>100 pages)
- **THEN** the export SHALL complete within a reasonable time
- **AND** the system SHALL show progress indication during export
- **AND** memory usage SHALL remain within acceptable limits

#### Scenario: Batch export operations
- **WHEN** a user performs multiple export operations in sequence
- **THEN** each export SHALL complete successfully
- **AND** the system SHALL not slow down with repeated exports
- **AND** temporary files SHALL be cleaned up after exports

### Requirement: Custom Chromium path support
The system SHALL support custom Chromium/Chrome browser path for PDF export functionality.

#### Scenario: Custom browser configuration
- **WHEN** a user has configured `vscode-office.chromiumPath` setting
- **THEN** the system SHALL use the specified Chromium executable for PDF export
- **AND** PDF export SHALL work with the custom browser
- **AND** the system SHALL fallback to default browser if custom path is invalid

### Requirement: Export error handling
The system SHALL provide clear error messages and recovery options when export operations fail.

#### Scenario: Export failure notification
- **WHEN** an export operation fails due to invalid content or system error
- **THEN** the system SHALL display a user-friendly error message
- **AND** the error message SHALL suggest possible solutions
- **AND** the system SHALL log detailed error information for debugging

#### Scenario: Export retry mechanism
- **WHEN** an export operation fails
- **THEN** the user SHALL be able to retry the export
- **AND** the system SHALL recover from transient errors
- **AND** partial export files SHALL be cleaned up
