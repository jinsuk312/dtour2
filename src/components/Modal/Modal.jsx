import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import "./ModalStyle.css";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from '../login/Login';
import Logout from '../login/Logout';
import { app } from '../login/base';

function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} {...rest} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />} />
    )
}

function ShowRoute({ component: Component, items, param, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ match, ...props }) => {
                if (rest.requireAuth === true && !rest.authenticated) {
                    return (
                        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                    )
                }

                const item = items[match.params[param]]
                if (item) {
                    return <Component item={item} {...props} match={match} {...rest} />
                } else {
                    return <h1>Not Found</h1>
                }
            }}
        />
    )
}

class Modal extends Component {
    constructor(props) {
        super(props);
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: true,
        };
    }

    setCurrentUser(user) {
        if (user) {
            this.setState({
                currentUser: user,
                authenticated: true
            })
        } else {
            this.setState({
                currentUser: null,
                authenticated: false
            })
        }
    }

    componentWillMount() {
        this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false,
                })
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false,
                })

            }
        })
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }

    render() {
        var myBigGreenDialog = {
            width: '50%',
            height: '400px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-200px',
            marginLeft: '-25%',
            backgroundColor: '#333',
            borderRadius: '2px',
            zIndex: 100,
            padding: '15px',
            boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'
        };
        return (
            <a className="btn">
                <a href="#Auth" className="navgrp2" onClick={() => this.animated.show()}>Sign-Up/Login</a>
                {/* <button className="btn" onClick={() => this.animated.show()}>SignUp/Login</button> */}
                <section>
                    <SkyLight
                        dialogStyles={myBigGreenDialog}
                        hideOnOverlayClicked
                        ref={ref => this.animated = ref}
                        transitionDuration={750}
                    >
                        <BrowserRouter>
                            <div>
                                <div className="main-content" style={{ padding: "1em" }}>
                                    <div className="workspace">
                                        <Route exact path="/" render={(props) => {
                                            return <Login setCurrentUser={this.setCurrentUser} {...props} />
                                        }} />
                                        <Route exact path="/logout" component={Logout} />
                                    </div>
                                </div>
                            </div>
                        </BrowserRouter>
                    </SkyLight>
                </section>
            </a>
        )
    }
}

Modal.displayName = 'Modal';

export default Modal;