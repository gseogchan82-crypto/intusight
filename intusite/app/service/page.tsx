'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Monitor, Settings, BrainCircuit, FileText, ArrowRight, ShieldCheck, Search, Users, Server } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Service() {
    const services = [
        {
            num: '1',
            id: 'maintenance',
            title: '보안 솔루션 구축 및 운영',
            quote: '검증된 파트너십 기반의 최적화된 보안 인프라',
            desc: '국내외 주요 보안 벤더사들과의 강력한 파트너십을 통해 고객사 환경에 가장 적합한 솔루션을 선별하고 구축합니다. 단순 설치를 넘어, 도입 이후에도 중단 없는 서비스와 신속한 장애 대응을 보장하는 전문적인 운영(Managed) 서비스를 지원합니다.',
            icon: Settings,
            subItems: [
                { name: '네트워크/시스템 보안', desc: '망연계, NAC 접근제어, 통합로그 시스템 등 필수 보안 솔루션 도입 및 최적화' },
                { name: 'API 보안 환경 구축', desc: '다중 계층 보안(Multi-layer)을 적용한 강력한 내부 API 식별 및 통제 방안 설계' },
                { name: '데이터 이중화(HA/DR)', desc: '장애 발생 시 무중단 비즈니스를 보장하기 위한 실시간 데이터 이중화 시스템 체계화' }
            ]
        },
        {
            num: '2',
            id: 'consulting',
            title: '보안 컨설팅',
            quote: '기업의 내일을 지키는 빈틈없는 보안 마스터플랜',
            desc: '10년 이상의 풍부한 현장 경험을 보유한 전문 엔지니어가 고객사의 IT 환경과 취약점을 정밀하게 분석합니다. 최신 보안 위협 동향과 컴플라이언스를 완벽하게 충족하는 맞춤형 보안 전략을 수립하여 비즈니스 리스크를 원천적으로 차단합니다.',
            icon: FileText,
            subItems: [
                { name: '인프라 취약점 진단', desc: '네트워크 장비, 서버, DB, 웹 애플리케이션 전반에 걸친 보안 허점 및 위협 요인 평가' },
                { name: '컴플라이언스 대응', desc: '주요 정보통신기반시설, 금융보안원, ISMS-P 등 국내외 필수 보안 규제 가이드라인 충족' },
                { name: '맞춤형 보안 로드맵', desc: '도출된 단기, 중장기 과제를 바탕으로 예산과 환경에 맞는 현실적인 보안 개선 로드맵 수립' }
            ]
        },
        {
            num: '3',
            id: 'ai-integration',
            title: 'AI 솔루션 도입',
            quote: '비즈니스 혁신을 가속화하는 지능형 워크플레이스',
            desc: '단순한 기술 도입을 넘어, 실제 업무 효율 향상과 데이터 기반의 의사결정을 이끌어낼 수 있는 맞춤형 AI 솔루션을 제안합니다. 기존 레거시 시스템과 AI 기술이 매끄럽게 융합될 수 있도록 전문적인 기술 지원을 제공합니다.',
            icon: BrainCircuit,
            subItems: [
                { name: 'AI 도입 및 최적화', desc: '업무 자동화 및 지능화를 위한 AI 모델(LLM 등) 스키마 설계 및 내부 시스템 연동' },
                { name: 'AI 런타임 보안 가드레일', desc: '민감 데이터 유출(DLP) 방지 및 프롬프트 인젝션 방어 기반의 안전한 AI 런타임 통제' },
                { name: 'AI 공격 시뮬레이션', desc: '자동화된 AI 엔진 기반 침투 테스트 및 모의 훈련을 통한 시스템 방어력 검증' }
            ]
        },
        {
            num: '4',
            id: 'tech-support',
            title: '가상화 인프라 운영',
            quote: '유연하고 효율적인 차세대 IT 자원 관리',
            desc: '급변하는 비즈니스 요구에 즉각적으로 대응할 수 있는 안정적인 가상화 환경을 구축하고 운영합니다. IT 리소스의 유연한 할당과 최적화를 통해 시스템 효율성을 극대화하고 총소유비용(TCO) 절감을 실현합니다.',
            icon: Monitor,
            subItems: [
                { name: 'IT 자원 가용성 극대화', desc: '동적 리소스 할당 및 로드 밸런싱을 통한 중단 없는 시스템 서비스 환경 보장' },
                { name: '고성능 인프라 통합', desc: '서버, 네트워크, 스토리지 등 다중 인프라 단일 가상 플랫폼으로 집약 및 최적화' },
                { name: '전문 관리 서비스', desc: '가상화 환경 전담 모니터링, 성능 튜닝, 정기 헬스체크를 포함한 엔드투엔드 운영 지원' }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white text-[#111111]">
            <Header />

            {/* Hero Section - 3D Background Layout */}
            <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden print:bg-transparent print:pt-10 bg-slate-50">

                {/* 3D Abstract Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-luminosity"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop')" }}
                ></div>

                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:hidden"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col items-start justify-center text-left">
                        <h1 className="text-4xl lg:text-[3.2rem] font-extrabold mb-8 leading-[1.35] text-slate-900 tracking-tight break-keep max-w-3xl">
                            최적의 IT 환경 구축을 위한<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c358f] to-blue-600 drop-shadow-sm">통합 맞춤형 IT/보안 서비스</span>를<br className="hidden lg:block" /> 제공해 드립니다.
                        </h1>
                        <p className="text-slate-600 text-[1.15rem] lg:text-[1.25rem] leading-[1.8] max-w-2xl break-keep font-medium">
                            인투사이트(주)는 성공적인 사업 구축 사례와 전문 기술력을 바탕으로<br className="hidden md:block" />
                            고객사 인프라에 가장 완벽하게 부합하는 보안 솔루션을 제시합니다.<br className="hidden md:block" />
                            지속적인 분석 및 관리 방안을 통해 최적의 정보보호 시스템을 경험해 보세요.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Header */}
            <div className="bg-white pt-24 pb-16 w-full border-b border-slate-100/60 print:hidden">
                <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center text-center">
                    <span className="text-[#2c358f] font-extrabold tracking-widest text-sm mb-3">Core Services</span>
                    <h2 className="text-[2.2rem] font-extrabold text-slate-900 mb-6">핵심 서비스</h2>
                    <div className="w-10 h-[3px] bg-[#2c358f] rounded-full"></div>
                </div>
            </div>

            {/* List Services using Numbered Headings & Flowchart cards */}
            {services.map((item, index) => (
                <section
                    key={index}
                    id={item.id}
                    className={`scroll-mt-32 py-20 lg:py-24 border-b border-slate-100/60 ${index % 2 === 1 ? 'bg-[#f8f9fb]' : 'bg-white'}`}
                >
                    <div className="container mx-auto px-6 max-w-7xl">

                        {/* Numbered Header Block */}
                        <div className="mb-12">
                            <div className="flex items-baseline gap-4 mb-4">
                                <h2 className="text-[2.5rem] lg:text-[3rem] font-black text-[#2c358f] tracking-tighter leading-none">
                                    {item.num}.
                                </h2>
                                <h3 className="text-[1.6rem] lg:text-[1.8rem] font-extrabold text-slate-900 tracking-tight break-keep">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="ml-0 lg:ml-[4.5rem]">
                                {item.quote && (
                                    <p className="text-[1.25rem] lg:text-[1.35rem] font-bold text-[#2c358f] mb-4 break-keep">
                                        "{item.quote}"
                                    </p>
                                )}
                                <p className="text-slate-600 text-[1.1rem] leading-[1.8] max-w-4xl break-keep font-medium whitespace-pre-wrap">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        {/* Bellock Style Process/Methodology Cards */}
                        <div className="ml-0 lg:ml-[4.5rem] mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {item.subItems.map((sub, idx) => (
                                    <div key={idx} className="flex flex-col h-full bg-white border border-slate-200/80 shadow-[0_2px_10px_-3px_rgba(44,53,143,0.05)] transition-all hover:shadow-[0_8px_30px_rgb(44,53,143,0.08)] hover:-translate-y-1">

                                        {/* Classic blue box header */}
                                        <div className="bg-[#2c358f] text-white px-6 py-4 flex items-center justify-between">
                                            <span className="font-bold text-[1.05rem] tracking-wide">{sub.name}</span>
                                            <div className="flex gap-1.5">
                                                {[0, 1, 2].map(dotIdx => (
                                                    <div
                                                        key={dotIdx}
                                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${dotIdx === idx ? 'bg-white opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.8)] scale-110' : 'bg-white opacity-30'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Card content list style */}
                                        <div className="p-6 lg:p-8 flex-grow">
                                            <ul className="space-y-4">
                                                <li className="flex items-start text-slate-600 font-medium text-[15px] leading-[1.65] break-keep">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2c358f] mt-2 mr-3 shrink-0 opacity-80"></span>
                                                    {sub.desc}
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
            ))}

            {/* Final Call to Action - Clean corporate style */}
            <section className="py-20 bg-white text-center print:hidden">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-[1.7rem] font-bold text-slate-900 mb-4 tracking-tight">전문 기업 역량을 경험하세요</h3>
                    <p className="text-slate-500 mb-10 text-[1.1rem] break-keep">
                        인투사이트의 차별화된 컨설팅을 통해 가장 효율적인 시스템을 설계하고 운영하세요.
                    </p>
                    <Link href="/support" className="inline-block px-10 py-4 bg-[#2c358f] hover:bg-slate-900 text-white rounded-full font-bold text-lg transition-colors shadow-lg shadow-[#2c358f]/20">
                        통합 유지보수 및 솔루션 문의안내
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
