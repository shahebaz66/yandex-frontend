import React, { useState, useEffect } from 'react';

import './search.css'
import {
    Button, Form, Container, Row, Col
} from 'react-bootstrap';

import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';

function Search(props) {
    var [text,setText]=useState("");
    const clicked=()=>{
        var temp=text;
        setText("");
        props.click(temp)
    }
    return (
        <>
            <div className="main">
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Col lg={11} md={11} sm={11} xs={9}>
                                        <Form.Control size="lg" value={text} onChange={(e=>setText(e.target.value))} type="text" placeholder="Search your anime..." />

                                    </Col>
                                    <Col lg={1} md={1} sm={1} xs={1} >
                                        <Button variant="light" onClick={()=>clicked()}>
                                        <Icon >
                                            <SearchIcon fontSize="large" />
                                        </Icon>
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default Search;