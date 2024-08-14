import { useParams, Link } from "react-router-dom";
import "./Blogpost.scss";

const blogPosts = {
  "featured-post": {
    title: "Software Development Internship at Atria Community",
    content: [
      "I have been working here since May 2024. My main role is executing tasks in the backend monolith of the application.",
      "This opportunity was found through one of my Linkedin connection where he brought up that he was a team lead for Atria and offered me to join! I happily accepted and was onboarded to the team.",
      "A choice was given to me whether I wanted to get straight into coding or start with the planning phase. My thought process was, well since i've already been coding quite a bit from side projects, it'd be nice to learn something new right? So the decision was fairly easy for me.",
      "In software development, it wasn't just coding. I realized there was much more than that. 'if you fail to plan, you plan to fail'. I read this quote while going through my onboarding documentation and wow that's such a great quote. With that being said, I gained valuable experience in creating ERDs and Technical Design Documents, which helped me establish a clear and structured path to bring the application's vision.",
      "Shortly after getting approval of my ERD and TDD, I was able to pick up JIRA tickets and start coding! I developed and maintained features using Python/Django."
    ],
    date: "August 12, 2024",
  },
  "post-1": {
    title: "My first internship experience",
    content: [
      "I came across this program called ICT Ignite which is a collaboration with Riipen and Lighthouse Labs. Learners are paid a stipend upon completion of the project provided.",
      "This was a very new experience but a good one at that. Many other companies also collaborate and learners would have to choose which specific company they'd want to work with. I chose a company called Sniff & Bark, which was an Shopfiy e-commerce platform for dog apparel.",
      "There was a lot i gained from this internship. My daily tasks included building a shopfiy application within their store to help organize their order data by categorizing products based on SKU patterns and optimizing website speed.",
      "One of the more significant task assigned to me was helping implement a cookie bot to their website and dealing with GDPR regulations on top of that. If you don't know what GDPR is, it's General Data Protection Regulation. To put it short, as a Canadian company wanting to sell goods to European countries, cookies must not fire before consent by users.",
      "Overall, this experience was incredible, especially because it wasn't just another side project, it was a real world opportunity where I got to apply my skills and, as a bonus, I got paid in the end, which was definitely a nice touch."
    ],
    date: "August 12, 2024",
  },
  "post-2": {
    title: "Am I using my time wisely?",
    content: [
      "As an entry-level software developer, it's a struggle to find a job especially in this current tech market, but it's slowly getting better. With that being said, I'm aware I need to make good use of my time.",
      "As I'm currently trying to break through into the tech world, i'm treating it as a full time job from monday-friday 9-5pm. Even at night time when i have free time, i'd try my best to fit in some time to work on some side projects, networking on Linkedin, and applying to jobs.",
      "I always wonder though, am i doing enough? am i using my time efficiently? Could i be doing more? I have so much free time that these thoughts run through my mind constantly. Even on the weekends, typically a time to relax, i feel like i need to stay in and just ... do more."
    ],
    date: "August 12, 2024",
  },
  "post-3": {
    title: "I can create games with Python?",
    content: [
      "I wanted to evolve my coding skills and thought... I love games so why not kill 2 birds with 1 stone and practice my coding while building a simple game? Yeah yeah I know, most games are built with Unity or Unreal engine and using C# or C++ but I just wanted to build a simple game to start off with.",
      "With the research I've done, I found some simple games can be created with Python. Yeah Python, a backend language mainly used for developing websites and software, task automation, data analysis, data visualizations and such. Pygame is a framework of python where SIMPLE games can be created, where the screen mostly stays static. You know, like platform games, maze games, pong, tetris, etc. So relatively, I found it was fairly easy to use, I just followed its documentation and things started rolling. I created a basic game type racer game, dinosaur theme 😂 I called it, DinoType.",
      "Overall, this was an incredibly fun project to build. Obviously it's not perfect and there's much more improvmenet that needs to be implemented... But that's the beauty of it! Testing the game and seeing it actually working was so satisfying for me. Like, I built a game and I never imagined I would be capable of it. I've always just played the games but never built one.",
      "Anyways, I'm going to be improving it whenever I get the time and hopefully when I'm happy enough with it, maybe I'll deploy it 👀"
    ],
    date: "August 12, 2024",
  },
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <div className="blog-post">Post not found</div>;
  }

  return (
    <div className="blog-post">
    <nav className="blog-post__nav">
        <Link to="/blog">Back to Blog</Link>
    </nav>
      <h1>{post.title}</h1>
      <p className="blog-post__date">{post.date}</p>
      <div className="blog-post__content">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
