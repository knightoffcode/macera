import React from 'react';

/**
 *
 * @returns
 */

function Headline() {

    const banner = {
        url: 'https://placeholder.co/1700x600',
        title: "How Turkey is Different",
        description: "We have over 100+ articles about all the places in Turkey that you can visit on your next adventure."
    };

    return (
        <div className="highlight__content">
            <h1 className="highlight__title">{banner.title}</h1>
            <p className="highlight__description">{banner.description}</p>
            <button className="highlight__button">Explore</button>
        </div>

    );
}

export default Headline;
