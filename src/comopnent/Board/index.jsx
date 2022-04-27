import React from "react";
import Square from "../Square";

const Board = (props) => {
    
  const RenderSquare = i => {
    return <Square value={props.squares[i]} handleClick={() => props.handleClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
