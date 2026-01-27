# Dependabot Configuration Guidelines

## Overview

This repository uses [Dependabot](https://docs.github.com/en/code-security/dependabot) to automatically track and update dependencies. Dependabot creates pull requests for dependency updates based on the configuration in `.github/dependabot.yml`.

## Schedule

- **Frequency**: Weekly (Mondays at 09:00 UTC)
- **Limit**: Maximum 10 open PRs at a time
- **Auto-merge**: Patch and minor updates are auto-merged if tests pass

## Reviewing Dependabot PRs

### Priority Levels

#### 🔴 High Priority (Review Immediately)
- Security updates (any version)
- Major version updates for critical packages (axios, puppeteer-core, etc.)

#### 🟡 Medium Priority (Review Within 1 Week)
- Minor version updates
- Major version updates for non-critical packages

#### 🟢 Low Priority (Review When Convenient)
- Patch version updates (often auto-merged)
- Development dependencies

### Review Checklist

Before merging a Dependabot PR:

1. **Check for Breaking Changes**
   - Read the package's changelog/release notes
   - Look for "BREAKING" or "MAJOR" sections
   - Check if any API changes affect our code

2. **Test Critical Functionality**
   - Build succeeds: `yarn build`
   - Development server works: `yarn dev`
   - Core features work:
     - File viewing (Excel, Word, PDF, etc.)
     - Markdown editing
     - PDF export
     - Image viewing

3. **Check for Known Issues**
   - Search the package's GitHub issues for recent problems
   - Check if the version has been marked as deprecated

4. **Verify Compatibility**
   - Ensure the update doesn't conflict with other dependencies
   - Check if peer dependencies are satisfied

### Major Version Updates

Major version updates require careful review:

#### Manual Testing Required For:
- **antd** - UI component library (test all UI components)
- **react** / **react-dom** - Core framework (test entire app)
- **vite** - Build tool (test build process)
- **puppeteer-core** - PDF generation (test PDF export)
- **eslint** - Linting (may require config changes)

#### Example: antd v6 → v7
1. Read [Ant Design migration guide](https://ant.design/changelog)
2. Look for breaking changes
3. Test all UI components:
   - Excel viewer
   - Word viewer
   - Image gallery
   - Modals/dialogs
   - Forms
4. Check for CSS class name changes
5. Verify theme customization still works

## Ignored Dependencies

These dependencies are configured to ignore major version updates in `.github/dependabot.yml`:

- **react** & **react-dom** - Major versions often have breaking changes
- **antd** - UI framework, requires extensive testing
- **vite** - Build tool, major versions have breaking changes
- **esbuild** - Build tool, breaking changes in major versions
- **puppeteer-core** - PDF generation, API changes
- **eslint** - Linting, major rewrites
- **@typescript-eslint/*** - TypeScript linting, major updates

To update these, you'll need to:
1. Create a manual PR
2. Follow the major version update process
3. Test thoroughly

## Dependency Groups

Dependabot groups related dependencies together:

### Ant Design Dependencies
- antd
- @ant-design/* (except icons)

### React Dependencies
- react
- react-dom
- @types/react*

### Build Tools
- vite
- esbuild*
- @vitejs/*

### TypeScript/ESLint
- typescript*
- @typescript-eslint/*
- eslint*
- eslint-plugin-*

### Markdown Plugins
- markdown-it*

## Security Updates

Dependabot automatically creates PRs for security vulnerabilities. These should:

1. **Take Priority** - Review and merge immediately
2. **Test Thoroughly** - Even security updates can break things
3. **Check CVE Severity** - Not all vulnerabilities are equally critical

## Override Default Behavior

If you need to update a dependency that Dependabot is ignoring:

1. Manually update `package.json`
2. Run `yarn install`
3. Test thoroughly
4. Create a PR with `deps` prefix

## Disable Auto-Merge

To disable auto-merge for a specific PR:

1. Comment on the PR: `@dependabot ignore this major version`
2. Or edit the PR labels and remove `auto-merge`

## Useful Commands

```bash
# Check for outdated dependencies manually
npm outdated
yarn outdated

# Update a specific package
yarn add package-name@latest

# Update all packages (interactive)
yarn upgrade-interactive --latest

# Run security audit
npm audit
yarn audit

# Fix security vulnerabilities (careful!)
yarn audit fix
```

## Monitoring

Watch for:
- 💬 Comments from Dependabot on PRs
- 🔔 Security alerts in repository settings
- 📊 Dependabot alerts in repository insights

## Configuration Files

- **`.github/dependabot.yml`** - Main configuration
- **`.github/workflows/dependabot-auto-merge.yml`** - Auto-merge workflow
- **`package.json`** - Dependency versions

## Additional Resources

- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [Dependabot Configuration Options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [Dependabot Security Updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates)
