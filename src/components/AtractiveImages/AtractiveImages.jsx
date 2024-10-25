import React from 'react';

/**
 *
 * @returns
 */

function AtractiveImages() {

    const images = [
        { id: 1, url: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
        { id: 2, url: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
        { id: 3, url: 'https://via.placeholder.com/300x200', alt: 'Image 3' },
        { id: 4, url: 'https://via.placeholder.com/300x200', alt: 'Image 4' },
        { id: 5, url: 'https://via.placeholder.com/300x200', alt: 'Image 5' },
    ];

    return (

        <section className="highlight__images-grid">
            {images.map((image) => (
                <div key={image.id} className="highlight__image-item">
                    <img src={image.url} alt={image.alt} className="highlight__grid-image" />
                </div>
            ))}
        </section>
    );
}

export default AtractiveImages;
