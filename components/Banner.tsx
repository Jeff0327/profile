'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {images} from "@/store/BannerImages";

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{transform: `translateX(-${currentIndex * 100}%)`}}
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
    );
}

export default Banner;