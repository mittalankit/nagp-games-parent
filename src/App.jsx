import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import GameSwitcher from "./components/GameSwitcher";

class App extends Component {

    render() {
        return (
            <GameSwitcher clickBtn={this.clickBtn}/>
        );
    };
}
ReactDOM.render(<App />, document.getElementById("app"));
