const plugin = {
  name: 'Trans Former',
  transforms: [
    {
      name: 'trans-former',
      doc: "Transforms dashes to em/en dashes, << >> to quotation marks, and <-- --> to arrows.",
      stage: 'document',
      plugin: (_, utils) => (node) => {
        utils.selectAll('text', node).forEach(
          (textNode) => {
            textNode.value = textNode.value
              .replace(/<--/g, '←')
              .replace(/-->/g, '→')

              .replace(/<</g, '«')
              .replace(/>>/g, '»')

              .replace(/(?<!-)(-{2,3})(?!-)/g, (m) => m === '---' ? '—' : '–');
          }
        );
      },
    },
  ],
};

export default plugin;
