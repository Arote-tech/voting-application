"use client";

import { useState, useEffect, useRef } from 'react';
import '@/styles/globals.css';

export default function ImageSlider({ images = [], interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const imagesList = Array.isArray(images) ? images : [];

    useEffect(() => {
        const length = imagesList.length;
        if (interval > 0 && length > 1) {
            timeoutRef.current = setTimeout(() => setCurrentIndex((p) => (p + 1) % length), interval);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, imagesList.length, interval]);

    if (!imagesList.length) return null;

    return (
        <div className="slider">
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imagesList.map((src, i) => (
                    <div className="slider-slide" key={i}>
                        <img src={src} alt={`slide ${i + 1}`} loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
            {imagesList.length > 1 && (
                <>
                    <button className="slider-prev" onClick={() => setCurrentIndex((c) => (c - 1 + imagesList.length) % imagesList.length)} aria-label="Previous">‹</button>
                    <button className="slider-next" onClick={() => setCurrentIndex((c) => (c + 1) % imagesList.length)} aria-label="Next">›</button>
                    <div className="slider-dots">
                        {imagesList.map((_, i) => (
                            <button key={i} className={`slider-dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
