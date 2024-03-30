function text(value) {
  return { type: 'text', value };
}

function span(value, style) {
  const children = typeof value === 'string' ? [text(value)] : value;
  return { type: 'span', children, style };
}

const styles = [
  { name: 'remove', style: { color: '#D44C47', textDecoration: 'line-through' } },
  { name: 'add', style: { color: '#448361', fontWeight: 'bold' } },
  { name: 'omit', style: { color: '#337EA9', textDecoration: 'line-through'} },
  { name: 'clarify', style: { color: '#337EA9', fontWeight: 'bold'} },
  { name: 'unclear', style: { color: '#CB912F', fontWeight: 'bold'} },
  { name: 'high', style: { color: '#9065B0', fontWeight: 'bold'} },
  { name: 'weird', style: {color: '#D9730D', textDecoration: 'line-through'} },
  { name: 'rectangle', style: { border: '1px solid black', padding: '5px', backgroundColor: '#F0F0F0' } },
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
