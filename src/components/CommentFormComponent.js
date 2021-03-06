import React, { Component, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter,  Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
class CommentForm extends Component
{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render()
    {
        return(
                <div className="row row-content">
                <div className="col-12">
                <h3>Submit Comment</h3>
                </div>
                <div className="col">
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="Ratings" md={2}>Ratings</Label>
                            <Col md={10}>
                                <Control.text model=".rating" id="rating" name="rating"
                                    placeholder="Rating"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".rating"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" md={2}>Your Name</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Rating"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Comments</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="12"
                                    className="form-control" />
                                <Errors
                                    className="text-danger"
                                    model=".message"
                                    show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />    
                            </Col>                            
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>     
        );
    }
}

export default CommentForm;