'use client'
import React, {useState} from 'react';
import {images} from "@/store/BannerImages";

function Connect() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    return (
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
    );
}

export default Connect;