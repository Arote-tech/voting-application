"use client";

import { useState, useEffect, useRef } from 'react';
import '@/styles/globals.css';

export default function ImageSlider({ images = [], interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const imagesList = Array.isArray(images) ? images : [];
    const images = [
    "https://media.gettyimages.com/id/1248515031/photo/officials-of-the-independent-national-electoral-commission-count-votes-at-a-polling-station.jpg?s=612x612&w=0&k=20&c=Brwj5GEeP7gaIo63RuDVmpZ1Sxe4bMGR-_xUJGEfy98=",
    "https://media.gettyimages.com/id/2224208224/photo/a-woman-votes-as-lagos-state-conducts-an-election-for-its-20-local-government-areas-and-37.jpg?s=612x612&w=0&k=20&c=iBikVSqSvP4uL9wewiVcr5TTZYsQE0G8UUrTxW37sjQ=",
    "https://media.gettyimages.com/id/1248497501/photo/a-voter-casts-her-ballot-at-a-polling-station-during-local-elections-in-lagos-on-march-18.jpg?s=612x612&w=0&k=20&c=3MwCjzgfAWOfbbLcdcOF8l6AA_gWrtNYE92xgaeDc2A=",
    "https://media.gettyimages.com/id/1246204588/photo/an-official-of-the-independent-national-electoral-commission-sort-out-permanent-voters-cards.jpg?s=612x612&w=0&k=20&c=GxhEun9xxUeH-qUs_jMdtsN3Y781tzjOfu6yoySsvk4=",
  ];

    useEffect(() => {
        const length = imagesList.length;
        if (interval > 0 && length > 1) {
            timeoutRef.current = setTimeout(() => 
                setCurrentIndex((p) => (p + 1) % length), interval);
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
                    <button className="slider-prev" onClick={() => setCurrentIndex((c) => 
                        (c - 1 + imagesList.length) % imagesList.length)} 
                        aria-label="Previous">
                            ‹
                    </button>

                    <button className="slider-next" onClick={() => setCurrentIndex((c) => 
                        (c + 1) % imagesList.length)} 
                        aria-label="Next">
                            ›
                    </button>

                    <div className="slider-dots">
                        {imagesList.map((_, i) => (
                            <button key={i} className={`slider-dot ${i === currentIndex ? 'active' : ''}`} 
                            onClick={() => setCurrentIndex(i)} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
