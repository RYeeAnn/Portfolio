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
                        <h2>[FEATURED POST] Current Internship, Atria Community</h2>
                        <p className="blog__date">August 12, 2024</p>
                        <p>My experiences and challenges while interning at Atria Community.</p>
                        <a href="/blog/featured-post" className="blog__read-more">Read more</a>
                    </div>
                </div>
            </section>
            <section className="blog__posts">
                {/* New posts here */}
                <div className="blog__post">
                    <h3>Atria Community MVP</h3>
                    <p className="blog__date">June 3, 2025</p>
                    <p>Check out my recent work i've done for Atria!</p>
                    <a href="/blog/post-7" className="blog__read-more">Read more</a>
                </div>
                <div className="blog__post">
                    <h3>New part-time job</h3>
                    <p className="blog__date">October 16, 2024</p>
                    <p>Found my self a part-time at Code Ninjas as a Code Instructor 👀</p>
                    <a href="/blog/post-6" className="blog__read-more">Read more</a>
                </div>
                <div className="blog__post">
                    <h3>Growing team and reviewing PRs at Atria</h3>
                    <p className="blog__date">August 21, 2024</p>
                    <p>As our team continues to grow, managing the project is becoming increasingly complex, especially with the rise in merge conflicts.</p>
                    <a href="/blog/post-5" className="blog__read-more">Read more</a>
                </div>
                <div className="blog__post">
                    <h3>How tough is it to find an entry-level software development opportunity?</h3>
                    <p className="blog__date">August 15, 2024</p>
                    <p>Most of the job postings out there are for Intermediate and Senior developers.</p>
                    <a href="/blog/post-4" className="blog__read-more">Read more</a>
                </div>
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
