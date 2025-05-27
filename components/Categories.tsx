'use client'
import React from 'react';

function Categories() {
    const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_URL
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['온라인 명함', '독립형 쇼핑몰', '기업 홈페이지', '아이디어 현실화'].map((service) => (
                <button
                    key={service}
                    onClick={() => window.open(kakaoUrl, '_blank')}
                    className="font-jalnan bg-gradient-to-r from-blue-300 to-purple-300 text-black/70 p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-900 font-medium"
                >
                    {service}
                </button>
            ))}
        </div>
    );
}

export default Categories;