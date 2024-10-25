import React from 'react';

/**
 *
 * @returns
 */

function Tour() {

    const tours = [
        {
            id: 1,
            title: "Cappadocia Hot Air Balloon Ride",
            description: "Experience breathtaking views of Cappadocia's unique landscape from a hot air balloon.",
            imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
            id: 2,
            title: "Istanbul City Tour",
            description: "Explore the rich history of Istanbul, including visits to Hagia Sophia and the Grand Bazaar.",
            imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
            id: 3,
            title: "Pamukkale Thermal Springs",
            description: "Relax in the natural thermal springs and enjoy the stunning white travertine terraces.",
            imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
            id: 4,
            title: "Ephesus Ancient Ruins",
            description: "Discover the ancient city of Ephesus and its remarkable archaeological sites.",
            imageUrl: 'https://via.placeholder.com/300x200',
        },
    ];

    return (

        <section className="tour__section">
            <h2 className="tour__title">Explore Our Tours</h2>
            <p className="tour__description">
                Discover the stunning beauty and rich history of Turkey through our carefully curated tours.
                Each tour offers a unique experience that captures the essence of this beautiful country.
            </p>
            <div className="tour__cards">
                {tours.map(tour => (
                    <div key={tour.id} className="tour__card">
                        <img src={tour.imageUrl} alt={tour.title} className="tour__image" />
                        <h3 className="tour__card-title">{tour.title}</h3>
                        <p className="tour__card-description">{tour.description}</p>
                        <button className="tour__button">Learn More</button>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Tour;
