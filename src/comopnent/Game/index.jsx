import React from "react";
import Board from "../Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
  };

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumStep = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";

      return (
        <ul key={move}>
          <button onClick={() => this.jumStep(move)}>{desc}</button>
        </ul>
      );
    });

    let status = "";
    if (winner) {
      status = "Winner " + winner;
    } else {
      status = "Next player is " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="game">
          <div className="game-board">
            <Board handleClick={this.handleClick} squares={current.squares} />
          </div>
          <div className="game-info">
            <div className="status">{status}</div>
            <div>
              {moves}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
