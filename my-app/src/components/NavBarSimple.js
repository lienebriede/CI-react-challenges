import React from 'react';
import css from './css/NavBarSimple.module.css';


class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello, guest!",
            buttonText: "log in",
        };
    }

    // This prints the state before the update
    // handleClick() {
    //     this.setState((prevState) => {
    //         console.log("Previous State:", prevState);
    //         return {
    //             introduction: prevState.introduction === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
    //             buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
    //         };
    //     });
    // }

    // This prints the state after the state update
    handleClick = () => {
        this.setState((prevState) => ({
            introduction: prevState.introduction === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
        }), () => console.log(this.state.introduction))

    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>
                        {this.state.introduction}
                    </span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}


export default NavBarSimple