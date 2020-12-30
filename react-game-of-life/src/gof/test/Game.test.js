import { expect } from "chai";
import CellState from "../CellState";
import Game from "../Game";
import Cell from "../Cell";

const { DEAD, ALIVE } = CellState;

const deadState = [
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
];

describe("Game of Life", () => {
  it("Should initialize with a given state", () => {
    const game = new Game(deadState);

    const cellState = [
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ];

    expect(game.state).to.deep.equal(cellState);
  });

  it("Should retrieve a cell at a given row and col", () => {
    // const game = new Game(deadState);

    // const cell0 = game.getCell(0, 0);

    // expect(cell0).to.be.instanceOf(Cell);
    // expect(cell0.state).to.equal(deadState[0][0]);

    const gameState = [
      [DEAD, ALIVE],
      [ALIVE, DEAD],
    ];

    const newGame = new Game(gameState);

    const aliveCell = newGame.getCell(0, 0);
    expect(aliveCell).to.be.an.instanceOf(Cell);
    expect(aliveCell.state).to.equal(gameState[0][0]);

    const deadState = newGame.getCell(1, 1);
    expect(deadState).to.be.an.instanceOf(Cell);
    expect(deadState.state).to.equal(gameState[1][1]);
  });

  it("Should get the number of alive neightbours for a given cell", () => {
    const gameState = [
      [DEAD, ALIVE, DEAD],
      [ALIVE, ALIVE, DEAD],
      [DEAD, ALIVE, DEAD],
    ];

    const game = new Game(gameState);

    const aliveNeigbors1on1 = game.getNumAliveNeighbors(1, 1);
    expect(aliveNeigbors1on1).to.equal(3);
  });

  it("Should get the number of alive neightbours in the top edge", () => {
    const gameState = [
      [DEAD, ALIVE, DEAD],
      [ALIVE, ALIVE, DEAD],
      [DEAD, ALIVE, DEAD],
    ];

    const game = new Game(gameState);

    const aliveNeigbors1on1 = game.getNumAliveNeighbors(0, 1);
    expect(aliveNeigbors1on1).to.equal(2);
  });

  it("Should get the number of alive neightbours in the left edge", () => {
    const gameState = [
      [DEAD, ALIVE, DEAD],
      [ALIVE, ALIVE, DEAD],
      [DEAD, ALIVE, DEAD],
    ];

    const game = new Game(gameState);

    const aliveNeigbors1on1 = game.getNumAliveNeighbors(1, 0);
    expect(aliveNeigbors1on1).to.equal(3);
  });

  it("Should get the number of alive neightbours in the bottom edge", () => {
    const gameState = [
      [DEAD, ALIVE, DEAD],
      [ALIVE, DEAD, DEAD],
      [DEAD, ALIVE, DEAD],
    ];

    const game = new Game(gameState);

    const aliveNeigbors1on1 = game.getNumAliveNeighbors(2, 1);
    expect(aliveNeigbors1on1).to.equal(1);
  });
  it("Should get the number of alive neightbours in the right edge", () => {
    const gameState = [
      [DEAD, DEAD, DEAD],
      [ALIVE, DEAD, ALIVE],
      [DEAD, ALIVE, DEAD],
    ];

    const game = new Game(gameState);

    const aliveNeigbors1on1 = game.getNumAliveNeighbors(1, 2);
    expect(aliveNeigbors1on1).to.equal(1);
  });

  it("Should get number of alive neighbors in a big grid", () => {
    const gameState = [
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
    ];

    const game = new Game(gameState);

    const aliveNeigbors1on1 = game.getNumAliveNeighbors(3, 5);
    expect(aliveNeigbors1on1).to.equal(8);
  });

  it("Should create the next state of the game", () => {
    const gameState = [
      [DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD],
    ];

    const game = new Game(gameState);
    const nextState = game.getNextState();
    const expectedState = [
      [
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
      ],
      [
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
      ],
      [
        new Cell(DEAD),
        new Cell(ALIVE),
        new Cell(ALIVE),
        new Cell(ALIVE),
        new Cell(DEAD),
      ],
      [
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
      ],
      [
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
        new Cell(DEAD),
      ],
    ];
    expect(nextState).to.deep.equal(expectedState);
  });
});
