import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import node from '../assets/img/node.png';
import java from '../assets/img/java.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import react from '../assets/img/react.png';

import meter2 from '../assets/img/meter2.svg';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Minhas competências</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={react} alt="image" width="200px" height="200px" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={css} alt="image" width="150px" height="200px" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={java} alt="image" width="200px" height="200px" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={node} alt="image" width="250px" height="200px" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" width="200px" height="200px" />
                  <h5>MySql</h5>
                </div>
                <div className="item">
                  <img src={html} alt="image" width="200px" height="200px" />
                  <h5>Html</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="color" />
    </section>
  );
};
