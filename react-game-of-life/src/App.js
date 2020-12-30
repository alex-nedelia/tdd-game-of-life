import ConGof from "../src/gof/index";
import React from "react";
import "./App.css";

const { Cell, CellState, Game } = ConGof;
const { DEAD, ALIVE } = CellState;
const deadState = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
];
const game = new Game(deadState);

function App() {
  const [cells, setCells] = React.useState(game.state);

  const getNextState = () => {
    const nextState = game.getNextState();
    game.state = nextState;
    setCells(nextState);
  };

  const toggleState = (row, col) => {
    const newState = cells.map((rowCell, rowNum) => {
      return rowCell.map((cell, colNum) => {
        if (row === rowNum && col === colNum) {
          cell.state = cell.state === ALIVE ? DEAD : ALIVE;
        }
        return cell;
      });
    });

    game.state = newState;
    setCells(newState);
  };

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <table>
        <tbody>
          {cells.map((rowCell, rowNum) => {
            return (
              <tr key={rowNum}>
                {rowCell.map((cell, colNum) => (
                  <td
                    style={{
                      background: cell.state === ALIVE ? "black" : "white",
                    }}
                    className="cell"
                    key={colNum}
                    onClick={() => toggleState(rowNum, colNum)}
                  ></td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={getNextState}>Next State</button>
    </div>
  );
}

export default App;
