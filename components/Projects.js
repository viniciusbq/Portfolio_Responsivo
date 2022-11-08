import { Container, Row, Tab, Col, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';

import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: 'CheckSpeech AI',
      description:
        'Projeto (landing page), responsivo, que apresenta uma API que utiliza Inteligência Artificial para conversão e interpretação de falas. Utilizado, Javascript, Html5, Css , ReactJs',
      imgUrl: projImg1,
    },
    {
      title: 'CalPro',
      description:
        'Projeto de organização financeira de determinados projetos. Criado com React e inserindo os dados no banco por API',
      imgUrl: projImg2,
    },
    {
      title: 'Quiz de Programação',
      description:
        'Jogo Quiz, com perguntas sobre Programação, feito com React Js!',
      imgUrl: projImg3,
    },
    {
      title: 'UbMed',
      description: 'Landing Page para projeto da faculdade.',
      imgUrl: projImg4,
    },
    {
      title: 'Gerador de Box Shadow',
      description:
        'Simples gerador de box shadow, feito com javascript, hml e css. Com o objetivo de facilitar o css dos projetos.',
      imgUrl: projImg5,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Uma breve amostra e descrição de alguns projetos feitos por mim.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              ></Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
};
