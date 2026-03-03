'use client';
import Link from 'next/link';
import { Network, Server, BrainCircuit, GlobeLock, MonitorSmartphone, ArrowRight } from 'lucide-react';

type Category = {
    id: string;
    title: string;
    titleKo: string;
    icon: any;
    description: string;
    color: string;
    // Dynamic Theme Classes
    themeColor: string; // e.g. 'text-blue-600'
    themeBg: string; // e.g. 'bg-blue-50'
    themeBorder: string; // e.g. 'border-blue-100'
    themeHoverBg: string; // e.g. 'group-hover:bg-blue-50'
    themeHoverBorder: string; // e.g. 'group-hover:border-blue-100'
    themeHoverText: string; // e.g. 'group-hover:text-blue-600'

    tags?: string[];
    tagGroups?: string[][]; // Support for multiple rows of tags
    href: string;
};

const categories: Category[] = [
    {
        id: 'network-security',
        title: 'Network Security',
        titleKo: '네트워크 보안',
        icon: Network,
        description: '망분리 환경 간의 안전한 자료 전송 및\n내/외부 위협으로부터 네트워크를 보호합니다.',
        color: 'from-blue-500 to-cyan-500',

        themeColor: 'text-blue-600',
        themeBg: 'bg-blue-50',
        themeBorder: 'border-blue-100',
        themeHoverBg: 'group-hover:bg-blue-50',
        themeHoverBorder: 'group-hover:border-blue-100',
        themeHoverText: 'group-hover:text-blue-600',

        tagGroups: [
            ['i-oneNet', 'i-oneNet DD', 'i-oneNAC'],
        ],
        href: '/solutions/network'
    },
    {
        id: 'system',
        title: 'System Security',
        titleKo: '시스템 보안',
        icon: MonitorSmartphone,
        description: '시스템 접근통제 및 통합 논리적 보안으로\n기업의 주요 자산을 빈틈없이 보호합니다.',
        color: 'from-teal-400 to-emerald-500',

        themeColor: 'text-teal-600',
        themeBg: 'bg-teal-50',
        themeBorder: 'border-teal-100',
        themeHoverBg: 'group-hover:bg-teal-50',
        themeHoverBorder: 'group-hover:border-teal-100',
        themeHoverText: 'group-hover:text-teal-600',

        tags: ['i-oneNGS'],
        href: '/solutions/system'
    },
    {
        id: 'api-security',
        title: 'API Security',
        titleKo: 'API 보안',
        icon: GlobeLock,
        description: '서비스 간 API 통신을 실시간으로 감시하고\n데이터 유출 위협을 차단합니다.',
        color: 'from-indigo-500 to-blue-600',

        themeColor: 'text-indigo-600',
        themeBg: 'bg-indigo-50',
        themeBorder: 'border-indigo-100',
        themeHoverBg: 'group-hover:bg-indigo-50',
        themeHoverBorder: 'group-hover:border-indigo-100',
        themeHoverText: 'group-hover:text-indigo-600',

        tags: ['NGINX App Protect', 'SoftFreak F-APIm'],
        href: '/solutions/api'
    },
    {
        id: 'ai-security',
        title: 'AI Security',
        titleKo: 'AI 보안',
        icon: BrainCircuit,
        description: 'AI 런타임 보안 및 지속적 공격 시뮬레이션을 통해\n안전한 AI 도입과 운영을 보장합니다.',
        color: 'from-purple-500 to-pink-500',

        themeColor: 'text-purple-600',
        themeBg: 'bg-purple-50',
        themeBorder: 'border-purple-100',
        themeHoverBg: 'group-hover:bg-purple-50',
        themeHoverBorder: 'group-hover:border-purple-100',
        themeHoverText: 'group-hover:text-purple-600',

        tags: ['F5 AI Guardrails', 'F5 AI Red Team', 'SANDS Lab GLX', 'S2W SAIP'],
        href: '/solutions/ai'
    },
    {
        id: 'redundancy',
        title: 'Data Protection',
        titleKo: '데이터 보호',
        icon: Server,
        description: '고가용성 기반 데이터 보호 및 복구 시스템으로\n비즈니스 연속성을 철저하게 보장합니다.',
        color: 'from-orange-400 to-amber-500',

        themeColor: 'text-orange-600',
        themeBg: 'bg-orange-50',
        themeBorder: 'border-orange-100',
        themeHoverBg: 'group-hover:bg-orange-50',
        themeHoverBorder: 'group-hover:border-orange-100',
        themeHoverText: 'group-hover:text-orange-600',

        tags: ['Mantech MCCS'],
        href: '/solutions/redundancy'
    }
];

