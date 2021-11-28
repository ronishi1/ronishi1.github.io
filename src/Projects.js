import React from 'react';
import NavigationBar from './NavigationBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <Container>
        <Row>
          <Col xs={1}>
          </Col>
          <Col xs={11}>
            <h2>My Projects</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={1}>
          </Col>
          <Col xs={5} className="center">
            <h4>Airtable Translator</h4>
            <div className="description">
              The Airtable translator was a project that I worked on to automate the translation of fields in an Airtable
              database. The script uses Google & IBM translations to translate the content to the required language and
              switches between the two to minimize cost by keeping track of translated character counts. The script can also
              be setup to run on a schedule using Firebase functions.
            </div>
            <Button className="link-button" variant="outline-primary" href="https://github.com/ronishi1/airtable_translation">Link to github            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg></Button>
          </Col>

          <Col xs={5} className="center">
            <h4>Dynamic Memory Allocator (C)</h4>
            <div className="description">
              The dynamic memory allocator project was a project that served to implement my own version of the functions
              free(),malloc(), and realloc() used for memory allocation in C. This was accomplished using free lists segregated
              by size, coalescing of free blocks, and other methods used to optimize memory allocation. The source code will be
              made available after the end of the semester.
            </div>
            <Button variant="outline-primary" disabled>Link not available</Button>{' '}
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={1}>
          </Col>
          <Col xs={5} className="center">
            <h4>User Instructions Project</h4>
            <div className="description">
              The user instructions project is an assignment highlighting the importance of concise, clear, and visual instructions
              when it comes to a product or service. In my project, I went over the basics of setting up a proper budget
              using Mint with visuals for every step of the process. I made sure to focus on making each step as simple as possible
              in order to make it easy to follow and go through.
            </div>
            <Button className="link-button" variant="outline-primary" href="user_instructions.pdf">Link to PDF</Button>
          </Col>
          <Col xs={5} className="center">
            <h4>Press Release Project</h4>
            <div className="description">
              The press release project is an assignment where we composed a press release for a product, event, service or
              system. The focus of this project was on audience awareness and writing in order to make it informative for both
              technical and non-technical readers of the press release. In my project, I wrote a press release for an event
              happening on campus hosted by the Japanese Student Organization.
            </div>
            <Button className="link-button" variant="outline-primary" href="press_release.pdf">Link to PDF</Button>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  )
}

export default Projects;
