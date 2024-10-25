import React, { useEffect, useRef, useState } from 'react';

import Headline from "../Headline/";
import AtractiveImages from '../AtractiveImages/';
import Tour from '../Tour/';
import History from '../History/';
import Blog from '../Blog/';

/**
 *
 * @returns
 */

function Highlight() {
    const wrapperRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (wrapperRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = wrapperRef.current;
                const totalScroll = scrollHeight - clientHeight;
                const scrollPosition = scrollTop / totalScroll;
                setScrollProgress(scrollPosition * 100);
            }
        };

        const wrapperElement = wrapperRef.current;
        if (wrapperElement) {
            wrapperElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (wrapperElement) {
                wrapperElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
 
    return (
        <div className="highlight__section">
            <div className="highlight__wrapper" ref={wrapperRef}>
               
                <Headline />
                <AtractiveImages />
                <Tour />
                <History />
                <Blog />
            
            </div>

            <div className="progress__bar">
                <div className="progress__fill" style={{ height: `${scrollProgress}%` }}></div>
            </div>
        </div>
    );
}

export default Highlight;
