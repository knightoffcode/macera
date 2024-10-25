import React from 'react';

/**
 *
 * @returns
 */

function History() {

    const historicalEvents = [
        {
            id: 1,
            year: "3000 BC",
            event: "Establishment of the Hittite Empire",
            description: "The Hittites were one of the first major civilizations in Anatolia, known for their advanced society and military power.",
            imageUrl: 'https://via.placeholder.com/150x100'
        },
        {
            id: 2,
            year: "330 BC",
            event: "Foundation of Byzantium",
            description: "Byzantium was founded by Greek colonists and would later become known as Constantinople.",
            imageUrl: 'https://via.placeholder.com/150x100'
        },
        {
            id: 3,
            year: "1453",
            event: "Fall of Constantinople",
            description: "The city fell to the Ottoman Empire, marking the end of the Byzantine Empire.",
            imageUrl: 'https://via.placeholder.com/150x100'
        },
        {
            id: 4,
            year: "1923",
            event: "Establishment of the Republic of Turkey",
            description: "Following the collapse of the Ottoman Empire, Turkey was declared a republic under the leadership of Mustafa Kemal Atatürk.",
            imageUrl: 'https://via.placeholder.com/150x100'
        },
    ];

    return (

        <section className="history__section">
            <h2 className="history__title">The Rich History of Turkey</h2>
            <p className="history__description">
                Turkey has a long and complex history, shaped by its strategic location at the crossroads of Europe and Asia.
                From ancient civilizations to modern times, the country's past is a tapestry of cultures and events.
            </p>
            <div className="history__timeline">
                {historicalEvents.map((event, index) => (
                    <div key={event.id} className="history__event">
                        <img src={event.imageUrl} alt={event.event} className="history__image" />
                        <div className="history__content">
                            <h3 className="history__year">{event.year}</h3>
                            <h4 className="history__event-title">{event.event}</h4>
                            <p className="history__event-description">{event.description}</p>
                        </div>
                        {index < historicalEvents.length - 1 && (
                            <svg className="history__line" viewBox="0 0 100 100">
                                <path d="M 0 50 Q 50 0 100 50" stroke="red" fill="transparent" strokeWidth="2" />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default History;
