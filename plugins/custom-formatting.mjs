function text(value) {
  return { type: 'text', value };
}

function span(value, className, attributes = {}) {
  const children = typeof value === 'string' ? [text(value)] : value;
  return { type: 'span', class: className, ...attributes, children };
}

const baseStyles = {
  remove: 'text-[--artemis-red] dark:text-[--darktemis-red] line-through',
  add: 'text-[--artemis-green] dark:text-[--darktemis-green] font-bold',
  omit: 'text-[--artemis-blue] dark:text-[--darktemis-blue] line-through',
  clarify: 'text-[--artemis-blue] dark:text-[--darktemis-blue] font-bold',
  unclear: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] font-bold',
  high: 'text-[--artemis-purple] dark:text-[--darktemis-purple] font-bold',
  weird: 'text-[--artemis-orange] dark:text-[--darktemis-orange] line-through',
  colloc: 'text-[--artemis-orange] dark:text-[--darktemis-orange] font-bold',
  bluerect: 'text-[--artemis-blue] dark:text-[--darktemis-blue] border rounded-md border-[--artemis-blue] bg-[--artemis-bg-blue] dark:border-[--darktemis-blue] dark:bg-[--darktemis-bg-blue]',
  yellowrect: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] bg-[--artemis-bg-yellow] dark:border-[--darktemis-yellow] dark:bg-[--darktemis-bg-yellow]',
  'adv-modifier': 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] dark:border-[--darktemis-yellow] bg-[--artemis-bg-yellow] dark:bg-[--darktemis-bg-yellow] cursor-help',
  other: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] dark:border-[--darktemis-yellow] bg-[--artemis-bg-yellow] dark:bg-[--darktemis-bg-yellow]',
  subject: 'text-[--artemis-green] dark:text-[--darktemis-green] border rounded-md border-[--artemis-green] dark:border-[--darktemis-green] bg-[--artemis-bg-green] dark:bg-[--darktemis-bg-green] cursor-help',
  verb: 'text-[--artemis-red] dark:text-[--darktemis-red] border rounded-md border-[--artemis-red] dark:border-[--darktemis-red] bg-[--artemis-bg-red] dark:bg-[--darktemis-bg-red] cursor-help',
  object: 'text-[--artemis-blue] dark:text-[--darktemis-blue] border rounded-md border-[--artemis-blue] dark:border-[--darktemis-blue] bg-[--artemis-bg-blue] dark:bg-[--darktemis-bg-blue] cursor-help',
  bluehighlight: 'text-[--artemis-blue] dark:text-[--darktemis-blue] font-bold bg-[--artemis-bg-blue] dark:bg-[--darktemis-bg-blue]',
  redhighlight: 'text-[--artemis-red] dark:text-[--darktemis-red] font-bold bg-[--artemis-bg-red] dark:bg-[--darktemis-bg-red]'
};


const styles = {
  ...baseStyles,
  highlight: baseStyles.high,
  subj: baseStyles.subject,
  obj: baseStyles.object
};

const directives = [];
const tooltipAllowed = new Set(['subj', 'subject', 'verb', 'obj', 'object', 'adv-modifier']);

for (const [name, className] of Object.entries(styles)) {
  directives.push({
    name: name,
    body: { type: String },
    run(data) {
      const rawText = data.body || '';

      if (tooltipAllowed.has(name) && rawText.includes('|')) {
        const [displayText, tooltipText] = rawText.split('|').map(s => s.trim());
        return [span(displayText, className, { title: tooltipText })];
      }

      return [span(rawText, className)];
    },
  });
}

function createSwapDirective(name, removeKey, addKey) {
  return {
    name,
    body: { type: String },
    run(data) {
      const parts = (data.body || '').split('|');
      const removedText = parts[0] ? parts[0].trim() : '';
      const addedText = parts[1] ? parts[1].trim() : '';
      
      const removeClass = styles[removeKey];
      const addClass = styles[addKey];
      
      const addedNode = span(addedText, `${addClass} artemis-added-word`);
      const removedNode = span(removedText, `${removeClass} artemis-removed-word`);
      
      return [span([addedNode, removedNode], 'artemis-swap-container')];
    }
  };
}

directives.push(createSwapDirective('change', 'remove', 'add'));
directives.push(createSwapDirective('replace', 'remove', 'add'));
directives.push(createSwapDirective('rewrite', 'omit', 'clarify'));
directives.push(createSwapDirective('colloc', 'weird', 'colloc'));

const plugin = { name: 'English Auto Format Directives', roles: directives };

export default plugin;