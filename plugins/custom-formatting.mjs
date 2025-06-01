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
  { name: 'bluerect', style: { color: '#58C4DD', border: '1px solid black', padding: '1px', backgroundColor: '#3B6989'} },
  { name: 'yellowrect', style: { color: '#83C167', border: '1px solid black', padding: '1px', backgroundColor: '#4B6961'}},
  { name: 'darkrect', style: { color: 'white', border: '1px solid black', padding: '1px', backgroundColor: '#425371'}},
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
