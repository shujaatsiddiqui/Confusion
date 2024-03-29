import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos  } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  // add comment is a proeprty which reference to an arrow function which basically dispatch add comment action 
  // to the comment reducer.
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchComments: () => { dispatch(fetchComments())},
  fetchPromos: () => { dispatch(fetchPromos())},
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

class Main extends Component {

  componentDidMount() {
    debugger;
    console.log(process.env.REACT_APP_BASE_URL);
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  

  render() {

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment} />
      );
    };

  return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={
                ()=> <Home 
                      dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                      dishesLoading={this.props.dishes.isLoading}
                      dishesErrMess={this.props.dishes.errMess}
                      promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                      promoLoading={this.props.promotions.isLoading}
                      promoErrMess={this.props.promotions.errMess}                      
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                     />} 
              />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
              <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));