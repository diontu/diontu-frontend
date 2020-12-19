import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class BlogCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card style={{ 
                    width: "auto", 
                    textAlign:"left", 
                    borderLeft:"none",
                    borderRight: "none",
                    borderBottom: "none",
                    borderRadius: "0px",
                }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.desc}
                    </Card.Text>
                    <Card.Link href="#">More...</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default BlogCard;