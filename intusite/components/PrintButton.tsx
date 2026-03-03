'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <button
            onClick={handlePrint}
            aria-label="Print Text Only"
            className="no-print fixed bottom-8 right-8 z-50 p-4 bg-slate-900 text-white rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group print:hidden"
            title="텍스트 전용 인쇄하기 (비용 절약)"
        >
            <Printer className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap">
                텍스트 인쇄
            </span>
        </button>
    );
}
