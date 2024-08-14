import './Blog.scss';
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div className="blog">
            <div className="blog_nav">
                <Link to="/">Back to Portfolio</Link>
            </div>
            <header className="blog__header">
                <h1>Welcome to My Blog</h1>
                <p className="blog__subtitle">Software Development Journey</p>
            </header>
            <section className="blog__featured">
                <div className="blog__featured-post">
                    <div className="blog__featured-content">
                        <h2>[Featured Post] My Current Internship, Atria Community</h2>
                        <p className="blog__date">August 12, 2024</p>
                        <p>My experiences and challenges while interning at Atria Community.</p>
                        <a href="/blog/featured-post" className="blog__read-more">Read more</a>
                    </div>
                </div>
            </section>
            <section className="blog__posts">
                {/* New posts here */}
                <div className="blog__post">
                    <h3>I can create games with Python?</h3>
                    <p className="blog__date">August 12, 2024</p>
                    <p>Discover my experiences with Pygame.</p>
                    <a href="/blog/post-3" className="blog__read-more">Read more</a>
                </div>
                <div className="blog__post">
                    <h3>Am I using my time wisely?</h3>
                    <p className="blog__date">August 12, 2024</p>
                    <p>Currently unemployed looking for opportunities but am I using my time wisely? Is there more I could be doing?</p>
                    <a href="/blog/post-2" className="blog__read-more">Read more</a>
                </div>
                <div className="blog__post">
                    <h3>My first internship experience</h3>
                    <p className="blog__date">August 12, 2024</p>
                    <p>Post bootcamp, I received an opportunity to gain some experience.</p>
                    <a href="/blog/post-1" className="blog__read-more">Read more</a>
                </div>
            </section>
        </div>
    );
}

export default Blog;
