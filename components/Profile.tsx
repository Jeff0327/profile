import React from 'react';
import SampleUser from "@/components/SampleUser";
import PortFolio from "@/components/PortFolio";
import Link from "next/link";
import Reviews from "@/components/Reviews";
import Banner from "@/components/Banner";
import Connect from "@/components/Connect";
import CustomSite from "@/components/CustomSite";
import Categories from "@/components/Categories";
import Information from "@/components/Information";

export default function Profile() {

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-3xl lg:max-w-full w-full bg-white shadow-lg overflow-hidden">
                <div className="h-[300px] lg:h-[600px] bg-gray-800 relative overflow-hidden">
                    <Banner/>
                    {/* 상담 섹션 - 모바일 대응 및 자연스러운 디자인 */}
                    <Link href="tel:010-3055-4972" className="absolute z-[10] right-2 sm:right-6 md:right-8 lg:right-12 bottom-2 sm:bottom-16 md:bottom-14 lg:bottom-12">
                        <div className="flex flex-col justify-center items-center rounded-lg border backdrop-blur-sm bg-black/30
                                      px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 gap-2 md:gap-3 lg:gap-4
                                      transition-all duration-300 hover:bg-black/40">
                            <h1 className="text-xs sm:text-base md:text-lg lg:text-2xl text-white font-medium">
                                지금바로 상담받아보세요
                            </h1>
                            <button
                                className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 py-1 md:py-1.5 bg-white hover:bg-gray-100
                                         transition-colors duration-200 shadow-md">
                                <h1 className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium">연락하기</h1>
                            </button>
                        </div>
                    </Link>
                    <Connect/>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900">
                        <h1 className="text-xl md:text-3xl font-bold text-white">김지섭</h1>
                        <p className="text-sm md:text-xl text-gray-200">Web/App Developer</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="my-12 lg:my-16">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">가게 성장을 위한 맞춤 웹사이트</h2>
                        <CustomSite/>
                    </div>

                    <div className="my-12 lg:my-16">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">맞춤 제작 가능</h2>
                        <Categories/>
                    </div>
                    <div className="my-12 lg:my-16">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
                        <div className="text-sm text-gray-700 mb-6">
                            온라인 매장은 처음이라 잘 모르시나요? 통신판매업 등록부터 온라인 결제, 관리자 페이지 제작, SEO 최적화까지 원스톱으로 도와드립니다.
                        </div>
                        <Reviews/>
                    </div>
                    <div className={'my-12 lg:my-16'}><PortFolio/></div>
                    <div className={'my-12 lg:my-16'}><SampleUser/></div>
                    <div className="border-t pt-6">
                        <Information/>
                    </div>
                </div>
            </div>
        </div>
    );
};
