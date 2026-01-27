# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension for viewing and editing various office file formats including Excel, Word, PDF, Markdown, images, fonts, archives, and more. Uses a custom editor provider architecture with React-based webview UIs.

## Development Commands

**Use yarn as the package manager** (not npm).

- `yarn dev` - Start development server (Vite on port 5739)
- `yarn build` - Build extension for production (runs both esbuild and vite)
- `yarn lint:fix` - Fix ESLint issues automatically
- `yarn package` - Create VSIX package
- `yarn publish` - Publish to VS Code marketplace
- `yarn vscode:prepublish` - Build before publishing (same as build)

## Architecture

### Dual Build System

The project uses two separate build systems:

1. **Esbuild** (`build.ts`) - Builds the main extension code (`src/extension.ts`) into `out/extension.js`
   - External dependencies like `vscode`, `puppeteer-core`, `pdf-lib`, etc. are not bundled
   - External dependencies are bundled separately into `out/node_modules/`
   - Copies static assets from `template/` and `node-unrar-js` WASM file to `out/`

2. **Vite** (`vite.config.ts`) - Builds React webview components
   - Outputs to `out/webview/`
   - Development server runs on `127.0.0.1:5739`

The vite config triggers the esbuild build when `--mode` is in argv (line 4-6).

### Provider Architecture

The extension uses VS Code's custom editor API. Each file type has a dedicated provider in `src/provider/`:

- `officeViewerProvider.ts` - Main viewer for Excel, Word, PDF, fonts, archives, SVG
- `markdownEditorProvider.ts` - Vditor-based markdown editor (supports .md, .markdown, .qmd, .typ)
- `imageViewerProvider.ts` - Enhanced image preview
- `htmlViewerProvider.ts` - Live HTML preview
- `javaDecompilerProvider.ts` - Java .class file decompilation

Each provider creates a webview panel that loads React components from `src/react/`.

### Service Layer

Business logic lives in `src/service/`:

- `markdown/` - Markdown processing services including QMD (Quarto Markdown) support
- `htmlService.ts` - HTML preview functionality
- `qmdPreprocessor.ts` - Preprocessor for Quarto Markdown syntax (callouts, custom divs, code cells)

### File Handlers

Specific file operations are handled by classes in `src/provider/handlers/` and `src/provider/compress/` for archive formats.

### Key Entry Points

- `src/extension.ts` - Extension activation, provider registration, command registration
- `src/provider/` - Custom editor providers
- `src/react/` - React components for webview UIs
- `resource/vditor/` - Bundled Vditor markdown editor
- `resource/pdf/` - PDF.js resources
- `resource/java-decompiler.jar` - Java decompiler

## QMD (Quarto Markdown) Support

The extension includes enhanced support for Quarto Markdown files (.qmd). See `QMD_IMPLEMENTATION_SUMMARY.md` for details on:
- Callout blocks (`:::callout-note`, etc.)
- Custom div containers
- Code cell options (`#|`, `#|echo: false`, etc.)
- Integration with Vditor editor

## Conventions

- **Commit messages**: Always use Git Conventional Commits format (https://www.conventionalcommits.org/)
  - Format: `<type>(<scope>): <description>`
  - Types: feat, fix, docs, style, refactor, perf, test, chore, revert, build, ci
  - Examples:
    - `feat: add support for QMD files`
    - `fix(markdown): resolve mermaid rendering issue`
    - `chore: upgrade dependencies to latest versions`
  - Keep descriptions under 70 characters (including type/scope)
  - Use English for all commit messages
  - Add body lines for additional context when needed
- **Package manager**: Use yarn, not npm
- **Code style**: ESLint configured with TypeScript, React, and import rules

## Development Workflow

- **Update changelog**: After completing any work iteration (feature, bug fix, refactor), update `CHANGELOG.md` with the changes made
  - Format: Follow Keep a Changelog format (https://keepachangelog.com/)
  - Categorize changes under: Added, Changed, Deprecated, Removed, Fixed, Security
  - Group changes by version number
  - Include [Unreleased] section for changes not yet released

## Configuration

Extension settings are defined in `package.json` under `contributes.configuration`. Key settings include:
- `vscode-office.editorTheme` - Markdown editor theme (Auto/Light/Solarized)
- `vscode-office.editorLanguage` - UI language (en_US, zh_CN, ja_JP, etc.)
- `vscode-office.chromiumPath` - Custom Chrome/Chromium path for PDF export
- `vscode-office.pasterImgPath` - Image paste path pattern for markdown

## Custom Shortcuts

The extension overrides some default VS Code shortcuts:
- `Ctrl/Cmd+Alt+E` - Switch between Vditor and default markdown editor
- `Ctrl/Cmd+Shift+V` - Preview HTML (when in HTML file)
- `Ctrl/Cmd+V` - Enhanced paste in markdown (for images)
- `Ctrl/Cmd+Enter` - Send HTTP request (in .http files)
