'use client'
import React from 'react';
import {CheckCircle2, Globe, Store} from "lucide-react";
import {FaArrowCircleRight} from "react-icons/fa";

function CustomSite() {
    const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_URL
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <button
                onClick={() => window.open(kakaoUrl, '_blank')}
                className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors text-left"
            >
                <Store className="w-8 h-8 text-blue-600 mb-2"/>
                <h3 className="font-bold mb-2 text-gray-900">오프라인 매장</h3>
                <div className={'flex flex-row items-center text-gray-800 text-center gap-1'}>
                    오프라인 매장 <FaArrowCircleRight className={'relative w-4 h-4 lg:w-6 lg:h-6'}/> 온라인 매장 확장
                </div>
            </button>
            <button
                onClick={() => window.open(kakaoUrl, '_blank')}
                className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors text-left"
            >
                <Globe className="w-8 h-8 text-green-600 mb-2"/>
                <h3 className="font-bold mb-2 text-gray-900">반응형 디자인</h3>
                <p className="text-gray-800">모든 환경에서 반응형 디자인으로 모바일, PC에서도 최적화</p>
            </button>
            <button
                onClick={() => window.open(kakaoUrl, '_blank')}
                className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors text-left"
            >
                <CheckCircle2 className="w-8 h-8 text-purple-600 mb-2"/>
                <h3 className="font-bold mb-2 text-gray-900">간편 관리</h3>
                <p className="text-gray-800">비전문가도 쉽게 관리할 수 있는 시스템</p>
            </button>
        </div>
    );
}

export default CustomSite;