import { Col, Row, Image } from "react-bootstrap";

const Hero = () => {
  return (
    <section>
      <hr />
      <Row>
        <Col md={6}>
          <h1>CodeConquerors Short Profile</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolores voluptate sint reiciendis at. Ea autem iure eum fugiat
            debitis esse, consequuntur in facilis provident fuga neque iusto
            magni quasi.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=1769&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rounded
            width={"100%"}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
