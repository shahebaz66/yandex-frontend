import {
    Container, Row, Col, Card, Button
} from 'react-bootstrap';

function List(props){
    return (
        <Container fluid className="contain">
                <Row>
                    {props.state.map(i => {


                        return <Col lg={3} md={4} sm={6} key={i.id}>
                            <Card >
                                <Card.Img width="80" variant="top" src={i.url} />
                                <Card.Body>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>
                                        {i.content.substring(0,100)}...
                                    </Card.Text>
                                    <Card.Link style={{cursor:"pointer"}} onClick={()=>props.click(i.id)}>Read more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
    )
}

export default List;