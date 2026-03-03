'use client';

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Train, Bus } from 'lucide-react';
import Script from 'next/script';

declare global {
    interface Window {
        kakao: any;
    }
}

export default function Location() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    const initMap = () => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                if (mapRef.current) {
                    try {
                        const options = {
                            center: new window.kakao.maps.LatLng(37.4763, 126.8871),
                            level: 3,
                        };
                        const map = new window.kakao.maps.Map(mapRef.current, options);
                        const markerPosition = new window.kakao.maps.LatLng(37.4763, 126.8871);
                        const marker = new window.kakao.maps.Marker({
                            position: markerPosition
                        });
                        marker.setMap(map);

                        const ps = new window.kakao.maps.services.Places();
                        ps.keywordSearch('가산 퍼블릭 B동', function (data: any, status: any, pagination: any) {
                            if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
                                const coords = new window.kakao.maps.LatLng(data[0].y, data[0].x);
                                map.setCenter(coords);
                                marker.setPosition(coords);
                            } else {
                                const geocoder = new window.kakao.maps.services.Geocoder();
                                geocoder.addressSearch('서울특별시 금천구 디지털로 178', function (result: any, status: any) {
                                    if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
                                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                                        map.setCenter(coords);
                                        marker.setPosition(coords);
                                    }
                                });
                            }
                        });
                    } catch (error) {
                        console.error("Error creating map:", error);
                    }
                }
            });
        }
    };

    React.useEffect(() => {
        // If script is already loaded
        if (window.kakao && window.kakao.maps) {
            initMap();
        }
    }, []);

    return (
        <main className="min-h-screen bg-slate-50">
            <Script
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2cc239640bdaa5cbd0f21f0b032f03f4&autoload=false&libraries=services"
                strategy="lazyOnload"
                onLoad={initMap}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative h-[550px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 opacity-90 print:hidden"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] print:h-auto print:py-8 print:bg-transparent bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

                <div className="relative z-10 text-center text-white px-6 mt-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 print:text-black text-xs font-bold mb-5 tracking-widest uppercase backdrop-blur-md">
                        Location
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight flex flex-col gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 drop-shadow-md print:text-black print:drop-shadow-none">
                            오시는 길
                        </span>
                    </h1>
                    <p className="text-blue-50/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed break-keep drop-shadow-sm">
                        인투사이트(주)는 고객 여러분의 방문을 환영합니다.<br />
                        주요 교통이 만나는 가산디지털단지에서 기다리고 있습니다.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6 -mt-20 relative z-20 pb-32">
                <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">

                    {/* Top: Kakao Map (Full Width) */}
                    <div className="w-full h-[500px] print:h-auto print:py-8 print:bg-transparent bg-slate-100 relative group">
                        <div ref={mapRef} className="w-full h-full"></div>

                        {/* Overlay Label */}
                        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl py-4 px-6 rounded-2xl shadow-xl border border-slate-100 z-10 hidden md:block">
                            <h3 className="font-bold text-slate-900 mb-1">인투사이트(주) 본사</h3>
                            <p className="text-slate-500 text-sm">가산 현대퍼블릭 B동 1208호</p>
                        </div>
                    </div>

                    {/* Bottom: Info Section */}
                    <div className="p-10 md:p-14 lg:p-16 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center mb-12">
                                <span className="w-1.5 h-8 bg-blue-600 rounded-full mr-4"></span>
                                <h3 className="text-3xl font-bold text-slate-900">Contact Information</h3>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Address */}
                                <div className="group">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <MapPin size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xl mb-3">주소</h4>
                                            <p className="text-slate-600 leading-relaxed text-base">
                                                서울특별시 금천구 디지털로 178,<br />
                                                가산 현대퍼블릭 B동 12층 1208호
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact & Email */}
                                <div className="group">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <Phone size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xl mb-3">연락처</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-slate-400 text-sm w-12">Tel</span>
                                                    <span className="text-slate-700 font-medium">02-2138-2344</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-slate-400 text-sm w-12">Email</span>
                                                    <span className="text-slate-700 font-medium">sales@intusight.net</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Transport Info */}
                                <div className="group">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <Train size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xl mb-3">오시는 길</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-white print:text-black bg-green-500 text-[10px] px-1.5 py-0.5 rounded font-bold mt-1">7호선</span>
                                                    <p className="text-slate-600 text-sm leading-snug">
                                                        <span className="font-bold text-slate-800">가산디지털단지역</span> 7번 출구<br />
                                                        도보 약 8분 (550m)
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="text-white print:text-black bg-blue-400 text-[10px] px-1.5 py-0.5 rounded font-bold mt-1">BUS</span>
                                                    <p className="text-slate-600 text-sm leading-snug">
                                                        <span className="font-bold text-slate-800">디지털단지오거리</span> 하차<br />
                                                        도보 3분
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
