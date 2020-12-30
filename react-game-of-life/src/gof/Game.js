import Cell from "./Cell";
import CellState from "./CellState";

export default class Game {
  constructor(state) {
    this.state = state.map((row) => row.map((col) => new Cell(col)));

    this.numRows = this.state.length;
    this.numCols = this.state[0].length;
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  getNumAliveNeighbors(row, col) {
    // const gameState = [
    //     [ALIVE, ALIVE, ALIVE],
    //     [ALIVE, ALIVE, ALIVE],
    //     [ALIVE, ALIVE, ALIVE],
    //   ];

    const stateValues = {
      [CellState.ALIVE]: 1,
      [CellState.DEAD]: 0,
    };

    const cellsAbove = (rowNum, colNum) =>
      (rowNum === row - 1 && colNum === col - 1) ||
      (rowNum === row - 1 && colNum === col) ||
      (rowNum === row - 1 && colNum === col + 1);

    const cellNext = (rowNum, colNum) =>
      (rowNum === row && colNum === col - 1) ||
      (rowNum === row && colNum === col + 1);

    const cellBelow = (rowNum, colNum) =>
      (rowNum === row + 1 && colNum === col - 1) ||
      (rowNum === row + 1 && colNum === col) ||
      (rowNum === row + 1 && colNum === col + 1);

    let numNeighbors = 0;

    this.state.forEach((rowCell, rowNum) => {
      rowCell.forEach((cell, colNum) => {
        if (
          cellsAbove(rowNum, colNum) ||
          cellNext(rowNum, colNum) ||
          cellBelow(rowNum, colNum)
        )
          numNeighbors += stateValues[cell.state];
      });
    });

    return numNeighbors;

    // let topLeft, top, topRight, bottomLeft, bottom, bottomRight, right, left;

    // const edgeCell = new Cell(CellState.DEAD);
    // const topRow = this.state[row - 1];

    // topLeft = row === 0 || col === 0 ? edgeCell : topRow[col - 1];
    // top = row === 0 ? edgeCell : topRow[col];
    // topRight =
    //   row === 0 || col === this.numCols - 1 ? edgeCell : topRow[col + 1];

    // const curRow = this.state[row];
    // left = col === 0 ? edgeCell : curRow[col - 1];
    // right = col === this.numCols - 1 ? edgeCell : curRow[col + 1];

    // const bottomRow = this.state[row + 1];

    // bottomLeft =
    //   row === this.numRows - 1 || col === 0 ? edgeCell : bottomRow[col - 1];
    // bottom = row === this.numRows - 1 ? edgeCell : bottomRow[col];
    // bottomRight =
    //   row === this.numRows - 1 || col === this.numCols - 1
    //     ? edgeCell
    //     : bottomRow[col + 1];

    // const neighbors = [
    //   topLeft,
    //   top,
    //   topRight,
    //   left,
    //   right,
    //   bottomRight,
    //   bottomLeft,
    //   bottom,
    // ];

    // return neighbors.reduce((sum, { state }) => sum + stateValues[state], 0);
  }

  getNextState() {
    // console.log(this.state);
    const nextState = this.state.map((row, rowNum) =>
      row.map((cell, colNum) => {
        const numbNeighbors = this.getNumAliveNeighbors(rowNum, colNum);
        return new Cell(cell.getNextState(numbNeighbors));
      })
    );

    return nextState;
  }
}
