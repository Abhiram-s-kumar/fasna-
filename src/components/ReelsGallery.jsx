import { Container, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const reels = [
  {
    url: "https://www.instagram.com/reel/C3nUOPIJ-tO/",
    title: "College Farewell Moments",
    views: "1.2K views",
    time: "2 weeks ago",
  },
  {
    url: "https://www.instagram.com/reel/CpSuI2urW3j/",
    title: "Traditional Day Recap",
    views: "980 views",
    time: "1 month ago",
  },
  {
    url: "https://www.instagram.com/reel/C_BRwrlSizM/",
    title: "Behind the Scenes",
    views: "740 views",
    time: "3 weeks ago",
  },
  {
    url: "https://www.instagram.com/reel/DJpH9grSJCp/",
    title: "Mini Vlog: Reels Shoot",
    views: "560 views",
    time: "1 week ago",
  },
  {
    url: "https://www.instagram.com/reel/C71045XPU3lRYa0KSCRvsAuEPWmkccQ-y_jGCU0/",
    title: "Dance Team Reel",
    views: "1.4K views",
    time: "2 months ago",
  }
];

const ReelsGallery = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="reels"
      style={{
        backgroundColor: "#f8f4f2",
        padding: "80px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.6s ease-in-out",
      }}
    >
      <Container>
        <h2
          className="mb-5 text-center"
          style={{
            color: "#222",
            fontWeight: "bold",
            fontSize: "2.2rem",
          }}
        >
          My Instagram Reels
        </h2>

        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "24px",
            padding: "10px",
          }}
        >
          {reels.map((reel, index) => (
            <Card
              key={index}
              style={{
                minWidth: "280px",
                maxWidth: "280px",
                border: "none",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                flexShrink: 0,
              }}
            >
              <div style={{ height: "360px", overflow: "hidden" }}>
                <iframe
                  src={`${reel.url}embed`}
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "auto",
                  }}
                  allowFullScreen
                  title={`reel-${index}`}
                ></iframe>
              </div>
              <Card.Body style={{ padding: "10px" }}>
                <Card.Title
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "4px",
                  }}
                >
                  {reel.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.8rem", color: "#666" }}>
                  {reel.views} • {reel.time}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ReelsGallery;




