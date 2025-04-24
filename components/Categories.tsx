'use client'
import React from 'react';

function Categories() {
    const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_URL
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['온라인 명함', '온라인 쇼핑몰', '온라인매장 확장', '회사 소개'].map((service) => (
                <button
                    key={service}
                    onClick={() => window.open(kakaoUrl, '_blank')}
                    className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-900 font-medium"
                >
                    {service}
                </button>
            ))}
        </div>
    );
}

export default Categories;