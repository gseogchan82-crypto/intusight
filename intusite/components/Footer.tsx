import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="py-20 bg-black border-t border-white/10 text-slate-500 text-sm print:hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 max-w-7xl mx-auto">
                    <div className="md:col-span-1">
                        <div className="mb-6 relative w-40 h-12">
                            <Image
                                src="/logo-footer.png"
                                alt="INTUSIGHT"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="leading-relaxed">
                            미래를 지키는 보안,<br />
                            인투사이트(주)가 함께합니다.
                        </p>
                    </div>

                    <div className="print:hidden">
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="/company/greeting" className="hover:text-blue-400 transition-colors">인사말</a></li>
                            <li><a href="/company/overview" className="hover:text-blue-400 transition-colors">회사소개</a></li>
                            <li><a href="/company/location" className="hover:text-blue-400 transition-colors">오시는 길</a></li>
                        </ul>
                    </div>
                    <div className="print:hidden">
                        <h4 className="text-white font-semibold mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            <li><a href="/solutions/network" className="hover:text-blue-400 transition-colors">네트워크 보안</a></li>
                            <li><a href="/solutions/system" className="hover:text-blue-400 transition-colors">시스템 보안</a></li>
                            <li><a href="/solutions/api" className="hover:text-blue-400 transition-colors">API 보안</a></li>
                            <li><a href="/solutions/ai" className="hover:text-blue-400 transition-colors">AI 보안</a></li>
                            <li><a href="/solutions/redundancy" className="hover:text-blue-400 transition-colors">데이터 보호</a></li>
                        </ul>
                    </div>
                    <div className="print:hidden">
                        <h4 className="text-white font-semibold mb-6">Service</h4>
                        <ul className="space-y-4">
                            <li><a href="/service#maintenance" className="hover:text-blue-400 transition-colors">보안 솔루션 구축/운영</a></li>
                            <li><a href="/service#consulting" className="hover:text-blue-400 transition-colors">보안 컨설팅</a></li>
                            <li><a href="/service#ai-integration" className="hover:text-blue-400 transition-colors">AI 솔루션 도입</a></li>
                            <li><a href="/service#tech-support" className="hover:text-blue-400 transition-colors">가상화 인프라 운영</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>서울특별시 금천구 디지털로 178</li>
                            <li>B동 12층 1208호 (현대퍼블릭)</li>
                            <li>Tel: 02-2138-2344</li>
                            <li>Email: sales@intusight.net</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2026 INTUSIGHT. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                        <a href="#" className="hover:text-white transition-colors">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
