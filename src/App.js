import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types' 
import { selectUser, fetchUserAndRepos } from './actions';

import Footer from './components/Footer';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './components/Header';
import User from './components/User'; 
import Landding from './components/containers'; 
class App extends Component {
 
  componentDidMount() {
   const { dispatch } = this.props;
   dispatch(selectUser());
   dispatch(fetchUserAndRepos());
    // this.setState({isLoadingData:this.props.Users.isLoadingData})
  }
  
  render() {
    const { currentUser, currentUserData, userRepos } = this.props;
    const { userData } = currentUserData;
    return (
        <div>
          <Header></Header>
          <Landding></Landding>
            {currentUserData.isFetching && <h2>Loading...</h2>}
            {!currentUserData.isFetching &&
                userData.message && (
                    <div>
                        <h2>{userData.message}</h2>
                        <p>{userData.documentation_url}</p>
                    </div>
                )}
            {currentUser !== '' &&
                !userData.message &&
                !currentUserData.isFetching && (
                    <User
                        currentUserData={currentUserData}
                        userRepos={userRepos}
                    />
                )}
                <Footer></Footer>
        </div>
    );
}
} 

App.propTypes = {
  currentUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { currentUser, currentUserData, userRepos } = state;
  return {
      currentUser,
      currentUserData,
      userRepos,
  };
}

export default connect(mapStateToProps)(App)