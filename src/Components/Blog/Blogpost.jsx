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
      "Shortly after getting approval of my ERD and TDD, I was able to pick up JIRA tickets and start coding! I developed and maintained features using Python/Django, focusing on creating and optimizing endpoints, developing DAO methods, implementing service layers, etc. My tasks include writing unit tests to ensure code quality, handling database migrations, and troubleshooting issues in the backend. Additionally, I collaborated with the team to refine existing features and integrate new ones, all while adhering to best practices and project timelines.",
      "The learning never stops :)"
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
  "post-4": {
    title: "How tough is it to find an entry-level software development opportunity?",
    content: [
        "From my experience, it is tough finding an interview opportunity for entry-level positions, considering how bad the tech market is currently. I do think it's slowly ramping up though.",
        "In the beginning I thought it wasn't going to be that much of a problem finding interviews but junior positions are overly saturated which makes it even difficult. I thought applying to a bunch of positions would be enough but NOPE.",
        "I knew simply just applying for jobs wasn't enough and I figured I needed to do more. From my experience, networking is key. I've connected and met so many people that have been so helpful in my journey that made me stay motivated. Without those people, who knows, I could have given up by now. I received so much good advice and it keeps me going. They've also been very helpful in terms of updating me with new job postings, and even referring me to company's they're connected to. It gives me a better chance in landing an interview and I'm so appreciative of that.",
        "From the time I started applying to jobs to writing this post, I've grown a lot. What I mean by that is, with all the advice I received, I'm incredibly satisfied with my resume, linkedin, portfolio, how I spend my time day to day, etc. It's going to only keep improving as well and I couldn't have done it without the help of my connections."
    ],
    date: "August 15, 2024",
  },
  "post-5": {
    title: "Growing team and reviewing PRs at Atria",
    content: [
        "When I was first onboarded, there was a team of 2 active devs including myself. It was simple to manage the project as I only have one other dev to communicate with. I think we have 4-5 active devs now, things are getting a little more complicated. I even have some troubles reviewing PRs because to be quite honest, some of the PRs are so overly complicated that i'm not sure when i'm looking at and I just wait for the team lead to review it first before I give it an approval 😅",
        "With the growth of our team, merge conflicts are unavoidable and that does give me a headache sometimes. I like it though, because it forces me to problem solve and get better at resolving these conflicts.",
        "I initially had some trouble managing multiple branches and creating PRs, as I was directing them all to the main branch. I learned that I should be chaining them—pointing one branch to another, and ultimately merging everything into a primary branch that then goes to main. Because of this, I was hesitant to work on too many branches while my team lead was out of town, and I paused working on tickets. However, after going through that process, I now feel confident in managing multiple branches without any issues."
    ],
    date: "August 21, 2024",
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
