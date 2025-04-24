'use client'
import React from 'react';
import Link from "next/link";
import {Mail, Phone} from "lucide-react";
import {RiKakaoTalkFill} from "react-icons/ri";

function Information() {
    const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_URL!
    return (
        <div className="flex flex-wrap gap-6">
            <Link href="tel:010-3055-4972" className="flex items-center text-gray-700 hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2"/>
                010-3055-4972
            </Link>
            <Link href="mailto:cocacola158500@gmail.com"
                  className="flex items-center text-gray-700 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2"/>
                cocacola158500@gmail.com
            </Link>
            <Link
                href={kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-yellow-500"
            >
                <RiKakaoTalkFill className="w-5 h-5 mr-2"/>
                카카오톡 문의하기
            </Link>
        </div>
    );
}

export default Information;