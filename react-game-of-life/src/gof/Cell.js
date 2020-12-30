import CellState from "./CellState";

export default class Cell {
  constructor(state) {
    if (!Object.values(CellState).includes(state)) {
      throw new Error("Invalid State");
    }
    this.state = state;
  }

  getNextState(numbNeighbours) {
    if (this.state === CellState.ALIVE) {
      if (numbNeighbours === 2 || numbNeighbours === 3) {
        return this.state;
      }
    } else if (numbNeighbours === 3) {
      return CellState.ALIVE;
    }
    return CellState.DEAD;
  }
}
