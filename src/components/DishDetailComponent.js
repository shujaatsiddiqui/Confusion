import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from './FooterComponent';


    function RenderDish({dish}) {
        //console.log(dish);
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({comm}) {
        if (comm != null)
        {
            return (
                <Card >
                    <CardBody>
                      <CardTitle>   {comm.comment}  </CardTitle>
                      <CardText> -- {comm.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))} </CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {           
        console.log(props);
        return(           
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {
                            props.dish != null && props.comments != null ?
                                <h1>Comments</h1> : <></>
                        }    
                        {
                            props.dish != null ? props.comments.map((comm,i)=>{
                               return <RenderComments key={i} comm = {comm} />
                            })
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        );
    }


export default  DishDetail;