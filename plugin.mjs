function text(value) {
  return { type: 'text', value };
}

function span(value, style) {
  const children = typeof value === 'string' ? [text(value)] : value;
  return { type: 'span', children, style };
}


const errorStyle = {
    color: 'red',
    fontWeight: 'bold',
};

const myDirective = {
  name: 'red',
  doc: 'A directive that is supposed to highlight an error in writing',
  body: { type: String },
  run(data) {
    const text = data.body;
    return [span(text, errorStyle)]
  },
};

const plugin = { name: 'Plugin Test', roles: [myDirective] };

export default plugin;
