const fs = require('fs');
const filepath = 'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\network\\page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Hide Sidebar on print
content = content.replace(
    '<div className="w-full md:w-1/4 flex-shrink-0">',
    '<div className="w-full md:w-1/4 flex-shrink-0 print:hidden">'
);

// Make main content take full width on print
content = content.replace(
    '<div className="w-full md:w-3/4">',
    '<div className="w-full md:w-3/4 print:w-full">'
);

// Switch main list from space-y-16 to a print grid
content = content.replace(
    '<div className="space-y-16">',
    '<div className="space-y-16 print:space-y-0 print:grid print:grid-cols-1 print:gap-8">'
);

// Reduce padding inside the solution cards for print, and ensure no page breaks inside them
content = content.replace(
    /className="group relative bg-white border border-slate-200 rounded-\[2\.5rem\] p-10 md:p-12/g,
    'className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 print:p-6 print:shadow-none print:break-inside-avoid'
);

// Reduce top padding of the main section for print
content = content.replace(
    '<section className="py-20 bg-white relative">',
    '<section className="py-20 print:py-8 bg-white relative">'
);

// Hide the "자세히 보기" link on print
content = content.replace(
    /className="inline-flex items-center mt-4 text-sm font-bold text-blue-[^"]+"/g,
    match => match + ' print:hidden'
);

fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed network page print layout');