export default function Solutions() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Gradients */}

            <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>

            {/* Tech Accents - Enhanced Glows */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/80 border border-slate-200 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
                        Our Solutions
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed break-keep">
                        인투사이트(주)는 검증된 파트너십과 전문 기술력으로<br className="hidden md:block" />
                        <span className="text-slate-900 font-bold">최적화된 IT 보안 솔루션</span>을 제공합니다.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8">
                        {categories.map((cat, index) => (
                            <Link
                                key={cat.id}
                                href={cat.href}
                                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[320px] flex-grow-0 flex-shrink-0 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">

                                    {/* Top Gradient Line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                    {/* Hover Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.themeBg} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Background Icon Watermark - NEW */}
                                    <div className="absolute -bottom-12 -right-12 text-slate-100/50 group-hover:text-slate-200/50 transition-colors duration-500 transform rotate-[-15deg]">
                                        <cat.icon className="w-64 h-64 opacity-20" strokeWidth={0.5} />
                                    </div>

                                    <div className="relative p-10 flex flex-col h-full z-10 min-h-[480px]"> {/* Added min-height */}

                                        {/* Icon Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div className={`w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center ${cat.themeHoverBg} ${cat.themeHoverBorder} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                                                <cat.icon className={`w-8 h-8 text-slate-600 ${cat.themeHoverText} transition-colors duration-300`} strokeWidth={1.5} />
                                            </div>
                                            <div className="mt-2">
                                                <span className={`text-[10px] font-bold tracking-widest text-slate-400 uppercase py-1 px-3 rounded-full bg-slate-100 ${cat.themeHoverText} group-hover:bg-white transition-colors`}>
                                                    {cat.title}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-4 text-slate-800 leading-tight group-hover:text-slate-900 transition-colors">
                                                {cat.titleKo}
                                            </h3>
                                            <p className="text-slate-500 text-base leading-loose mb-10 break-keep min-h-[4rem] group-hover:text-slate-600 transition-colors"> {/* Font size up, loose leading */}
                                                {cat.description}
                                            </p>

                                            {/* Tags - Redesigned to Pills */}
                                            <div className="flex flex-wrap gap-2.5 mb-8 content-start">
                                                {cat.tagGroups ? (
                                                    cat.tagGroups.flat().map((tag, i) => (
                                                        <span key={i} className={`px-4 py-2 rounded-full bg-slate-50 text-sm text-slate-500 font-semibold border border-slate-100 group-hover:border-white/50 group-hover:bg-white/60 transition-all shadow-sm`}>
                                                            {tag}
                                                        </span>
                                                    ))
                                                ) : (
                                                    cat.tags?.map((tag, i) => (
                                                        <span key={i} className={`px-4 py-2 rounded-full bg-slate-50 text-sm text-slate-500 font-semibold border border-slate-100 group-hover:border-white/50 group-hover:bg-white/60 transition-all shadow-sm`}>
                                                            {tag}
                                                        </span>
                                                    ))
                                                )}
                                            </div>
                                        </div>

                                        {/* Bottom Action */}
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-50 group-hover:border-slate-200/50 transition-colors mt-auto">
                                            <span className={`text-base font-bold text-slate-400 ${cat.themeHoverText} transition-colors`}>Detail View</span>
                                            <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300 ${cat.themeHoverBg} group-hover:scale-110 shadow-sm`}>
                                                <ArrowRight className={`w-5 h-5 text-slate-400 ${cat.themeHoverText}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
