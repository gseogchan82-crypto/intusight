import { solutions } from '../data';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft, Zap, Shield, Hexagon, CheckCircle2 } from 'lucide-react';

export default async function SystemSolutionDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const solution = solutions.find((s) => s.id === id);

    if (!solution) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1a237e]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay print:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 print:hidden"></div>

                <div className="relative z-10 container mx-auto px-6 text-center mt-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 print:text-black text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-md">
                        System Security Solution
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {solution.title}
                    </h1>
                    <p className="text-blue-200 print:text-black text-lg font-medium">{solution.subtitle}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">

                    {/* Back Button */}
                    <div className="mb-12">
                        <Link href="/solutions/system" className="inline-flex items-center text-slate-500 hover:text-teal-600 font-bold transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            목록으로 돌아가기
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Sidebar / Icon Area */}
                        <div className="w-full md:w-1/4">
                            <div className="sticky top-32 flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                                    {React.cloneElement(solution.icon as React.ReactElement<any>, { className: "w-10 h-10" })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">{solution.subtitle}</p>

                                <Link href="/support" className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-500/20 hover:bg-teal-700 transition-all text-sm">
                                    도입 문의하기
                                </Link>
                            </div>
                        </div>

                        {/* Main Detail Content */}
                        <div className="w-full md:w-3/4 print:w-full">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-teal-600 rounded-full"></span>
                                    솔루션 개요
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg break-keep mb-12 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    {solution.description}
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-teal-500" />
                                    주요 기능
                                </h2>
                                <div className="grid grid-cols-1 gap-4 mb-12">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium break-keep">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-teal-500" />
                                    기술 사양 및 인증
                                </h2>
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {solution.specs.map((spec, i) => (
                                        <span key={i} className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold shadow-sm flex items-center gap-2">
                                            <Hexagon className="w-4 h-4 text-teal-400" />
                                            {spec}
                                        </span>
                                    ))}
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

export function generateStaticParams() {
    return solutions.map((solution) => ({
        id: solution.id,
    }));
}
