'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import React from 'react';

export default function Header() {
    type MenuItem = {
        name: string;
        link: string;
        subItems?: { name: string; link: string }[];
    };

    const menuItems: MenuItem[] = [
        {
            name: '회사소개',
            link: '/company/greeting',
            subItems: [
                { name: '인사말', link: '/company/greeting' },
                { name: '회사소개', link: '/company/overview' },
                { name: '오시는 길', link: '/company/location' },
            ]
        },
        {
            name: '솔루션',
            link: '/solutions',
            subItems: [
                { name: '네트워크 보안', link: '/solutions/network' },
                { name: '시스템 보안', link: '/solutions/system' },
                { name: 'API 보안', link: '/solutions/api' },
                { name: 'AI 보안', link: '/solutions/ai' },
                { name: '데이터 보호', link: '/solutions/redundancy' }
            ]
        },
        {
            name: '사업영역',
            link: '/service',
            subItems: [
                { name: '보안 솔루션 구축/운영', link: '/service#maintenance' },
                { name: '보안 컨설팅', link: '/service#consulting' },
                { name: 'AI 솔루션 도입', link: '/service#ai-integration' },
                { name: '가상화 인프라 운영', link: '/service#tech-support' }
            ]
        },
        { name: '채용정보', link: '/careers' },
        { name: '고객지원', link: '/support' }
    ];

    return (
        <header className="fixed z-50 w-full border-b border-white/5 backdrop-blur-xl bg-black/50 top-0 transition-all duration-300 print:hidden">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-48 transition-opacity hover:opacity-80">
                    <Image
                        src="/logo.png"
                        alt="Intusight Logo"
                        fill
                        className="object-contain object-left brightness-0 invert"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {menuItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.link}
                                className="flex items-center gap-1 py-4 text-sm font-medium text-slate-300 hover:text-blue-400 hover:[text-shadow:0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300 tracking-wide"
                            >
                                {item.name}
                                {item.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.subItems && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl p-2 min-w-[160px]">
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.link}
                                                className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors whitespace-nowrap text-center"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white hover:text-blue-400 transition-colors">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
}
