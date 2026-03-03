'use client';

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Script from 'next/script';

declare global {
    interface Window {
        kakao: any;
    }
}

export default function Support() {
    const [formData, setFormData] = React.useState({
        category: '',
        detailCategory: '',
        companyName: '',
        name: '',
        phone: '',
        email: '',
        message: '',
        privacyAgreed: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: fieldValue
        }));

        // Reset detail category when main category changes
        if (name === 'category') {
            setFormData(prev => ({
                ...prev,
                detailCategory: '',
                [name]: value
            }));
        }
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert(`[문의 접수 성공]\n\n${formData.name}님의 문의가 정상적으로 전송되었습니다.\n담당자가 확인 후 빠르게 연락드리겠습니다.`);
                setFormData({
                    category: '',
                    detailCategory: '',
                    companyName: '',
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                    privacyAgreed: false
                });
            } else {
                const data = await response.json();
                console.error(data);
                throw new Error(data.error || 'Failed to send email');
            }
        } catch (error) {
            console.error(error);
            alert('[전송 실패]\n\n시스템 오류로 메일 발송에 실패했습니다.\n잠시 후 다시 시도해주시거나, 대표 전화로 문의해주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const mapRef = React.useRef<HTMLDivElement>(null);

    const initMap = () => {
        if (window.kakao && window.kakao.maps && mapRef.current) {
            window.kakao.maps.load(() => {
                const defaultOptions = {
                    center: new window.kakao.maps.LatLng(37.4763, 126.8871),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(mapRef.current, defaultOptions);

                const markerPosition = new window.kakao.maps.LatLng(37.4763, 126.8871);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);

                // Ensure accuracy with Keyword Search
                const ps = new window.kakao.maps.services.Places();
                ps.keywordSearch('가산 퍼블릭 B동', function (data: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK && data.length > 0) {
                        const coords = new window.kakao.maps.LatLng(data[0].y, data[0].x);
                        map.setCenter(coords);
                        marker.setPosition(coords);
                    } else {
                        // Fallback to address search
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
        <main className="min-h-screen bg-white">
            <Script
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2cc239640bdaa5cbd0f21f0b032f03f4&autoload=false&libraries=services"
                strategy="lazyOnload"
                onLoad={initMap}
            />
            <Header />

            {/* Hero Section - Light Theme */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-white">

                <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] print:h-auto print:py-8 print:bg-transparent bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

                <div className="relative z-10 text-center px-6">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                        Support Center
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-900">
                        무엇을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 print:text-black print:drop-shadow-none">도와드릴까요?</span>
                    </h1>
                    <p className="text-slate-600 text-[1.15rem] md:text-[1.25rem] max-w-2xl mx-auto font-semibold leading-[1.8] keep-all">
                        인투사이트(주)는 고객의 목소리에 항상 귀 기울이고 있습니다.<br />
                        궁금하신 점이 있다면 언제든지 문의해주세요.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Contact Info Card */}
                    <div id="location" className="scroll-mt-32 bg-white rounded-[2.5rem] p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

                        <div className="relative z-10 space-y-14">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center tracking-tight">
                                    <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                                    Location
                                </h3>
                                <div className="w-full h-80 rounded-[2rem] border border-slate-200 mb-8 overflow-hidden shadow-inner relative z-0">
                                    <div ref={mapRef} className="w-full h-full"></div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm border border-blue-100">
                                        <MapPin className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-slate-900 text-xl mb-3">회사주소</div>
                                        <p className="text-slate-600 font-light text-lg break-keep">서울특별시 금천구 디지털로 178,<br />B동 12층 1208호 (현대퍼블릭, 가산동)</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm border border-blue-100">
                                        <Phone className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-slate-900 text-xl mb-3">연락처</div>
                                        <p className="text-slate-600 font-light text-lg">02-2138-2344</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm border border-blue-100">
                                        <Mail className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div className="pt-1">
                                        <div className="font-bold text-slate-900 text-xl mb-3">메일 주소</div>
                                        <p className="text-slate-600 font-light text-lg">sales@intusight.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-12 md:p-14 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-3xl font-bold text-slate-900 mb-2 relative z-10 tracking-tight">문의하기</h3>
                        <p className="text-slate-500 mb-10 relative z-10 text-base font-medium">문의 주시는 내용은 담당자가 확인 후 신속하게 답변해 드립니다.</p>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                            {/* Category Selection */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 block">분야선택 <span className="text-red-500">*</span></label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="" disabled>분야를 선택해주세요</option>
                                    <option value="solution">솔루션</option>
                                    <option value="service">사업영역</option>
                                    <option value="partnership">협의문의</option>
                                </select>
                            </div>

                            {/* Detail Category - Conditional */}
                            {formData.category && (
                                <div className="space-y-2 animate-fadeIn">
                                    <label className="text-sm font-bold text-slate-700 block">상세분야 <span className="text-red-500">*</span></label>
                                    <select
                                        name="detailCategory"
                                        value={formData.detailCategory}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled>상세분야를 선택해주세요</option>
                                        {formData.category === 'solution' && (
                                            <>
                                                <optgroup label="네트워크 보안">
                                                    <option value="net-ionenet">i-oneNet</option>
                                                    <option value="net-ionenet-dd">i-oneNet DD</option>
                                                    <option value="net-ionenac">i-oneNAC</option>
                                                </optgroup>
                                                <optgroup label="시스템 보안">
                                                    <option value="sys-ionengs">i-oneNGS</option>
                                                </optgroup>
                                                <optgroup label="API 보안">
                                                    <option value="api-nginx">NGINX App Protect</option>
                                                    <option value="api-softfreak">SoftFreak F-APIm</option>
                                                </optgroup>
                                                <optgroup label="AI 보안">
                                                    <option value="ai-f5-guardrails">F5 AI Guardrails</option>
                                                    <option value="ai-f5-redteam">F5 AI Red Team</option>
                                                    <option value="ai-sandslab">SANDS Lab GLX</option>
                                                    <option value="ai-s2w">S2W SAIP</option>
                                                </optgroup>
                                                <optgroup label="데이터 보호">
                                                    <option value="data-mccs">Mantech MCCS</option>
                                                </optgroup>
                                                <option value="other-solution">기타 솔루션 문의</option>
                                            </>
                                        )}
                                        {formData.category === 'service' && (
                                            <>
                                                <optgroup label="보안 솔루션 구축 및 운영">
                                                    <option value="svc-net-sys">네트워크/시스템 보안</option>
                                                    <option value="svc-api">API 보안 환경 구축</option>
                                                    <option value="svc-data-ha">데이터 이중화(HA/DR)</option>
                                                </optgroup>
                                                <optgroup label="보안 컨설팅">
                                                    <option value="svc-infra">인프라 취약점 진단</option>
                                                    <option value="svc-comp">컴플라이언스 대응</option>
                                                    <option value="svc-roadmap">맞춤형 보안 로드맵</option>
                                                </optgroup>
                                                <optgroup label="AI 솔루션 도입">
                                                    <option value="svc-ai-opt">AI 도입 및 최적화</option>
                                                    <option value="svc-ai-guard">AI 런타임 보안 가드레일</option>
                                                    <option value="svc-ai-sim">AI 공격 시뮬레이션</option>
                                                </optgroup>
                                                <optgroup label="가상화 인프라 운영">
                                                    <option value="svc-vir-resource">IT 자원 가용성 극대화</option>
                                                    <option value="svc-vir-integ">고성능 인프라 통합</option>
                                                    <option value="svc-vir-managed">전문 관리 서비스</option>
                                                </optgroup>
                                                <option value="other-service">기타 사업영역 문의</option>
                                            </>
                                        )}
                                        {formData.category === 'partnership' && (
                                            <>
                                                <option value="general">일반 제휴 문의</option>
                                                <option value="technical">기술 제휴 문의</option>
                                                <option value="sales">영업 제휴 문의</option>
                                            </>
                                        )}
                                    </select>
                                </div>
                            )}

                            {/* Company Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 block">회사명 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm placeholder-slate-400"
                                    placeholder="회사명을 입력해주세요"
                                    required
                                />
                            </div>

                            {/* Contact Person */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 block">담당자 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm placeholder-slate-400"
                                    placeholder="성함을 입력해주세요"
                                    required
                                />
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 block">연락처 <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm placeholder-slate-400"
                                    placeholder="- 포함 입력"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 block">이메일 <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm placeholder-slate-400"
                                    placeholder="@ 포함 입력"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 block">문의내용</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-slate-700 text-sm h-32 resize-none placeholder-slate-400"
                                    placeholder="문의 내용을 자세하게 적어주시면 더 자세한 답변이 가능합니다."
                                ></textarea>
                            </div>

                            {/* Privacy Agreement */}
                            <div className="pt-2">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="privacy"
                                            name="privacyAgreed"
                                            type="checkbox"
                                            checked={formData.privacyAgreed}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="privacy" className="font-medium text-slate-700">개인정보 수집 및 이용 동의 (필수)</label>
                                        <button type="button" onClick={() => alert('개인정보 수집 및 이용 약관\n\n1. 수집목적: 고객 문의 접수 및 답변 제공\n2. 수집항목: 회사명, 이름, 연락처, 이메일\n3. 보유기간: 문의 처리 후 3년간 보관')} className="ml-2 text-sm text-slate-900 underline font-bold hover:text-blue-600">
                                            자세히보기
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 mt-6 text-lg tracking-wide">
                                문의하기
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
