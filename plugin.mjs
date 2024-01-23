function text(value) {
  return { type: 'text', value };
}

function span(value, style) {
  const children = typeof value === 'string' ? [text(value)] : value;
  return { type: 'span', children, style };
}

const styles = [
  { name: 'remove', style: { color: 'red', textDecoration: 'line-through' } },
  { name: 'add', style: { color: 'green', fontWeight: 'bold' } },
  { name: 'omit', style: { color: 'blue', textDecoration: 'line-through'} },
  { name: 'clarify', style: { color: 'blue', fontWeight: 'bold'} },
  { name: 'ambiguous', style: { color: 'yellow', fontWeight: 'bold'} },
  { name: 'highlight', style: { color: 'purple', fontWeight: 'bold'} }
];

const directives = [];

for (const style of styles) {
  const directive = {
    name: style.name,
    body: { type: String },
    run(data) {
      const text = data.body;
      return [span(text, style.style)];
    },
  };
  directives.push(directive);
}

const plugin = { name: 'English Auto Format Directives', roles: directives };

export default plugin;
