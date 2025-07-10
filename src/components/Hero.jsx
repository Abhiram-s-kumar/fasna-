import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/fasna.jpg'; // replace with actual image

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#f8f4f2',
        paddingTop: '120px',
        paddingBottom: '100px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
            <Image
              src={profile}
              alt="Fasna"
              roundedCircle
              fluid
              style={{
                width: '260px',
                height: '260px',
                objectFit: 'cover',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                border: '6px solid white',
              }}
            />
          </Col>
          <Col md={6}>
            <h1
              style={{
                fontSize: '2.8rem',
                fontWeight: '700',
                color: '#222',
              }}
            >
              Hi, I'm <span style={{ color: '#f97316' }}>Fasna</span> 👋
            </h1>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '500',
                color: '#444',
                marginTop: '10px',
                marginBottom: '20px',
              }}
            >
              Instagram Reels Editor & Video Creator
            </h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              I create impactful, trendy short-form video content that resonates and engages audiences.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
