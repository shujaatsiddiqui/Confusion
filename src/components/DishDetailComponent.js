import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {


    renderDish(dish) {
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

    renderComments(comm) {
            return (
                <Card >
                    <CardBody>
                      <CardTitle>   {comm.comment}  </CardTitle>
                      <CardText> -- {comm.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))} </CardText>
                    </CardBody>
                </Card>
            );
    }

    render() {     
        


        return(           
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {
                            this.props.dish.comments.map((comm)=>{
                                return this.renderComments(comm);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default  DishDetail;