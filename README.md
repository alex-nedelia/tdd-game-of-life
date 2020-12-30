Conway's Game of Life

Code this game to learn TDD

https://www.youtube.com/watch?v=JB3OkBdP_eM&t=306s

- Install dependencies
  - [x] mocha chai @babel/core @babel/preset-env @babel/register
- Setup Babel

  - [x] { "presets": ["@babel/preset-env"]}

- [x] Make test directory
- [x] Add test script

  - [x] "test": "mocha --require @babel/register"

- Cellstate

  - [x] Add alive state
  - [x] Add dead state

- Cell

  - [x] Should be initialized with a cell state
  - [x] It should die if it has fewer than 2 live neighbours
  - [x] getNextState(numNeighbours)
  - [x] Should live with 2 or 3 neighbours
  - [x] Should die if with more than 3 neightbours
  - [x] Dead cell should revive if exactly 3 alive neighbours

- Game
  - [x] Should initialize with an initial state
    - [x] Array of arrays of states
    - [x] Should retrieve a cell at a given row and col
    - [x] Should get the number of alive neightbours for a given cell
    - [x] Should create the next state of the game
