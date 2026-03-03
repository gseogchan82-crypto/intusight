

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';
import Link from 'next/link';
import { Database, ArrowRightCircle, ArrowRight } from 'lucide-react';
import { solutions } from './data';

export default function RedundancyPage() {
    const menuItems = [
        { name: '네트워크 보안', href: '/solutions/network', active: false },
        { name: '시스템 보안', href: '/solutions/system', active: false },
        { name: 'API 보안', href: '/solutions/api', active: false },
        { name: 'AI 보안', href: '/solutions/ai', active: false },
        { name: '데이터 보호', href: '/solutions/redundancy', active: true }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Header />

            {/* Hero Section - Unified Dark Theme */}
            <section className="relative h-[500px] print:h-auto print:py-8 print:bg-transparent print:h-auto print:py-8 flex items-center justify-center overflow-hidden bg-[#1a237e] print:bg-transparent">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay print:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 print:hidden"></div>
                <div className="absolute inset-0 opacity-30 print:hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center mt-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 print:text-black text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-md print:bg-transparent print:border-slate-300 print:text-black">
                        Data Protection
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight flex flex-col gap-2">
                        <span className="text-white drop-shadow-sm print:text-black print:drop-shadow-none">데이터</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 print:text-black print:-webkit-text-fill-color-initial">
                            보호
                        </span>
                    </h1>
                    <p className="text-blue-100/80 print:text-black text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed break-keep print:text-black">
                        서비스 연속성과 안정성을 보장하는<br className="hidden md:block" />
                        고가용성 기반 데이터 보호 및 복구 시스템
                    </p>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="py-20 print:py-8 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

                        {/* Sidebar Navigation */}
                        <div className="w-full md:w-1/4 flex-shrink-0 print:hidden">
                            <div className="sticky top-32">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Solutions Menu</h3>
                                <div className="flex flex-col gap-2">
                                    {menuItems.map((menu) => (
                                        <Link
                                            key={menu.name}
                                            href={menu.href}
                                            className={`block px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${menu.active
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 translate-x-1'
                                                : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                                                }`}
                                        >
                                            {menu.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Quick Contact Box */}
                                <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 hidden md:block">
                                    <h4 className="font-bold text-slate-900 mb-2">도입 문의</h4>
                                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                                        전문 컨설턴트가 최적의 보안 솔루션을 제안해 드립니다.
                                    </p>
                                    <Link href="/support" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group">
                                        문의하기 <ArrowRightCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full md:w-3/4 print:w-full">
                            <div className="space-y-16 print:space-y-0 print:grid print:grid-cols-1 print:gap-8">
                                {solutions.map((item) => (
                                    <div key={item.id} className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-12 print:p-6 print:shadow-none hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden">

                                        {/* Background Decor */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50/50 rounded-full blur-3xl group-hover:bg-orange-50/50 transition-colors -mr-16 -mt-16"></div>

                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                                                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-3xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <span className="hidden md:inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                                            Solution
                                                        </span>
                                                    </div>
                                                    <p className="text-orange-500 font-medium text-lg mb-4">{item.subtitle}</p>
                                                    <p className="text-slate-600 leading-relaxed text-lg break-keep max-w-3xl">
                                                        {item.description}
                                                    </p>

                                                    {/* View Details Link - 변경예정으로 일단 숨김처리 */}
                                                    {/* @ts-ignore */}
                                                    {/*
                                                    <Link href={item.externalLink || `/solutions/redundancy/${item.id}`} className="inline-flex items-center mt-4 text-sm font-bold text-orange-600 hover:text-orange-800 transition-colors gap-1 print:hidden"
                                                        {...(item.externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                                        자세히 보기 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                    */}
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className="w-full h-px bg-slate-100 my-8"></div>

                                            {/* Detailed Features Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                <div className="col-span-1 md:col-span-2">
                                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                        <Database className="w-4 h-4" /> Key Features
                                                    </h4>
                                                </div>
                                                {item.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 hover:bg-orange-50/50 transition-colors border border-transparent hover:border-orange-100">
                                                        <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-slate-700 font-medium leading-snug break-keep">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Certifications & Specs */}
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-2">
                                                    <ArrowRightCircle className="w-4 h-4" /> Specs
                                                </span>
                                                {item.specs.map((spec, i) => (
                                                    <span key={i} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-bold shadow-sm flex items-center gap-2 group-hover:border-orange-200 group-hover:text-orange-600 transition-all">
                                                        <Database className="w-3 h-3 text-slate-400 group-hover:text-orange-400" />
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
