'use client'
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

function SampleUser() {
    // HTMLDivElement 타입을 명시적으로 지정
    const containerRef = useRef<HTMLDivElement | null>(null);

    // 가상의 사용자 후기 데이터
    const reviews = [
        { id: 1, name: '김*준', rating: 5, text: '홈페이지 제작 후 온라인 주문이 30% 증가했어요! 정말 만족스럽습니다.' },
        { id: 2, name: '박*우', rating: 5, text: '반응형으로 만들어주셔서 어디서든 잘 보이네요. 관리도 쉽고 좋아요.' },
        { id: 3, name: '이*진', rating: 4, text: '세련된 디자인으로 만들어주셔서 고객들의 반응이 아주 좋습니다.' },
        { id: 4, name: '최*현', rating: 5, text: '비전문가인 저도 쉽게 관리할 수 있어서 정말 편리해요.' },
        { id: 5, name: '정*희', rating: 5, text: '온라인 매장 확장 덕분에 매출이 증가했습니다. 감사합니다!' },
        { id: 6, name: '강*석', rating: 4, text: '빠른 작업과 친절한 설명 감사드립니다. 사용하기 편리해요.' },
        { id: 7, name: '윤*진', rating: 5, text: '맞춤형 기능들이 정말 유용해요. 고객들의 피드백도 좋습니다.' },
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationId: number;
        let startTime: number | null = null;
        const duration = 50000; // 50초 동안 한 바퀴

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = (elapsed % duration) / duration;

            // 타입 안전하게 scrollWidth와 offsetWidth에 접근
            if (container) {
                const totalWidth = container.scrollWidth;
                const visibleWidth = container.offsetWidth;

                // 전체 너비에서 보이는 너비를 뺀 값만큼 움직일 수 있음
                const maxScroll = totalWidth - visibleWidth;
                container.scrollLeft = progress * maxScroll;
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">고객 후기</h2>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-hidden space-x-4 py-2"
            >
                {/* 무한 스크롤 효과를 위해 reviews를 두 번 렌더링 */}
                {[...reviews, ...reviews].map((review, index) => (
                    <Card key={`${review.id}-${index}`} className="min-w-[280px] max-w-[280px] flex-shrink-0 shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center mb-3">
                                <Avatar className="h-10 w-10 mr-3 bg-gray-200">
                                    <AvatarFallback className="text-gray-700">{review.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">{review.name}</div>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">{review.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SampleUser;