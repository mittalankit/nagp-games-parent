import React, { Component, useState } from 'react';

import HangmanGame from "hangman_game/HangmanGame";
import TictactoeGame from "tictactoe_game/TictactoeGame";
  
class GameSwitcher extends Component {

    state = {
        renderView: 1
    };

    clickBtn = e => {
        this.setState({
            renderView: e.target.value
        });
    };

    render() {
        return (
            <div className="switcher">
                <nav className="navigation">
                    <button value={1} onClick={this.clickBtn} disabled={this.state.renderView == 1 ? 'true'.length > 0 : false} 
                    className={this.state.renderView == 1 ? 'btn-parent active' : 'btn-parent disabled'}>Hangman Game</button>
                    <button value={2} onClick={this.clickBtn} disabled={this.state.renderView == 2 ? 'true'.length > 0 : false}
                    className={this.state.renderView == 2 ? 'btn-parent active' : 'btn-parent disabled'}>Tictactoe Game</button>
                </nav>
                <div className="gameboard">
                    {this.state.renderView == 2 ? (<TictactoeGame />) : (<HangmanGame />)}
                </div>
                
            </div>
        )
    };
}

export default GameSwitcher;