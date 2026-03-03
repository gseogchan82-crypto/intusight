'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, CheckCircle2, Server, Globe2, Workflow, ShieldCheck, ArrowRightCircle } from 'lucide-react';

export default function MCCSSolutionDetail() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#0A192F]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay print:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 print:hidden"></div>

                <div className="relative z-10 container mx-auto px-6 text-center mt-20">
                    <span className="inline-block py-1 px-4 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-300 print:text-black text-sm font-bold mb-6 tracking-widest uppercase backdrop-blur-md">
                        High Availability Solution
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Mantech <span className="text-orange-400">MCCS</span>
                    </h1>
                    <p className="text-blue-100/80 print:text-black text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed break-keep">
                        서버, 애플리케이션, 네트워크, 스토리지 등 시스템 전반의 장애에 대해<br className="hidden md:block" />
                        서비스 연속성을 보장하고 가용성을 극대화하는 고가용성(HA) 솔루션
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">

                    {/* Back Button */}
                    <div className="mb-12">
                        <Link href="/solutions/redundancy" className="inline-flex items-center text-slate-500 hover:text-orange-600 font-bold transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            목록으로 돌아가기
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sidebar */}
                        <div className="w-full lg:w-1/4">
                            <div className="sticky top-32 flex flex-col p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                                    <Database className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">MCCS</h3>
                                <p className="text-sm text-slate-500 font-medium mb-8">High Availability & DR</p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Specs</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-sm text-slate-600 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
                                            실시간 데이터 복제
                                        </li>
                                        <li className="flex items-center text-sm text-slate-600 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
                                            자동 장애 감지/복구
                                        </li>
                                        <li className="flex items-center text-sm text-slate-600 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
                                            HA/DR 통합 관리
                                        </li>
                                        <li className="flex items-center text-sm text-slate-600 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
                                            24/7 무중단 서비스
                                        </li>
                                    </ul>
                                </div>

                                <Link href="/support" className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-700 transition-all text-center flex items-center justify-center gap-2 group">
                                    도입 문의하기 <ArrowRightCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-full lg:w-3/4 space-y-20">

                            {/* Overview */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <span className="w-2 h-10 bg-orange-600 rounded-full"></span>
                                    솔루션 개요
                                </h2>
                                <p className="text-lg text-slate-600 leading-8 break-keep mb-8">
                                    MCCS는 기업의 핵심 IT 인프라(서버, 애플리케이션, 네트워크, 스토리지)에 발생할 수 있는 장애를 실시간으로 감지하고,
                                    자동으로 대기 시스템으로 서비스를 전환(Failover)하여 비즈니스 연속성을 보장하는 고가용성(HA) 솔루션입니다.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-3 text-lg">미션 크리티컬 워크로드 보호</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm break-keep">
                                            금융, 제조, 공공 등 24/7 무중단 운영이 필수적인 미션 크리티컬 환경에서 안정적인 서비스를 제공합니다.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-3 text-lg">데이터 정합성 보장</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm break-keep">
                                            실시간 데이터 복제 기술을 통해 주 서버와 대기 서버 간의 데이터 일치성을 완벽하게 유지합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Features Grid */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                                    <Server className="w-8 h-8 text-orange-600" />
                                    주요 기능
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
                                            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                            <p className="text-slate-600 leading-relaxed break-keep">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* System Architecture / Effect */}
                            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                                        <Globe2 className="w-8 h-8 text-orange-400" />
                                        도입 효과
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="text-4xl font-bold text-orange-400 mb-2">99.999%</div>
                                            <div className="font-bold text-lg mb-2">가용성 증대</div>
                                            <p className="text-sm text-slate-300 print:text-black break-keep">서비스 다운타임 최소화로 비즈니스 신뢰도 향상</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="text-4xl font-bold text-orange-400 mb-2">ZERO</div>
                                            <div className="font-bold text-lg mb-2">데이터 손실</div>
                                            <p className="text-sm text-slate-300 print:text-black break-keep">실시간 복제로 장애 시 데이터 유실 방지</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="text-4xl font-bold text-orange-400 mb-2">TCO</div>
                                            <div className="font-bold text-lg mb-2">비용 절감</div>
                                            <p className="text-sm text-slate-300 print:text-black break-keep">효율적인 자원 활용으로 운영 비용 최적화</p>
                                        </div>
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

const features = [
    {
        title: "자동 장애 감지 및 복구 (Failover)",
        description: "서버, 네트워크, 스토리지 등 인프라 장애를 실시간으로 감지하고, 서비스 중단 없이 대기 시스템으로 즉시 전환합니다.",
        icon: <Workflow className="w-6 h-6" />
    },
    {
        title: "실시간 데이터 복제 (Replication)",
        description: "운영 서버의 데이터를 대기 서버로 실시간 복제하여 데이터 정합성을 보장하고, 스토리지 장애 시에도 데이터를 보호합니다.",
        icon: <Database className="w-6 h-6" />
    },
    {
        title: "통합 관리 콘솔 (Web GUI)",
        description: "직관적인 웹 기반 대시보드를 통해 전체 시스템의 HA 상태를 한눈에 모니터링하고 손쉽게 제어할 수 있습니다.",
        icon: <Server className="w-6 h-6" />
    },
    {
        title: "다양한 환경 지원",
        description: "Windows, Linux, AIX, Solaris 등 다양한 OS와 물리/가상/클라우드 환경을 완벽하게 지원합니다.",
        icon: <ShieldCheck className="w-6 h-6" />
    }
];
