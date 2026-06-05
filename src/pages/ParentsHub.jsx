import './ParentsHub.css';
import blog1 from '../assets/pages/blog/blog1.jpeg';
import blog2 from '../assets/pages/blog/blog2.jpeg';
import pic3 from '../assets/pages/home/pic3.png';

const blogs = [
  {
    title: 'Unlocking Potential: Creative Occupational Therapy at Home for Autism You Can Start Today!',
    img: 'https://highskycdc.in/wp-content/uploads/2024/01/blog-1.jpg',
    fallback: blog1,
    link: 'https://highskycdc.in/occupational_therapy_at_home/',
  },
  {
    title: 'Speech Therapy for Children with Autism: Addressing Symptoms, Techniques, & Strategies for Success',
    img: 'https://highskycdc.in/wp-content/uploads/2024/01/blog-2.jpg',
    fallback: blog2,
    link: 'https://highskycdc.in/speech_therapy_for_autism/',
  },
];

const youtubeVideos = [
  { id: 'S75Zh55Srd4', title: 'Home Based or Centre Based Occupational Therapy for Kids? | Dr. Priyanka Gupta' },
  { id: 'WYycAEqoqiQ', title: 'Step-by-Step: Cycle Riding for Neurodiverse Kids' },
];

const webinars = [
  {
    title: 'Enhancing Social Skills in Neurodivergent Kids – Live Webinar with Dr. Priyanka Gupta',
    img: 'https://highskycdc.in/wp-content/uploads/2024/01/webinar-1.jpg',
    fallback: pic3,
    link: 'https://highskycdc.in/occupational_therapy_at_home/',
  },
];

export default function ParentsHub() {
  return (
    <div className="parents-hub-page">
      {/* Purple banner */}
      <div className="hub-banner">
        <h1>PARENTS HUB</h1>
      </div>

      {/* BLOGS */}
      <section className="hub-section">
        <div className="hub-section-header-orange">
          <h2>BLOGS</h2>
        </div>
        <div className="hub-section-body">
          <div className="blogs-grid">
            {blogs.map((blog, i) => (
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-card" key={i}>
                <div className="blog-card-img">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    onError={(e) => { e.target.src = blog.fallback; }}
                  />
                </div>
                <div className="blog-card-title">
                  <p>{blog.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="hub-section">
        <div className="hub-section-header-orange">
          <h2>YOUTUBE</h2>
        </div>
        <div className="hub-section-body">
          <div className="youtube-grid">
            {youtubeVideos.map((video, i) => (
              <div className="youtube-card" key={i}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-thumb-link"
                >
                  <div className="youtube-thumb-wrap">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                    />
                    <div className="play-overlay">
                      <div className="play-btn-circle">
                        <span className="play-triangle">▶</span>
                      </div>
                    </div>
                  </div>
                </a>
                <p className="youtube-title">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBINARS / COURSES */}
      <section className="hub-section">
        <div className="hub-section-header-orange">
          <h2>WEBINARS / COURSES</h2>
        </div>
        <div className="hub-section-body">
          <div className="webinars-grid">
            {webinars.map((w, i) => (
              <a href={w.link} target="_blank" rel="noopener noreferrer" className="webinar-card" key={i}>
                <div className="webinar-card-img">
                  <img
                    src={w.img}
                    alt={w.title}
                    onError={(e) => { e.target.src = w.fallback; }}
                  />
                </div>
                <div className="webinar-card-title">
                  <p>{w.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
