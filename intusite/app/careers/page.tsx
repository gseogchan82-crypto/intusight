'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Handshake, Rocket, Globe, ArrowRight, CheckCircle2, FileText, Users, HandCoins, Lightbulb, ChevronRight, GraduationCap, HeartPulse, Landmark, Gift, ShieldCheck, Plane } from 'lucide-react';

export default function Careers() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section - Light Theme */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-white">

                <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] print:h-auto print:py-8 print:bg-transparent bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

                <div className="relative z-10 text-center px-6">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-[#2c358f] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                        Join Our Team
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                        인재<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c358f] to-blue-500 drop-shadow-sm ml-1">채용</span>
                    </h1>
                    <p className="text-slate-600 text-[1.15rem] md:text-[1.25rem] max-w-2xl mx-auto font-semibold leading-[1.8] keep-all">
                        인투사이트(주)와 함께 성장하며<br className="hidden md:block" />
                        더 안전한 내일을 만들어갈 열정적인 인재를 기다립니다.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20 pb-32">

                {/* Talent - Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            icon: Handshake,
                            title: "신뢰와 협력",
                            desc: "상호 존중을 바탕으로 동료와 협력하며\n함께 성장하는 인재",
                            color: "text-blue-600",
                            bg: "bg-blue-50"
                        },
                        {
                            icon: Rocket,
                            title: "도전과 열정",
                            desc: "실패를 두려워하지 않고\n새로운 목표를 향해 끊임없이 도전하는 인재",
                            color: "text-indigo-600",
                            bg: "bg-indigo-50"
                        },
                        {
                            icon: Globe,
                            title: "전문성과 책임감",
                            desc: "자신의 분야에서 최고가 되기 위해 노력하고\n맡은 바 책임을 다하는 인재",
                            color: "text-sky-600",
                            bg: "bg-sky-50"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500 group">
                            <div className={`w-20 h-20 ${item.bg} rounded-2xl flex items-center justify-center mb-8 border border-white shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed whitespace-pre-line">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>


                {/* Hiring Process */}
                <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden mb-24">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] print:h-auto print:py-8 print:bg-transparent bg-blue-50/50 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Process</span>
                            <h2 className="text-4xl font-bold text-slate-900">채용 절차</h2>
                        </div>

                        <div className="relative max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                                {[
                                    {
                                        icon: FileText,
                                        title: "서류검토",
                                        color: "text-slate-700",
                                        bgColor: "bg-white",
                                        borderColor: "border-slate-200"
                                    },
                                    {
                                        icon: Users,
                                        title: "인터뷰",
                                        color: "text-blue-600",
                                        bgColor: "bg-white",
                                        borderColor: "border-slate-200"
                                    },
                                    {
                                        icon: HandCoins,
                                        title: "연봉협상",
                                        color: "text-slate-700",
                                        bgColor: "bg-white",
                                        borderColor: "border-slate-200"
                                    },
                                    {
                                        icon: Lightbulb,
                                        title: "최종합격",
                                        color: "text-blue-600",
                                        bgColor: "bg-white",
                                        borderColor: "border-slate-200"
                                    }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative flex flex-col items-center group">
                                        {/* Connector Arrow (Desktop) */}
                                        {idx < 3 && (
                                            <div className="hidden md:flex absolute top-20 -right-1/2 w-full justify-center items-center z-0 pointer-events-none text-slate-300 print:text-black">
                                                <ChevronRight className="w-8 h-8" strokeWidth={1} />
                                            </div>
                                        )}

                                        {/* Connector Arrow (Mobile) */}
                                        {idx < 3 && (
                                            <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 z-0 pointer-events-none text-slate-300 print:text-black transform rotate-90">
                                                <ChevronRight className="w-8 h-8" strokeWidth={1} />
                                            </div>
                                        )}

                                        <div className={`w-40 h-40 rounded-full border ${step.borderColor} flex items-center justify-center mb-6 shadow-lg shadow-slate-100/50 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-blue-500/10 bg-white relative z-10`}>
                                            <step.icon className={`w-12 h-12 ${step.color}`} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 text-center whitespace-pre-line leading-snug">
                                            {step.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">복리후생</h2>
                        <span className="text-slate-400 font-medium tracking-widest uppercase text-sm mb-6 block">INTUSIGHT</span>
                        <p className="text-slate-600 text-[1.1rem] leading-relaxed break-keep">
                            인투사이트(주)는 법정 4대 보험과 일반적인 복리후생 제도 외에도<br className="hidden md:block" />
                            직원들이 건강하게 일과 삶의 균형(Work-Life Balance)을 이룰 수 있도록 다양한 방법으로 지원합니다.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: "교육비 지원",
                                items: ["[자녀] 초/중/고/대학교 입학 축하금", "[본인] 자기개발비 지원(도서 구입비 포함)"],
                                color: "text-blue-600",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: HeartPulse,
                                title: "건강검진 지원",
                                items: ["전 직원 건강검진 지원(배우자 포함)"],
                                color: "text-rose-500",
                                bg: "bg-rose-50"
                            },
                            {
                                icon: Landmark,
                                title: "퇴직급여",
                                items: ["1년 이상 근무자 퇴직연금 가입"],
                                color: "text-emerald-600",
                                bg: "bg-emerald-50"
                            },
                            {
                                icon: Gift,
                                title: "경조사 지원",
                                items: ["[축의금] 본인 결혼, 자녀 결혼, 자녀 돌", "[조의금] 친부모/빙부모 부고, 본인/배우자/자녀 부고"],
                                color: "text-amber-500",
                                bg: "bg-amber-50"
                            },
                            {
                                icon: ShieldCheck,
                                title: "보험가입",
                                items: ["전직원 4대 보험 가입", "전직원 상해보험 가입"],
                                color: "text-indigo-600",
                                bg: "bg-indigo-50"
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group rounded-3xl flex flex-col">
                                <div className={`w-16 h-16 ${benefit.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-5">{benefit.title}</h3>
                                <ul className="space-y-3 flex-grow">
                                    {benefit.items.map((item, i) => (
                                        <li key={i} className="text-slate-600 text-[0.95rem] flex items-start break-keep">
                                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Apply CTA */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">지금 바로 지원하세요</h2>
                        <p className="text-slate-400 mb-10">여러분의 열정과 도전이 인투사이트(주)의 미래입니다.</p>
                        <a href="https://www.jobkorea.co.kr/Recruit/Co_Read/C/intusight11/Company_name/%EC%9D%B8%ED%88%AC%EC%82%AC%EC%9D%B4%ED%8A%B8%E3%88%9C" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30">
                            채용 공고 확인하기
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <p className="mt-6 text-sm text-slate-500">지원 관련 문의: sales@intusight.net</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main >
    );
}
