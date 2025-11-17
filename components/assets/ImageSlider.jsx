'use client';

import { useState, useEffect, useRef } from 'react';
import '@/styles/globals.css';

export default function ImageSlider({ images = [], interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (interval > 0 && images.length > 1) {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, interval);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, images.length, interval]);

    function goTo(i) {
        clearTimeout(timeoutRef.current);
        setCurrentIndex(i);
    }

    function goToPrev() {
        goTo((currentIndex - 1 + images.length) % images.length);
    }

    function goToNext() {
        goTo((currentIndex + 1) % images.length);
    }

    if (!images || images.length === 0) return null;

    return (
        <div className="slider">
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, i) => (
                    <div className="slider-slide" key={i}>
                        <img src={src} alt={`slide ${i + 1}`} loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button className="slider-prev" onClick={goToPrev} aria-label="Previous">
                        <i className="fa fa-chevron-left" aria-hidden="true" />
                    </button>
                    <button className="slider-next" onClick={goToNext} aria-label="Next">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                    </button>
                    <div className="slider-dots">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
