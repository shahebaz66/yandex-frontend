import {
    Container, Row, Col, Card, Button
} from 'react-bootstrap';

function Single(props){
    return (
        <Container fluid className="contain">
                <Row>
                    {props.state.map(i => {


                        return <Col key={i.id}>
                            <Card >
                                <Row>
                                    <Col lg={4} >
                                    <img style={{marginLeft:"auto",marginRight:"auto",display:"block"}} src={i.url} />
                                    </Col>
                                    <Col lg={8}>
                                    <Card.Body>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>
                                        {i.content}
                                    </Card.Text>
                                   
                                </Card.Body>
                                    </Col>
                                </Row>
                                
                                
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
    )
}

export default Single;