'use client'
import React, { useRef, useState, useEffect, ReactNode, memo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ExternalLink, Code, ShoppingBag, Globe, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

// 포트폴리오 아이템 인터페이스 정의
interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    image: string;
    iframe?: string;
    link: string;
    category: string;
    icon: ReactNode;
    useIframe?: boolean;
}

// 메모이제이션된 포트폴리오 카드 컴포넌트
const PortfolioCard = memo(({ item, onClick }: { item: PortfolioItem; onClick: (url: string) => void }) => {
    const [showIframe, setShowIframe] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    // 카드가 화면에 보일 때만 iframe 로드
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Intersection Observer 사용하여 뷰포트에 카드가 있는지 확인
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setShowIframe(true);
                        observer.disconnect(); // 한 번 로드된 후 observer 해제
                    }
                });
            },
            { threshold: 0.1 } // 10% 이상 보일 때 로드
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // 카드 전체를 클릭 가능하게 하기 위해 preventIframeInteraction 함수 제거

    return (
        <Card
            ref={cardRef}
            className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300 h-full"
            onClick={() => onClick(item.link)}
        >
            <div className="relative h-48 w-full bg-gray-200">
                {item.iframe && showIframe ? (
                    <div className="w-full h-full overflow-hidden relative">
                        <iframe
                            ref={iframeRef}
                            src={item.iframe}
                            className="w-full h-full border-0 pointer-events-none" // 포인터 이벤트를 비활성화
                            title={`${item.title} 미리보기`}
                            loading="lazy"
                            sandbox=""
                            scrolling="no"
                            style={{
                                transform: 'scale(0.6)',
                                transformOrigin: '0 0',
                                width: '166.67%', /* 100% / 0.6 */
                                height: '166.67%' /* 100% / 0.6 */
                            }}
                        ></iframe>
                        {/* 투명 오버레이를 제거하고, 대신 클릭 이벤트를 전파하도록 수정 */}
                        <div
                            className="absolute inset-0 z-10 cursor-pointer"
                            aria-hidden="true"
                        ></div>
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            {item.icon}
                        </div>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                    </>
                )}
            </div>
            <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
            </CardContent>
        </Card>
    );
});

// React.memo에 표시 이름 지정 (개발 도구에서 식별을 위해)
PortfolioCard.displayName = 'PortfolioCard';

function PortFolio() {
    // 포트폴리오 데이터 - 컴포넌트 외부로 이동하거나 useMemo 사용 가능
    const portfolioItems: PortfolioItem[] = [
        {
            id: 1,
            title: '기업 홈페이지',
            description: '건설기계 수리/부품판매 회사소개페이지',
            image: '/portfolio/ds.png',
            iframe: 'https://www.deasung.kr/business/repair',
            link: 'https://deasung.kr/home',
            category: '웹사이트',
            icon: <ShoppingBag className="w-6 h-6 text-blue-600" />
        },
        {
            id: 2,
            title: '기업 홈페이지',
            description: '심플하면서도 전문적인 의류 플렛폼 소개 웹사이트',
            image: '/portfolio/sample_1.jpg',
            iframe: 'https://dreso.store',
            link: 'https://dreso.store',
            category: '웹사이트',
            icon: <Globe className="w-6 h-6 text-green-600" />
        },
        {
            id: 3,
            title: '모자 쇼핑몰',
            description: '모자 독립형 쇼핑몰',
            image: '/portfolio/sample_1.jpg',
            iframe: 'https://snapcap-green.vercel.app/main',
            link: 'https://snapcap-green.vercel.app/main',
            category: '쇼핑몰',
            icon: <FileText className="w-6 h-6 text-purple-600" />
        },
        {
            id: 4,
            title: 'QR 코드 생성기',
            description: '무료 QR코드 생성 웹사이트',
            image: '/portfolio/sample_1.jpg',
            iframe: 'https://www.qrmake.kr',
            link: 'https://www.qrmake.kr',
            category: '웹사이트',
            icon: <Code className="w-6 h-6 text-red-600" />
        },
        {
            id: 5,
            title: '숙소 예약 플렛폼',
            description: '숙소 예약 플렛폼 포트폴리오',
            image: '/portfolio/sample_1.jpg',
            iframe: 'https://www.traveljeff.site/main',
            link: 'https://www.traveljeff.site/main',
            category: '웹사이트',
            icon: <Globe className="w-6 h-6 text-indigo-600" />
        }
    ];

    // 모바일 캐러셀 관련 상태 및 로직
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // 다음 슬라이드로 이동 - useCallback으로 메모이제이션
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
        );
    }, [portfolioItems.length]);

    // 이전 슬라이드로 이동 - useCallback으로 메모이제이션
    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
        );
    }, [portfolioItems.length]);

    // 반응형 체크 - 디바운스 추가
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // 최초 실행
        checkIfMobile();

        // 디바운스 함수
        let timeoutId: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkIfMobile, 200);
        };

        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // 캐러셀 자동 재생 최적화 (선택적)
    useEffect(() => {
        if (!isMobile) return; // 모바일 모드에서만 동작

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile, nextSlide]); // nextSlide 의존성 추가

    // 카드 클릭 시 링크로 이동 함수 - useCallback으로 메모이제이션
    const navigateToProject = useCallback((url: string) => {
        window.open(url, '_blank');
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">포트폴리오</h2>
            </div>

            {/* 모바일용 캐러셀 */}
            {isMobile && (
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            ref={carouselRef}
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {portfolioItems.map((item) => (
                                <div key={item.id} className="w-full flex-shrink-0 px-1">
                                    <PortfolioCard item={item} onClick={navigateToProject} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 네비게이션 버튼 */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-20"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevSlide();
                        }}
                        aria-label="이전 포트폴리오"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-20"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                        }}
                        aria-label="다음 포트폴리오"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* 인디케이터 */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {portfolioItems.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    currentIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                                aria-label={`포트폴리오 ${index + 1}번으로 이동`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* 웹용 그리드 */}
            {!isMobile && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {portfolioItems.map((item) => (
                        <div key={item.id}>
                            <PortfolioCard item={item} onClick={navigateToProject} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PortFolio;