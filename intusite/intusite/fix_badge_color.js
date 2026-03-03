const fs = require('fs');
const filepath = 'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\redundancy\\page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

content = content.replace(
    'bg-blue-500/10 border border-blue-400/20 text-blue-300',
    'bg-orange-500/10 border border-orange-400/30 text-orange-300'
);

// We should also replace the bottom blue backdrop color effect in the hero section to an orange hue.
content = content.replace(
    'from-blue-900/90 to-slate-900/90',
    'from-[#1a1005]/95 to-[#0A192F]/95' // Make it match MCCS dark blue/orange contrast better, or keep it dark blue since MCCS still uses deep blues.
);
content = content.replace(
    'bg-[#1a237e]',
    'bg-[#0A192F]'
);
content = content.replace(
    'text-blue-100/80',
    'text-orange-100/80'
);
fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed MCCS styling');
