import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import Iconphone from "./assets/phone.svg";
import Iconmail from "./assets/mail.svg";
import Iconupdate from "./assets/update.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container className="midWrap">
        <Row>
          <Col sm={4}>
            <Image className="imgAvatar" src="./src/assets/profile.png" roundedCircle />
            <Card>
              <Card.Header as="h5">Giselle Liao</Card.Header>
              <Card.Body>
                <Card.Title>UIUX資深設計師 / 前端</Card.Title>
                <Card.Text>
                  <p>
                    累積UIUX設計工作已有近9年工作經驗，開發過許多大型政府專/標案，深得客戶喜歡，目前仍積極在前端領域持續精進中。
                    <br />
                    <br />
                    ｜客戶需求訪談｜雛形UI規劃｜視覺切版
                  </p>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <img src={Iconphone} alt="" />
                      0981-468777
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img src={Iconmail} alt="" />
                      louisliao696@gmail.com
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img src={Iconupdate} alt="" />
                      2025-03-01
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
          <Skills/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
