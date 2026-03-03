const fs = require('fs');
const path = require('path');

const solutionsDir = path.join(__dirname, 'app', 'solutions');

const replacementMap = {
    'network': [
        { name: '네트워크 보안', href: '/solutions/network', active: true },
        { name: '시스템 보안', href: '/solutions/system', active: false },
        { name: 'API 보안', href: '/solutions/api', active: false },
        { name: 'AI 보안', href: '/solutions/ai', active: false },
        { name: '데이터 보호', href: '/solutions/redundancy', active: false },
    ],
    'system': [
        { name: '네트워크 보안', href: '/solutions/network', active: false },
        { name: '시스템 보안', href: '/solutions/system', active: true },
        { name: 'API 보안', href: '/solutions/api', active: false },
        { name: 'AI 보안', href: '/solutions/ai', active: false },
        { name: '데이터 보호', href: '/solutions/redundancy', active: false },
    ],
    'api': [
        { name: '네트워크 보안', href: '/solutions/network', active: false },
        { name: '시스템 보안', href: '/solutions/system', active: false },
        { name: 'API 보안', href: '/solutions/api', active: true },
        { name: 'AI 보안', href: '/solutions/ai', active: false },
        { name: '데이터 보호', href: '/solutions/redundancy', active: false },
    ],
    'ai': [
        { name: '네트워크 보안', href: '/solutions/network', active: false },
        { name: '시스템 보안', href: '/solutions/system', active: false },
        { name: 'API 보안', href: '/solutions/api', active: false },
        { name: 'AI 보안', href: '/solutions/ai', active: true },
        { name: '데이터 보호', href: '/solutions/redundancy', active: false },
    ],
    'redundancy': [
        { name: '네트워크 보안', href: '/solutions/network', active: false },
        { name: '시스템 보안', href: '/solutions/system', active: false },
        { name: 'API 보안', href: '/solutions/api', active: false },
        { name: 'AI 보안', href: '/solutions/ai', active: false },
        { name: '데이터 보호', href: '/solutions/redundancy', active: true },
    ]
};

function processDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Determine category from path
            let category = '';
            for (const key of Object.keys(replacementMap)) {
                // match exact dir like `solutions/network` or `solutions/network/[id]` or `solutions\network`
                const normalizedPath = fullPath.replace(/\\/g, '/');
                if (normalizedPath.includes(`solutions/${key}/`) || normalizedPath.endsWith(`solutions/${key}/page.tsx`)) {
                    category = key;
                    break;
                }
            }

            if (category && content.includes('const menuItems = [')) {
                // regex matching across multiple lines (lazy) until closing ];
                const regex = /const menuItems = \[\s*\{[\s\S]*?\];/;

                const newMenuStr = `const menuItems = [\n        ` +
                    replacementMap[category].map(item =>
                        `{ name: '${item.name}', href: '${item.href}', active: ${item.active} }`
                    ).join(',\n        ') + `\n    ];`;

                content = content.replace(regex, newMenuStr);

                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated recursive ${fullPath}`);
            }
        }
    });
}

processDirectory(solutionsDir);
