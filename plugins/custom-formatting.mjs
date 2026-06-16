function text(value) {
  return { type: 'text', value };
}

function span(value, className) {
  const children = typeof value === 'string' ? [text(value)] : value;
  return { type: 'span', class: className, children };
}

const styles = [
  { name: 'remove', className: 'text-[--artemis-red] dark:text-[--darktemis-red] line-through' },
  { name: 'add', className: 'text-[--artemis-green] dark:text-[--darktemis-green] font-bold' },
  { name: 'omit', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] line-through' },
  { name: 'clarify', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] font-bold' },
  { name: 'unclear', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] font-bold' },
  { name: 'high', className: 'text-[--artemis-purple] dark:text-[--darktemis-purple] font-bold' },
  { name: 'highlight', className: 'text-[--artemis-purple] dark:text-[--darktemis-purple] font-bold' },
  { name: 'weird', className: 'text-[--artemis-orange] dark:text-[--darktemis-orange] line-through' },
  { name: 'bluerect', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] border rounded-md border-[--artemis-blue] bg-[--artemis-bg-blue] dark:border-[--darktemis-blue] dark:bg-[--darktemis-bg-blue]' },
  { name: 'yellowrect', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] bg-[--artemis-bg-yellow] dark:border-[--darktemis-yellow] dark:bg-[--darktemis-bg-yellow]' },
  { name: 'adv-modifier', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] dark:border-[--darktemis-yellow] bg-[--artemis-bg-yellow] dark:bg-[--darktemis-bg-yellow]' },
  { name: 'other', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] dark:border-[--darktemis-yellow] bg-[--artemis-bg-yellow] dark:bg-[--darktemis-bg-yellow]' },
  { name: 'subject', className: 'text-[--artemis-green] dark:text-[--darktemis-green] border rounded-md border-[--artemis-green] dark:border-[--darktemis-green] bg-[--artemis-bg-green] dark:bg-[--darktemis-bg-green]' },
  { name: 'subj', className: 'text-[--artemis-green] dark:text-[--darktemis-green] border rounded-md border-[--artemis-green] dark:border-[--darktemis-green] bg-[--artemis-bg-green] dark:bg-[--darktemis-bg-green]' },
  { name: 'verb', className: 'text-[--artemis-red] dark:text-[--darktemis-red] border rounded-md border-[--artemis-red] dark:border-[--darktemis-red] bg-[--artemis-bg-red] dark:bg-[--darktemis-bg-red]' },
  { name: 'object', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] border rounded-md border-[--artemis-blue] dark:border-[--darktemis-blue] bg-[--artemis-bg-blue] dark:bg-[--darktemis-bg-blue]' },
  { name: 'obj', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] border rounded-md border-[--artemis-blue] dark:border-[--darktemis-blue] bg-[--artemis-bg-blue] dark:bg-[--darktemis-bg-blue]' },
  { name: 'bluehighlight', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] font-bold bg-[--artemis-bg-blue] dark:bg-[--darktemis-bg-blue]' },
  { name: 'redhighlight', className: 'text-[--artemis-red] dark:text-[--darktemis-red] font-bold bg-[--artemis-bg-red] dark:bg-[--darktemis-bg-red]' }
];

const directives = [];

for (const style of styles) {
  const directive = {
    name: style.name,
    body: { type: String },
    run(data) {
      const text = data.body;
      return [span(text, style.className)];
    },
  };
  directives.push(directive);
}

const changeDirective = {
  name: 'change',
  body: { type: String },
  run(data) {
    const parts = (data.body || '').split('|');
    const removedText = parts[0] ? parts[0].trim() : '';
    const addedText = parts[1] ? parts[1].trim() : '';
    const addClass = styles.find(s => s.name === 'add').className;
    const removeClass = styles.find(s => s.name === 'remove').className;
    const addedNode = span(addedText, `${addClass} artemis-added-word`);
    const removedNode = span(removedText, `${removeClass} artemis-removed-word`);
    return [span([addedNode, removedNode], 'artemis-swap-container')];
  }
};
directives.push(changeDirective);
directives.push({
  ...changeDirective,
  name: 'replace'
});

const collocDirective = {
  name: 'colloc',
  body: { type: String },
  run(data) {
    const parts = (data.body || '').split('|');
    const removedText = parts[0] ? parts[0].trim() : '';
    const addedText = parts[1] ? parts[1].trim() : '';
    const orangeHighlightClass = 'text-[--artemis-orange] dark:text-[--darktemis-orange] font-bold bg-[--artemis-bg-orange] dark:bg-[--darktemis-bg-orange]';
    const removeClass = styles.find(s => s.name === 'weird').className;
    const addedNode = span(addedText, `${orangeHighlightClass} artemis-added-word`);
    const removedNode = span(removedText, `${removeClass} artemis-removed-word`);
    return [span([addedNode, removedNode], 'artemis-swap-container')];
  }
};
directives.push(collocDirective);

const rewriteDirective = {
  name: 'rewrite',
  body: { type: String },
  run(data) {
    const parts = (data.body || '').split('|');
    const removedText = parts[0] ? parts[0].trim() : '';
    const addedText = parts[1] ? parts[1].trim() : '';
    const addClass = styles.find(s => s.name === 'clarify').className;
    const removeClass = styles.find(s => s.name === 'omit').className;
    const addedNode = span(addedText, `${addClass} artemis-added-word`);
    const removedNode = span(removedText, `${removeClass} artemis-removed-word`);
    return [span([addedNode, removedNode], 'artemis-swap-container')];
  }
};
directives.push(rewriteDirective);

const plugin = { name: 'English Auto Format Directives', roles: directives };

export default plugin;