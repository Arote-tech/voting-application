'use client';

import { useState, useEffect, useRef } from 'react';
import '@/styles/globals.css';

export default function ImageSlider({ images = [], interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

        const imagesList = images.length ? images : [
            "https://media.gettyimages.com/id/1246204588/photo/an-official-of-the-independent-national-electoral-commission-sort-out-permanent-voters-cards.jpg?s=612x612&w=0&k=20&c=GxhEun9xxUeH-qUs_jMdtsN3Y781tzjOfu6yoySsvk4=",
            "https://media.gettyimages.com/id/96468470/photo/a-woman-casts-her-vote-in-a-ballot-box-n-empty-ballot-box-at-agulu-in-anambra-state-on-february.jpg?s=612x612&w=0&k=20&c=iryzZ7j36g8UGzalp8-gemge7RHQKUxpbhMlfzpoCpQ=",
            "https://media.gettyimages.com/id/1248497318/photo/voters-check-a-register-at-a-polling-station-during-local-elections-in-lagos-on-march-18-2023.jpg?s=612x612&w=0&k=20&c=JMRPcyd-woCjj1Gpyd3xe6lOfv35RXCiw8yWDSSwP2c=",
            "https://media.gettyimages.com/id/1247473647/photo/independent-national-electoral-commission-officials-go-through-ballot-papers-during-the.jpg?s=612x612&w=0&k=20&c=FM8omvDQgOLG6REsHDV0enzuRIevTx7KLsMi7PcGkg0=",
            "https://media.gettyimages.com/id/1247507047/photo/a-voter-cast-her-ballots-at-a-polling-unit-during-the-nigeria-presidential-election-at-a.jpg?s=612x612&w=0&k=20&c=21LC6u4-7W1C7Vh6ZRLz2_KIbHhD33Gt7SEEKyVEBLA="
        ];

    useEffect(() => {
        const length = imagesList.length;
        if (interval > 0 && length > 1) {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % length);
            }, interval);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, imagesList.length, interval]);

    function goTo(i) {
        clearTimeout(timeoutRef.current);
        setCurrentIndex(i);
    }

    function goToPrev() {
        const length = imagesList.length;
        goTo((currentIndex - 1 + length) % length);
    }

    function goToNext() {
        const length = imagesList.length;
        goTo((currentIndex + 1) % length);
    }

    if (!imagesList || imagesList.length === 0) return null;

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
                    <button className="slider-prev" onClick={goToPrev} aria-label="Previous">
                        <i className="fa fa-chevron-left" aria-hidden="true" />
                    </button>
                    <button className="slider-next" onClick={goToNext} aria-label="Next">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                    </button>
                    <div className="slider-dots">
                        {imagesList.map((_, i) => (
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
