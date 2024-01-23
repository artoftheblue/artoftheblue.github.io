function text(value) {
  return { type: 'text', value };
}

function span(value, style) {
  const children = typeof value === 'string' ? [text(value)] : value;
  return { type: 'span', children, style };
}

const styles = [
  { name: 'remove', style: { color: '#FDEBEC', textDecoration: 'line-through' } },
  { name: 'add', style: { color: '#EDF3EC', fontWeight: 'bold' } },
  { name: 'omit', style: { color: '#E7F3F8', textDecoration: 'line-through'} },
  { name: 'clarify', style: { color: '#E7F3F8', fontWeight: 'bold'} },
  { name: 'ambiguous', style: { color: '#FBF3DB', fontWeight: 'bold'} },
  { name: 'highlight', style: { color: '#F6F3F9', fontWeight: 'bold'} }
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
