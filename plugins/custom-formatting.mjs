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
  { name: 'weird', style: { color: '#D9730D', textDecoration: 'line-through'} },
  { name: 'bluerect', style: { color: 'white', border: '1px solid #447ACB', borderRadius: '8px', padding: '2px', backgroundColor: '#1F282D'} },
  { name: 'yellowrect', style: { color: 'white', border: '1px solid #C19138', borderRadius: '8px', padding: '2px', backgroundColor: '#372E20'}},
  { name: 'object', style: { color: '#C29343', border: '1px solid #C29343', borderRadius: '8px', padding: '2px', backgroundColor: '#FAF3DD'}},
  { name: 'subject', style: { color: '#548164', border: '1px solid #548164', borderRadius: '8px', padding: '2px', backgroundColor: '#EEF3ED'}},
  { name: 'verb', style: { color: '#C4554D', border: '1px solid #C4554D', borderRadius: '8px', padding: '2px', backgroundColor: '#FAECEC'}},
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
