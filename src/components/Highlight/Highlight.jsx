import React from 'react';

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
 
    return (
        <div className="highlight__section">
            <div className="highlight__wrapper">
               
                <Headline />
                <AtractiveImages />
                <Tour />
                <History />
                <Blog />
            
            </div>

            <div className="progress__bar">
                <div className="progress__fill"></div>
            </div>
        </div>
    );
}

export default Highlight;
