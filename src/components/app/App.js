import React from "react";
import "./App.css";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import { Route, Switch, withRouter } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import ProfileContainer from "../profile/ProfileContainer";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/Login";
import { connect } from "react-redux";
import { initializeApp } from "../../redux/app-reducer";
import Loader from "../loader/Loader";
import { compose } from "redux";
import Main from "../main/Main";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/main" render={() => <Main />} />
            <Route path="*" render={() => <div>404 Страница не найдена</div>} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
