/**
 * Custom markdown-it plugin for Mermaid v11+ compatibility
 *
 * This plugin wraps mermaid code blocks in <div class="mermaid"> tags.
 * Mermaid v10+ doesn't require parse validation - it handles rendering
 * automatically when startOnLoad: true is set.
 */

function mermaidChart(code) {
  return `<div class="mermaid">${code}</div>`;
}

function MermaidPlugin(md) {
  // Store the default fence renderer
  const defaultRender = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const code = token.content.trim();

    // Handle explicit ```mermaid blocks
    if (token.info === 'mermaid') {
      return mermaidChart(code);
    }

    // Handle legacy mermaid syntax (no language tag, but starts with mermaid keywords)
    const firstLine = code.split(/\n/)[0].trim();
    if (
      firstLine === 'gantt' ||
      firstLine === 'sequenceDiagram' ||
      firstLine === 'classDiagram' ||
      firstLine === 'stateDiagram' ||
      firstLine === 'erDiagram' ||
      firstLine === 'pie' ||
      firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)
    ) {
      return mermaidChart(code);
    }

    // Use default renderer for non-mermaid blocks
    return defaultRender(tokens, idx, options, env, slf);
  };
}

module.exports = MermaidPlugin;
