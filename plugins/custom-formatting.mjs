function text(value) {
  return { type: 'text', value };
}

 function span(value, className) {
// function span(value, style) {
  const children = typeof value === 'string' ? [text(value)] : value;
  // return { type: 'span', children, style };
  return { type: 'span', class: className, children};
}


const styles = [
  { name: 'remove', className: 'text-[--artemis-red] dark:text-[--darktemis-red] line-through' },
  { name: 'add', className: 'text-[--artemis-green] dark:text-[--darktemis-green] font-bold' },
  { name: 'omit', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] line-through'},
  { name: 'clarify', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] font-bold'},
  { name: 'unclear', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] font-bold'},
  { name: 'high', className: 'text-[--artemis-purple] dark:text-[--darktemis-purple] font-bold'},
  { name: 'weird', className: 'text-[--artemis-orange] dark:text-[--darktemis-orange] line-through'},
  { name: 'bluerect', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] border rounded-md border-[--artemis-blue] bg-[--artemis-bg-blue] dark:border-[--darktemis-blue] dark:bg-[--darktemis-bg-blue]'},
  { name: 'yellowrect', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] bg-[--artemis-bg-yellow] dark:border-[--darktemis-yellow] dark:bg-[--darktemis-bg-yellow]'},
  { name: 'object', className: 'text-[--artemis-yellow] dark:text-[--darktemis-yellow] border rounded-md border-[--artemis-yellow] dark:border-[--darktemis-yellow] bg-[--artemis-bg-yellow] dark:bg-[--darktemis-bg-yellow] '},
  { name: 'subject', className: 'text-[--artemis-green] dark:text-[--darktemis-green] border rounded-md border-[--artemis-green] dark:border-[--darktemis-green] bg-[--artemis-bg-green] dark:bg-[--darktemis-bg-green] '},
  { name: 'verb', className: 'text-[--artemis-red] dark:text-[--darktemis-red] border rounded-md border-[--artemis-red] dark:border-[--darktemis-red] bg-[--artemis-bg-red] dark:bg-[--darktemis-bg-red] '},
  { name: 'bluehighlight', className: 'text-[--artemis-blue] dark:text-[--darktemis-blue] font-bold bg-[--artemis-bg-blue] dark:bg-[--darktemis-bg-blue]'},
]

/*

const styles = [
  { name: 'remove', className: 'text-[#D44C47] line-through' },
  { name: 'add', className: 'text-[#448361] font-bold' },
  { name: 'omit', className: 'text-[#337EA9] line-through'},
  { name: 'clarify', className: 'text-[#337EA9] font-bold'},
  { name: 'unclear', className: 'text-[#CB912F] font-bold'},
  { name: 'high', className: 'text-[#9065B0] font-bold'},
  { name: 'weird', className: 'text-[#D9730D] line-through'},
  { name: 'bluerect', className: 'text-white border rounded-md px-2 border-[#447ACB] bg-[#1F282D]'},
  { name: 'yellowrect', className: 'text-white border rounded-md px-2 border-[#C19138] bg-[#372E20]'},
  { name: 'object', className: 'text-[#C29343] border rounded-md px-2 border-[#C29343] bg-[#FAF3DD]'},
  { name: 'subject', className: 'text-[#548164] border rounded-md px-2 border-[#548164] bg-[#EEF3ED]'},
  { name: 'verb', className: 'text-[#C4554D] border rounded-md px-2 border-[#C4554D] bg-[#FAECEC]'},
  { name: 'bluehighlight', className: 'text-[#487CA5] font-bold bg-[#E9F3F7] dark:text-[#447ACB] dark:bg-[#1F282D]'},
]

/*
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
  { name: 'bluehighlight', style: { color: '#487CA5', fontWeight: 'bold', backgroundColor: '#E9F3F7'}},
];*/

const directives = [];

for (const style of styles) {
  const directive = {
    name: style.name,
    body: { type: String },
    run(data) {
      const text = data.body;
      return [span(text, style.className)];
      //return [span(text, style.style)];
    },
  };
  directives.push(directive);
}

const plugin = { name: 'English Auto Format Directives', roles: directives };

export default plugin;
