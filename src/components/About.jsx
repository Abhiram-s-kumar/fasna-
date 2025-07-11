import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#f8f4f2',
        padding: '100px 0',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.6s ease-in-out',
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <h2
              style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: '#222',
                marginBottom: '16px',
              }}
            >
              Who Am I?
            </h2>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: '#f97316',
                marginBottom: '30px',
              }}
            >
              A creative mind who transforms moments into scroll-stopping stories.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#444',
                lineHeight: '1.9',
              }}
            >
              I’m <strong>Fasna</strong>, a passionate <strong>Editor</strong> with a flair for crafting visually engaging short-form videos. My edits are sharp, trendy, and built to capture attention — from clean transitions and synced audio to viral trends and emotional cuts. I work with tools like <strong>CapCut</strong>, <strong>InShot</strong>, and Native features to bring creative visions to life and help brands and creators shine on social media.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;



