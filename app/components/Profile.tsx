'use client'
import React, { useState, useEffect } from 'react';
import { Globe, Store, Phone, Mail, CheckCircle2 } from 'lucide-react';
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import SampleUser from "@/app/components/SampleUser";
import PortFolio from "@/app/components/PortFolio";
const Profile = () => {
    const images = [
        "/mainImg_1.jpg",
        "/mainImg_2.jpg",
        "/mainImg_3.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const kakaoUrl = "https://open.kakao.com/o/sByPBJgh"

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const goToSlide = (index:number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-3xl lg:max-w-full w-full bg-white shadow-lg overflow-hidden">
                <div className="h-[300px] lg:h-[600px] bg-gray-800 relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                width={1200}
                                height={1200}
                                alt={`포트폴리오 ${index + 1}`}
                                className="w-full h-full object-cover opacity-80 flex-shrink-0"
                                priority
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    currentIndex === index ? 'bg-white scale-125' : 'bg-white opacity-50'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900">
                        <h1 className="text-xl md:text-3xl font-bold text-white">김지섭</h1>
                        <p className="text-sm md:text-xl text-gray-200">Web/App Developer</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="my-12 lg:my-16">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">가게 성장을 위한 맞춤 웹사이트</h2>
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
                    </div>

                    <div className="my-12 lg:my-16">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">맞춤 제작 가능</h2>
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
                    </div>
                    <div className={'my-12 lg:my-16'}><PortFolio/></div>
                    <div className={'my-12 lg:my-16'}><SampleUser/></div>
                    <div className="border-t pt-6">
                        <div className="flex flex-wrap gap-6">
                            <a href="tel:010-3055-4972" className="flex items-center text-gray-700 hover:text-blue-600">
                                <Phone className="w-5 h-5 mr-2"/>
                                010-3055-4972
                            </a>
                            <a href="mailto:cocacola1585@gmail.com"
                               className="flex items-center text-gray-700 hover:text-blue-600">
                                <Mail className="w-5 h-5 mr-2"/>
                                cocacola1585@gmail.com
                            </a>
                            <a
                                href={kakaoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 hover:text-yellow-500"
                            >
                                <RiKakaoTalkFill className="w-5 h-5 mr-2"/>
                                카카오톡 문의하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;