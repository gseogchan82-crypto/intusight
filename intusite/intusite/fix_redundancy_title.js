const fs = require('fs');
const filepath = 'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\redundancy\\page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

content = content.replace('Data Security', 'Data Protection');
content = content.replace('데이터</span>\n                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">\n                            보안', '데이터</span>\n                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">\n                            보호');
content = content.replace('데이터\r\n                        </span>\r\n                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">\r\n                            보안', '데이터</span>\r\n                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">\r\n                            보호');

// More generic replacement for the heading
content = content.replace(
    /<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">\s*보안\s*<\/span>/m,
    '<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">\n                            보호\n                        </span>'
);

content = content.replace('고가용성 인프라 및 부하 분산 시스템', '고가용성 기반 데이터 보호 및 복구 시스템');

fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed redundancy title text.');
