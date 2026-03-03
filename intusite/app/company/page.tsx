'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from 'lucide-react';

export default function Company() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* 3D Abstract Hero Section - Light Theme */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] print:hidden"></div>
                <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] print:h-auto print:py-8 print:bg-transparent bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

                <div className="relative z-10 text-center px-6">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                        Who We Are
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                        회사<span className="text-blue-600">소개</span>
                    </h1>
                    <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed keep-all">
                        인투사이트(주)는 혁신적인 기술로 보안의 새로운 패러다임을 제시하며,<br className="hidden md:block" />
                        고객과 함께 안전한 디지털 미래를 만들어갑니다.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20 pb-32">
                <div className="max-w-6xl mx-auto space-y-24">

                    {/* CEO Message - Glassmorphism Card */}
                    <div id="ceo" className="scroll-mt-32 bg-white rounded-[3rem] p-12 md:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 transition-shadow duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] print:h-auto print:py-8 print:bg-transparent bg-blue-50/50 rounded-full blur-3xl -mr-20 -mt-20"></div>

                        <div className="flex flex-col md:flex-row items-start gap-12 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Driven by Into & Sight</h2>
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-10 tracking-tight">Partnerships built on expertise.</h3>
                                <div className="w-20 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 mb-12 rounded-full"></div>
                                <p className="text-slate-600 leading-loose text-lg md:text-xl keep-all font-medium tracking-wide space-y-4">
                                    인투사이트(주)는 <span className="text-blue-600 font-bold">"직관과 통찰력"</span>으로 다가오는 시대를 개척합니다.<br /><br />
                                    가상화 · 소프트웨어 기반의 환경에서 핵심적인<br />
                                    <span className="text-slate-900 font-bold">차세대보안 · 클라우드 · 자동화된 인공지능(AI)</span> 사업에 집중합니다.<br /><br />
                                    통신과 서비스를 포함하는 융합기업으로<br />
                                    고객 만족을 최우선시하는 기업입니다.<br /><br />
                                    앞으로도 고객과 함께하는 모든 여정에서 더 높은 성과와<br />
                                    새로운 가능성을 함께 만들어 나가겠습니다.<br /><br />
                                    신뢰와 성과를 바탕으로 지속적인 성장을 견인하겠습니다.
                                </p>
                                <div className="mt-20 border-t border-slate-100 pt-10 flex flex-col items-end">
                                    <span className="text-slate-900 font-extrabold text-3xl tracking-tight">대표 김경우</span>
                                </div>

                                {/* Company Overview Table */}
                                <div id="overview" className="scroll-mt-32 bg-slate-50/50 p-10 md:p-14 rounded-[2.5rem] mt-16 border border-slate-100">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-10 border-l-[6px] border-blue-600 pl-6 py-1">Company Overview</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-16 text-lg">
                                        <div className="flex flex-col border-b border-slate-200 pb-4 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">회사명</span>
                                            <span className="text-slate-800 font-bold text-xl">인투사이트 (Intusight)</span>
                                        </div>
                                        <div className="flex flex-col border-b border-slate-200 pb-4 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">대표자</span>
                                            <span className="text-slate-800 font-bold text-xl">김경우</span>
                                        </div>
                                        <div className="flex flex-col border-b border-slate-200 pb-4 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">설립일</span>
                                            <span className="text-slate-800 font-bold text-xl">2018년 3월 20일</span>
                                        </div>
                                        <div className="flex flex-col border-b border-slate-200 pb-4 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">대표번호</span>
                                            <span className="text-slate-800 font-bold text-xl">02-2138-2344</span>
                                        </div>
                                        <div className="flex flex-col border-b border-slate-200 pb-4 md:col-span-2 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">본사</span>
                                            <span className="text-slate-700 font-medium text-lg">서울특별시 금천구 디지털로 178, B동 12층 1208호 (현대퍼블릭, 가산동)</span>
                                        </div>
                                        <div className="flex flex-col border-b border-slate-200 pb-4 md:col-span-2 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">사업분야</span>
                                            <span className="text-slate-700 font-medium text-lg">서버, 네트워크, 보안 솔루션, 가상화 솔루션</span>
                                        </div>
                                        <div className="flex flex-col border-b border-slate-200 pb-4 md:col-span-2 group hover:border-blue-300 transition-colors">
                                            <span className="font-bold text-slate-400 text-sm mb-1 group-hover:text-blue-500 transition-colors">핵심 역량</span>
                                            <span className="text-slate-700 font-medium text-lg">기술지원, 맞춤형 솔루션 제공, 개별 보안시스템의 최적화 연동</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision - 3D Floating Cards */}
                    <div>
                        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16 tracking-tight">Vision</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { title: '보안 컨설팅', sub: '완벽한 보안 & 안전한 비즈니스', desc: '체계적인 보안 진단과 맞춤형 솔루션으로\n고객의 자산을 보호합니다.', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
                                { title: '취약점 판단', sub: '정밀 분석 & 선제적 방어', desc: '시스템 취약점을 사전에 발견하고\n최적의 해결책을 제시합니다.', color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100' },
                                { title: '인프라 구축', sub: '차세대 인프라 설계 및 구축', desc: '미래 지향적 IT 환경 구축을 통해\n안전하고 효율적인 IT 운영을 실현합니다.', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
                                    <div>
                                        <div className={`text-4xl font-bold mb-6 ${item.color}`}>
                                            {item.title}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight whitespace-nowrap">{item.sub}</h3>
                                    </div>
                                    <p className="text-slate-500 text-base leading-relaxed whitespace-pre-line">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
