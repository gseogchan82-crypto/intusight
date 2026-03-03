'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';
import Link from 'next/link';
import { Network, MonitorSmartphone, BrainCircuit, Server, GlobeLock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SolutionsPage() {
    const categories = [
        {
            id: 'network-security',
            title: 'Network Security',
            titleKo: '네트워크 보안',
            icon: Network,
            description: '내부망과 외부망 사이의 데이터를 안전하게 전송하고 통제하여, 사이버 위협으로부터 핵심 자산을 보호하는 필수적인 보안 체계입니다.',
            tags: ['망연계 (자료전송/스트리밍)', '일방향 전송 (Data Diode)', '망분리 보안', 'NAC 네트워크 접근제어'],
            href: '/solutions/network'
        },
        {
            id: 'system-security',
            title: 'System Security',
            titleKo: '시스템 보안',
            icon: ShieldCheck,
            description: '이기종 IT 인프라에 대한 접근을 관리하고 통제하는 차세대 시스템 접근제어 및 계정 관리 통합 솔루션입니다.',
            tags: ['통합 시스템 접근제어', 'i-oneNGS'],
            href: '/solutions/system'
        },
        {
            id: 'api-security',
            title: 'API Security',
            titleKo: 'API 보안',
            icon: GlobeLock,
            description: '서로 다른 애플리케이션이 통신하는 접점인 API(Application Programming Interface)를 대상으로 발생하는 데이터 탈취나 조작 등의 공격을 탐지하고 방어합니다.',
            tags: ['NGINX App Protect (WAF)', 'SoftFreak F-APIm', 'API 통합 보안'],
            href: '/solutions/api'
        },
        {
            id: 'ai-security',
            title: 'AI Security',
            titleKo: 'AI 보안',
            icon: BrainCircuit,
            description: '인공지능 모델의 무결성을 보호하고, AI 서비스 사용 과정에서 발생할 수 있는 데이터 유출 및 악의적인 공격을 예방하여 안전한 AI 활용을 보장합니다.',
            tags: ['AI 런타임 보안', 'LLM 가드레일', 'AI 기반 위협 분석'],
            href: '/solutions/ai'
        },
        {
            id: 'redundancy',
            title: 'Data Protection',
            titleKo: '데이터 보호',
            icon: Server,
            description: '시스템 장애나 재해 발생 시에도 데이터 손실을 방지하고 서비스를 중단 없이 유지할 수 있도록 하는 고가용성(HA) 및 재해복구(DR) 전략입니다.',
            tags: ['HA/DR (재해복구)', '실시간 데이터 복제', '무중단 서비스'],
            href: '/solutions/redundancy'
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section - Matching Greeting Page Design */}
            <section className="relative h-[600px] print:h-auto print:py-8 print:bg-transparent flex items-center justify-center overflow-hidden bg-[#1a237e]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay print:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 print:hidden"></div>

                {/* Digital/Network Particles Effect */}
                <div className="absolute inset-0 opacity-30 print:hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center h-full pt-16">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-8 h-[1px] bg-blue-400"></span>
                        <h2 className="text-blue-300 print:text-black font-bold tracking-widest uppercase text-sm">솔루션 소개</h2>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight flex flex-col gap-2">
                        <span className="text-white drop-shadow-sm print:text-black print:drop-shadow-none">통합 보안</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 print:text-black print:drop-shadow-none">
                            플랫폼
                        </span>
                    </h1>
                    <p className="text-blue-100/80 print:text-black text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                        기업의 비즈니스 연속성을 보장하는<br className="hidden md:block" />
                        가장 강력하고 안전한 통합 보안 솔루션을 제공합니다.
                    </p>
                </div>
            </section>

            {/* Main Content - Clean White Layout (Greeting Style) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-16">

                        {/* Left Column: Title / Sticky Navigation */}
                        <div className="w-full md:w-1/4 flex-shrink-0 print:hidden">
                            <div className="sticky top-32">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                    솔루션 소개
                                    <div className="h-1 w-12 bg-blue-600 mt-4"></div>
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    인투사이트는 각 분야별 최고의 파트너사와 협력하여 최적의 보안 환경을 제안합니다.
                                </p>
                                <div className="hidden md:block p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                                        도입 문의
                                    </h4>
                                    <p className="text-sm text-slate-500 mb-4">
                                        전문 컨설턴트가 자세한 상담을 도와드립니다.
                                    </p>
                                    <Link href="/support" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                        상담 신청하기 <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content List (Horizontal Layout) */}
                        <div className="w-full md:w-3/4 print:w-full">
                            <div className="flex flex-col gap-4">
                                {categories.map((cat, index) => (
                                    <Link key={cat.id} href={cat.href} className="group block">
                                        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden group-hover:-translate-x-1">

                                            {/* Left Accent Bar */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 group-hover:bg-blue-500 transition-colors duration-300"></div>

                                            {/* Icon */}
                                            <div className="shrink-0 relative z-10">
                                                <div className="w-16 h-16 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                                    <cat.icon className="w-8 h-8" strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow min-w-0 relative z-10 py-2">
                                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                                        {cat.titleKo}
                                                    </h3>
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                        {cat.title}
                                                    </span>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed transition-all break-keep">
                                                    {cat.description}
                                                </p>

                                                {/* Tags (Visible on Hover or Desktop) */}
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {cat.tags.map((tag, i) => (
                                                        <span key={i} className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Action */}
                                            <div className="shrink-0 relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-100 text-slate-300 print:text-black group-hover:border-blue-500 group-hover:text-blue-500 group-hover:rotate-45 transition-all duration-300">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="mt-12 md:hidden p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                <h4 className="font-bold text-slate-800 mb-2">도입 문의가 필요하신가요?</h4>
                                <Link href="/support" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-sm mt-4">
                                    전문가 상담 신청
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
