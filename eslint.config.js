import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  // Global ignores
  {
    ignores: [
      '**/*.d.ts',
      'dist',
      'out',
      'node_modules',
      'build',
      '.eslintrc.*',
      'build.ts',
      'lib.js',
      'public/**',
      'resource/**',
      'template/**',
      'images/**',
      'theme/**',
      'syntaxes/**',
      'snippets/**',
      '*.config.js',
      'vite.config.ts',
      'src/bundle/**'
    ]
  },

  // JavaScript/JSX/TypeScript/TSX files (combined config)
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        Thenable: 'readonly',
      },
    },
    settings: {
      react: { version: '18.3' },
      'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // Base ESLint rules
      ...js.configs.recommended.rules,
      'no-redeclare': 'off',
      'no-useless-escape': 'off',
      'no-empty': 'off',

      // React rules
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      'react-hooks/refs': 'off', // TODO: Fix ref usage in render
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript rules
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',

      // Import rules
      'import/order': 'warn',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
    },
  },

  // Override for TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
    },
  },
];
