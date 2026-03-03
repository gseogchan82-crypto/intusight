'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Handshake, Shield, Server, Cpu, User, Globe, Zap, Rocket, Telescope } from 'lucide-react';

export default function Overview() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-800/30">
            <Header />

            {/* Hero Section - Trust & Professional */}
            <section className="relative h-[550px] flex items-center justify-center overflow-hidden bg-slate-900">
                {/* Background: Deep Blue / Abstract Tech */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay print:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-blue-950/80 to-slate-900/90 print:hidden"></div>

                <div className="relative z-10 container mx-auto px-6 text-center mt-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight flex flex-col gap-2 drop-shadow-xl break-keep">
                        <span className="text-white print:text-black drop-shadow-md">고객의 비즈니스 성공을 위한</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 print:text-black print:drop-shadow-none drop-shadow-md">
                            가장 정직한 통찰
                        </span>
                    </h1>
                    <div className="w-16 h-[2px] bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-blue-50/90 print:text-black text-lg md:text-xl font-medium tracking-wide max-w-3xl mx-auto leading-relaxed break-keep drop-shadow-sm">
                        인투사이트(주)는 다년간의 경험과 기술력을 바탕으로<br className="hidden md:block" />
                        고객의 곁에서 함께 고민하고 성장하는 <span className="font-bold text-white">든든한 비즈니스 파트너</span>가 되겠습니다.
                    </p>
                </div>
            </section>

            {/* Intro Message Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="text-lg md:text-xl leading-loose font-light break-keep">
                        <strong className="text-blue-800 font-bold block text-2xl md:text-3xl mb-8">"신뢰는 기술에서 시작됩니다."</strong>

                        <p className="text-slate-900 font-medium mb-8 text-xl md:text-2xl">
                            급변하는 IT 환경 속에서, 인투사이트(주)는<br className="md:hidden" /> 고객에게 꼭 필요한 기술이 무엇인지 끊임없이 고민합니다.
                        </p>

                        <p className="text-slate-600 leading-relaxed text-base md:text-lg break-keep">
                            단순히 솔루션을 공급하는 것을 넘어, 고객의 환경에 최적화된 <span className="font-bold text-slate-900">고성능·저비용 인프라</span>를 설계하고 제안합니다.<br />
                            우리의 경험과 노하우가 고객의 신뢰로 이어질 수 있도록, 가장 정직하고 투명한 파트너십을 약속드립니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values (4 Keys) Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">핵심가치</h2>
                        <p className="text-slate-500 mt-4">인투사이트(주)를 움직이는 4가지 핵심 원동력</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* 1. Passion */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                                <Zap className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Passion (열정)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed break-keep">
                                현실에 안주하지 않고 끊임없이 배우며, 맡은 일에 주인의식을 가지고 끝까지 완수합니다.
                            </p>
                        </div>

                        {/* 2. Honesty */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                                <Handshake className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Honesty (정직)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed break-keep">
                                눈앞의 이익보다 고객과의 신뢰를 소중히 여기며, 언제나 투명하고 바르게 행동합니다.
                            </p>
                        </div>

                        {/* 3. Challenge */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                                <Rocket className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Challenge (도전)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed break-keep">
                                실패를 두려워하지 않는 과감한 도전정신으로, 한계를 뛰어넘어 새로운 가치를 창출합니다.
                            </p>
                        </div>

                        {/* 4. Insight */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                                <Telescope className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Insight (통찰)</h3>
                            <p className="text-slate-500 text-sm leading-relaxed break-keep">
                                현상을 넘어 본질을 꿰뚫어보는 통찰력으로, 고객에게 가장 적합한 최적의 해답을 제시합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Info - Clean & Professional List */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-end gap-4">
                        <h2 className="text-3xl font-bold text-slate-900">Company Profile</h2>
                        <div className="hidden md:block h-[1px] flex-grow bg-slate-200 mb-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            { label: "회사명", value: "인투사이트(주) (Intusight)", icon: <Shield className="w-5 h-5" /> },
                            { label: "대표이사", value: "김경우", icon: <User className="w-5 h-5" /> },
                            { label: "설립일", value: "2018년 3월 20일", icon: <Lightbulb className="w-5 h-5" /> },
                            { label: "연락처", value: "02-2138-2344", icon: <Server className="w-5 h-5" /> },
                            { label: "주소", value: "서울특별시 금천구 디지털로 178, B동 12층 1208호", sub: "(현대퍼블릭, 가산동)", icon: <Globe className="w-5 h-5" />, colSpan: true },
                            { label: "주요 사업", value: "서버, 네트워크, 보안 솔루션, 가상화 솔루션", icon: <Cpu className="w-5 h-5" />, colSpan: true },
                        ].map((item, idx) => (
                            <div key={idx} className={`${item.colSpan ? 'md:col-span-2' : ''} flex items-start gap-5 p-5 border-b border-slate-100 last:border-0`}>
                                <div className="text-slate-400 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-blue-600 mb-1 opacity-80">{item.label}</span>
                                    <span className="block text-lg font-bold text-slate-800">{item.value}</span>
                                    {item.sub && <span className="block text-sm text-slate-500 mt-1 font-light">{item.sub}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
