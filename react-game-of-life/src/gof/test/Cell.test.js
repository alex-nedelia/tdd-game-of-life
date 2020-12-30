import { expect } from "chai";
import CellState from "../CellState";
import Cell from "../Cell";

describe("Cell", () => {
  it("Should be initialized with a CellState", () => {
    const aliveCell = new Cell(CellState.ALIVE);
    expect(aliveCell.state).to.equal(CellState.ALIVE);

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).to.equal(CellState.DEAD);
  });

  it("Should throw err if invalid state", () => {
    expect(() => {
      new Cell(undefined);
    }).to.throw();
  });

  it("Should die if it has fewer than 2 live neighbours", () => {
    const cell = new Cell(CellState.ALIVE);

    const nextState1neighbours = cell.getNextState(1);
    expect(nextState1neighbours).to.equal(CellState.DEAD);

    const nextState0neighbours = cell.getNextState(0);
    expect(nextState0neighbours).to.equal(CellState.DEAD);
  });

  it("Should stay dead if fewer than 2 neightbours", () => {
    const cell = new Cell(CellState.DEAD);
    const nextState1neighbours = cell.getNextState(1);
    expect(nextState1neighbours).to.equal(CellState.DEAD);

    const nextState0neighbours = cell.getNextState(0);
    expect(nextState0neighbours).to.equal(CellState.DEAD);
  });

  it("Should stay dead with more than 3 neightbours", () => {
    const cell = new Cell(CellState.DEAD);

    const nextState4neightbours = cell.getNextState(4);
    expect(nextState4neightbours).to.equal(CellState.DEAD);

    const nextState5neightbours = cell.getNextState(5);
    expect(nextState5neightbours).to.equal(CellState.DEAD);
  });

  it("Should live with 2 or 3 neighbours", () => {
    const cell = new Cell(CellState.ALIVE);

    const nextState2neighbours = cell.getNextState(2);
    expect(nextState2neighbours).to.equal(CellState.ALIVE);

    const nextState3neightbours = cell.getNextState(3);
    expect(nextState3neightbours).to.equal(CellState.ALIVE);
  });

  it("Should die if with more than 3 neightbours", () => {
    const cell = new Cell(CellState.ALIVE);

    const nextState4neightbours = cell.getNextState(4);
    expect(nextState4neightbours).to.equal(CellState.DEAD);

    const nextState5neightbours = cell.getNextState(5);
    expect(nextState5neightbours).to.equal(CellState.DEAD);
  });

  it("It should revive if exactly 3 alive neighbours", () => {
    const cell = new Cell(CellState.DEAD);

    const nextState = cell.getNextState(3);
    expect(nextState).to.equal(CellState.ALIVE);
  });
});
