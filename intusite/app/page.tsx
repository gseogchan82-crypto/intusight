import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Network } from 'lucide-react';

const DataFlowBackground = dynamic(() => import('@/components/DataFlowBackground'));
const Solutions = dynamic(() => import('@/components/Solutions'));

export default function Home() {
  const partners = [
    { name: 'KT', image: '/images/clients/kt.png', color: 'text-red-500' },
    { name: 'WIPS', image: '/images/clients/wips.png', color: 'text-blue-600' },
    { name: '맑은행복 양평', image: '/images/clients/yangpyeong.png', color: 'text-green-500' },
    { name: '강서구청', image: '/images/clients/gangseo.png', color: 'text-orange-500' },
    { name: '라이나생명', image: '/images/clients/lina.png', color: 'text-red-600' },
    { name: 'MetLife', image: '/images/clients/metlife.png', color: 'text-blue-500' },
    { name: '유진투자증권', image: '/images/clients/eugene.png', color: 'text-red-500' },
    { name: '유안타증권', image: '/images/clients/yuanta.png', color: 'text-blue-400' },
    { name: '공영홈쇼핑', image: '/images/clients/gongyeong.png', color: 'text-red-500' },
    { name: '한국특허기술진흥원', image: '/images/clients/kipro.png', color: 'text-teal-600' },
    { name: '한국디자인진흥원', image: '/images/clients/kidp.png', color: 'text-purple-500' },
    { name: '서울신용보증재단', image: '/images/clients/seoul_credit.png', color: 'text-blue-800' },
  ];

  return (
    <main className="min-h-screen bg-[#1a237e] overflow-hidden selection:bg-blue-500/30">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.1),_transparent_70%)] animate-pulse-slow print:hidden"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,#1a237e)]"></div>

        {/* Data Flow Background Layer */}
        <div className="absolute inset-0 z-0 print:hidden">
          <DataFlowBackground />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-100 print:text-black tracking-wide">Next Generation Security</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              <span className="block text-white mb-2">미래를 지키는 보안</span>
              <span className="text-radiant-blue">인투사이트(주)</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto mb-12 leading-relaxed font-light break-keep">
              글로벌 리더 수준의 강력한 보안 인프라.<br className="hidden md:block" />
              실시간 인터랙티브 방어 체계로 귀사의 비즈니스를 보호합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/solutions">
                <button className="group relative px-8 py-4 bg-white text-[#1a237e] font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
                  솔루션 알아보기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <Link href="/support">
                <button className="px-8 py-4 text-white font-medium rounded-2xl hover:bg-white/10 transition-all border border-white/20 hover:border-white/40 backdrop-blur-sm">
                  도입 문의하기
                </button>
              </Link>
            </div>
          </div>
        </div>

      </section>

      <Solutions />

      {/* Partners Marquee / Grid Section */}
      {/* Clients Section (Formerly Partners) */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Title - Left Aligned */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              다양한 분야의 고객사들과<br />
              함께하고 있습니다.
            </h2>
          </div>

          {/* Glass Card Container */}
          <div className="relative animate-fade-in-up delay-100">
            {/* Grid */}
            {/* Marquee Container */}
            <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex animate-infinite-scroll items-center gap-24 pr-24">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-6 min-w-[180px]"
                  >
                    <div className="flex items-center justify-center h-32 w-32 md:h-40 md:w-48">
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          sizes="(max-width: 768px) 128px, 192px"
                          className="object-contain hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <span className="font-medium text-slate-500 text-sm text-center break-keep whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* More View Button - Right Aligned in Footer */}
            <div className="mt-12 flex justify-end pt-8 border-t border-slate-200">
              <button className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold tracking-widest uppercase">
                View More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
