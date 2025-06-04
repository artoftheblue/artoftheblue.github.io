const plugin = {
  name: 'Dash to Em/En Dash Transformer',
  transforms: [
    {
      name: 'dash-transformer',
      doc: "Transforms '---' to '—' (em dash) and '--' to '–' (en dash), excluding lines consisting only of dashes.",
      stage: 'document',
      plugin: (_, utils) => (node) => {
        utils.selectAll('text', node).forEach(
          (textNode) => {
            textNode.value = textNode.value.replace(/(?<!-)(-{2,3})(?!-)/g, (m) => m === '---' ? '—' : '–');
          }
        );
      },
    },
  ],
};

export default plugin;
