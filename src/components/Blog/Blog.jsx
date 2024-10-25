import React from 'react';

/**
 *
 * @returns
 */

function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Discover the Hidden Gems of Turkey",
            excerpt: "Explore the lesser-known destinations that make Turkey a unique travel experience.",
            imageUrl: 'https://via.placeholder.com/300x200'
        },
        {
            id: 2,
            title: "The Best Turkish Dishes to Try",
            excerpt: "A guide to the most delicious dishes you must try when visiting Turkey.",
            imageUrl: 'https://via.placeholder.com/300x200'
        },
        {
            id: 3,
            title: "Cultural Festivals in Turkey",
            excerpt: "Experience the vibrant culture of Turkey through its festivals and traditions.",
            imageUrl: 'https://via.placeholder.com/300x200'
        },
        {
            id: 4,
            title: "Turkey's Ancient Ruins",
            excerpt: "Discover the ancient ruins that tell the story of Turkey's rich history.",
            imageUrl: 'https://via.placeholder.com/300x200'
        },
    ];

    return (

        <section className="blogs__section">
            <h2 className="blogs__title">Latest Blogs</h2>
            <div className="blogs__posts">
                {blogPosts.map(post => (
                    <div key={post.id} className="blogs__post">
                        <img src={post.imageUrl} alt={post.title} className="blogs__image" />
                        <h3 className="blogs__post-title">{post.title}</h3>
                        <p className="blogs__excerpt">{post.excerpt}</p>
                    </div>
                ))}
            </div>
            <button className="blogs__explore-button">Explore More</button>
        </section>
    );
}

export default Blog;
