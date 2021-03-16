import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, Button, Modal,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';


    function RenderDish({dish}) {
        //console.log(dish);
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={'http://localhost:3001/'+dish.image} alt={dish.name} />
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
        const [modal, setModal] = useState(false);

        const toggle = (postingComment) => {
            debugger;
            setModal(!modal);
        } 

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
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
                                    return <RenderComments key={i} comm = {comm}  />
                                    })
                                    :
                                    <div></div>
                                }
                            </div>
                            <div  className="col-12 col-md-5 m-1">
                                <Button outline color="primary" onClick={toggle} >Add Comment</Button>
                            </div>
                        </div>
                        
                        <Modal isOpen={modal} toggle={toggle}>
                            <CommentForm dishId={props.dish.id} postComment={props.postComment}/>                            
                        </Modal>                        
                    </div>
                    
                );
        }
        
    }

export default  DishDetail;