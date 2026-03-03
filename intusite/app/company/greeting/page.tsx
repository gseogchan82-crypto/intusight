'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Greeting() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Key Visual Banner - Bellock Style */}
            {/* Modified: Increased height from 400px to 600px for more top spacing/breathing room */}
            <section className="relative h-[600px] print:h-auto print:py-8 print:bg-transparent flex items-center justify-center overflow-hidden bg-[#1a237e]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526bca48b2?q=80&w=2691&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay print:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 print:hidden"></div>

                {/* Digital/Network Particles Effect (CSS only for lightweight) */}
                <div className="absolute inset-0 opacity-30 print:hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center h-full pt-16">
                    <h2 className="text-white print:text-black/80 font-bold tracking-widest uppercase mb-4 text-sm">Company Introduction</h2>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight flex flex-col gap-2">
                        <span className="text-white drop-shadow-sm print:text-black print:drop-shadow-none">Where Intuition</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 print:text-black print:drop-shadow-none">
                            Meets Insight
                        </span>
                    </h1>
                    <p className="text-blue-100/80 print:text-black text-lg md:text-xl max-w-2xl font-light leading-relaxed break-keep">
                        남다른 직관으로 니즈를 파악하고, 깊이 있는 통찰로 최적의 해답을 설계합니다.<br className="hidden md:block" />
                        검증된 기술력과 파트너십으로 고객의 성공을 돕는 인투사이트(주)입니다.
                    </p>
                </div>
            </section>

            {/* Main Content - Clean White Layout */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Left Column: Title */}
                        <div className="w-full md:w-1/4 flex-shrink-0 print:hidden">
                            <h2 className="text-3xl font-bold text-slate-900 sticky top-32">
                                인사말
                                <div className="h-1 w-12 bg-blue-600 mt-4"></div>
                            </h2>
                        </div>

                        {/* Right Column: Content */}
                        <div className="w-full md:w-3/4 print:w-full">
                            <div className="space-y-10">
                                {/* Quote Section */}
                                <div className="bg-slate-50 border-l-4 border-blue-600 p-8 rounded-r-xl">
                                    <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed break-keep">
                                        "직관과 통찰력을 통해<br />
                                        <span className="text-blue-600">신시장을 개척</span>하고<br />
                                        <span className="text-blue-600">새로운 가치</span>를 창출하고 공유하자"
                                    </p>
                                </div>

                                {/* Body Text */}
                                <div className="text-slate-800 text-lg leading-loose space-y-8 break-keep">
                                    <p>
                                        안녕하십니까? 당사는 창립 이래 쉼 없는 혁신과 도전으로 고객의 비즈니스 성공을 돕기 위해 정진해 왔습니다. 급변하는 환경 속에서도 변화를 두려워하지 않는 창조적 사고를 통해, 고객에게 기대 이상의 가치를 전달하고자 모든 임직원이 마음을 모으고 있습니다.
                                    </p>
                                    <p>
                                        최상의 서비스와 결과는 결국 '사람'과 '믿음'에서 시작됩니다. 당사는 구성원 간의 활발한 소통을 바탕으로 서로 신뢰하는 기업문화를 구축하고 있으며, 이를 동력 삼아 더 높은 비전을 향해 나아갑니다. 아울러 투명하고 책임 있는 경영을 통해 기업의 사회적 책임을 다하며, 건강한 산업 생태계를 만드는 데 앞장서겠습니다.
                                    </p>
                                    <p>
                                        글로벌 리더로 도약하는 당사의 여정에 함께해주시는 고객 여러분께 깊은 감사를 드립니다. 앞으로도 지속 가능한 성과와 새로운 가능성을 함께 만들어 나갈 것을 약속드립니다.
                                    </p>
                                </div>

                                {/* CEO Name - Simple Text */}
                                <div className="pt-12 border-t border-slate-100 flex justify-end">
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-slate-900 mb-1">인투사이트(주) 대표이사</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
