const fs = require('fs');
const filepath = 'c:\\Users\\ksc35\\OneDrive\\Desktop\\webpage\\intusite\\app\\solutions\\redundancy\\page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// The user wants the MCCS color scheme. The MCCS page uses a lot of orange-500, orange-600.
// Let's replace the gradient classes
content = content.replace(
    'bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400',
    'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400'
);

// We should also replace the top tag to use orange instead of blue if they want it to match MCCS vibe, but they specifically said "상단 데이터 보호 노란색말고 MCCS 의 색감 그라데이션으로 넣어주세요", meaning "Change the top Data Protection yellow color to the MCCS color gradient"

fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed gradient color');
