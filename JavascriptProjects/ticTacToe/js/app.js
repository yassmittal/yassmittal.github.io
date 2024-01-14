import Store from "./store.js";
import View from "./view.js";

const App = {
  //all of out selected html elements
  $: {
    menu: document.querySelector("[data-id ='menu']"),
    menuItems: document.querySelector("[data-id ='menu-items']"),
    resetBtn: document.querySelector("[data-id='reset-btn']"),
    newRoundBtn: document.querySelector("[data-id='new-round-btn']"),
    squares: document.querySelectorAll("[data-id='square']"),
    modal: document.querySelector("[data-id = 'modal']"),
    modalText: document.querySelector("[data-id='modal-text']"),
    modalBtn: document.querySelector("[data-id= 'modal-btn']"),
    turn: document.querySelector('[data-id="turn"]'),
  },

  state: {
    // currentPlayer: 1,
    moves: [],
  },

  getGameStatus(moves) {
    let p1Moves = moves.filter((move) => {
      return move.playerId === 1;
    });

    p1Moves = p1Moves.map((move) => {
      return +move.squareId;
    });

    let p2Moves = moves.filter((move) => {
      return move.playerId === 2;
    });

    p2Moves = p2Moves.map((move) => {
      return +move.squareId;
    });

    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];

    let winner = null;

    winningPatterns.forEach((pattern) => {
      const p1Wins = pattern.every((v) => p1Moves.includes(v));
      const p2Wins = pattern.every((v) => p2Moves.includes(v));

      if (p1Wins) winner = 1;
      if (p2Wins) winner = 2;
    });

    return {
      status: moves.length === 9 || winner != null ? "complete" : "in-progress",
      winner, //if winner is empty then winner key of this object will get assigned to same winner variable
    };
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    //DONE
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // TODO
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("reset the game");
    });

    //TODO
    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("add a new round");
    });

    App.$.modalBtn.addEventListener("click", (event) => {
      App.state.moves = [];
      App.$.squares.forEach((square) => square.replaceChildren());
      App.$.modal.classList.add("hidden");
      console.log("worked");
    });

    //TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        // console.log(App.$.modalText)
        console.log(`Square with id ${event.target.id} is clicked`);
        console.log(`Current Player is ${App.state.currentPlayer}`);

        //check if there is already a play if so, return early
        // if (square.hasChildNodes()) return;

        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find((move) => {
            return move.squareId === squareId;
          });

          if (existingMove) {
            return true;
          } else {
            return false;
          }
        };

        if (hasMove(square.id)) {
          return;
        }

        // Determin which player icon to add to the square
        // const currentPlayer = App.state.currentPlayer;

        const lastMove = App.state.moves.at(-1);
        const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);

        const currentPlayer =
          App.state.moves.length === 0
            ? 1
            : getOppositePlayer(lastMove.playerId);

        const nextPlayer = getOppositePlayer(currentPlayer);

        const turnLabel = document.createElement("p");
        turnLabel.textContent = `Player ${nextPlayer}, you are up`;

        const squareIcon = document.createElement("i");
        const turnIcon = document.createElement("i");

        if (currentPlayer === 1) {
          squareIcon.classList.add("fa-solid", "fa-x", "yellow");
          turnIcon.classList.add("fa-solid", "fa-o");
          App.$.turn.classList = "turn turquoise";
        } else {
          squareIcon.classList.add("fa-solid", "fa-o", "turquoise");
          turnIcon.classList.add("fa-solid", "fa-x");
          App.$.turn.classList = "turn yellow";
        }

        App.$.turn.replaceChildren(turnIcon, turnLabel);

        App.state.moves.push({
          squareId: square.id,
          playerId: currentPlayer,
        });

        square.replaceChildren(squareIcon);

        //check if there is a winner or a tie game

        const game = App.getGameStatus(App.state.moves);

        if (game.status === "complete") {
          App.$.modal.classList.remove("hidden");
          let msg;

          if (game.winner) {
            msg = `player ${game.winner} wins`;
          } else {
            msg = "Game Draws";
          }
          App.$.modalText.textContent = msg;
        }
      });
    });
  },
};

const players = [
  {
    id: 1,
    name: "player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
  },

  {
    id: 2,
    name: "player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
  },
];

function init() {
  const view = new View();
  const store = new Store(players);

  console.log(store.game);

  view.bindGameResetEvent((event) => {
    console.log("reset event");
    console.log(event);
  });

  view.bindNewRoundEvent((event) => {
    console.log("new round event");
    console.log(event);
  });

  view.bindPlayerMoveEvent((event) => {
    const clickedSquare = event.target;

    //place an icon of the current player in the square
    view.handlePlayerMove(clickedSquare, store.game.currentPlayer);

    // advance to the next step by pushing a move to the moves array
    store.playerMove(+clickedSquare.id);

    // set the next players turn indicator
    view.setTurnIndicator(store.game.currentPlayer);
  });
}

window.addEventListener("load", init());
