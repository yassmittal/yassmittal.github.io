var config = {
  type: Phaser.AUTO,
  width: 960,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
var game = new Phaser.Game(config);


let bricks = [];
let paddle;

let isGameStarted = false;
let isGameEnded = false;
let isYouWon = false;

let endLine;

let StartGameText;
let gameOverText;
let lifeLineCount = 3;
let LifeLineText;
let startingBallPositionX;
let startingBallPositionY;

let startingPaddlePositionX;
let startingPaddlePositionY;



function preload() {
  this.load.image('brick', 'assets/brike.png');
  this.load.image('background', 'assets/background2.png');
  this.load.image('paddle', 'assets/paddle.png');
  this.load.image('ball', 'assets/ball.png');
}

function create() {
  this.bg = this.add.tileSprite(0, 0, 960, 720, 'background').setOrigin(0, 0);

  StartGameText = this.add.text(config.width / 2 - 100, config.height / 2, 'Click Anywhere To start the Game', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0, 0);
  LifeLineText = this.add.text(config.width - 120, config.height - 40, `LifeLine : ${lifeLineCount}`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' }).setOrigin(0, 0);
  for (let i = 0; i < 30; i++) {
    bricks.push(this.physics.add.sprite(0, 0, 'brick'));
  }

  gameOverText = this.add.text(config.width / 2 - 150, config.height / 2, '', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });




  bricks.forEach(brick => {
    brick.body.setAllowGravity(false);
    brick.body.setImmovable(true);
    brick.body.onCollide = true;
    brick.setBounce(1)

    this.physics.world.on('collide', (ball, brick) => {
      brick.disableBody(true, true);
    });
  })


  Phaser.Actions.GridAlign(bricks, {
    width: 7,
    cellWidth: 120,
    cellHeight: 30,
    x: 130,
    y: 50
  });

  this.ball = this.physics.add.sprite(config.width / 2, config.height - 60, 'ball');

  startingBallPositionX = this.ball.body.position.x;
  startingBallPositionY = this.ball.body.position.y;

  this.ball.setCollideWorldBounds(true);
  paddle = this.physics.add.sprite(config.width / 2, config.height - 40, 'paddle')

  startingPaddlePositionX = paddle.body.position.x;
  startingPaddlePositionY = paddle.body.position.y;

  paddle.body.setAllowGravity(false);
  paddle.body.setImmovable(true);

  paddle.setCollideWorldBounds(true);
  this.physics.add.collider(this.ball, bricks);
  this.physics.add.collider(this.ball, paddle, paddleHit, null, this);

  endLine = this.physics.add.staticGroup();
  endLine.add(this.add.zone(config.width / 2, config.height - 20, config.width, 0));


  this.physics.add.collider(this.ball, endLine, ballHitsLine);

  cursors = this.input.keyboard.createCursorKeys();

  this.input.on('pointerdown', startGame, this);
}

let isBallHandled = false;

function update() {
  this.bg.tilePositionX -= 1;

  if (cursors.left.isDown) {
    paddle.setVelocityX(-800);
  }
  else if (cursors.right.isDown) {
    paddle.setVelocityX(800);
  }
  else {
    paddle.setVelocityX(0);
  }
  checkIfgameOver(this.ball);
  checkIfYouWon(this.ball);
}

function paddleHit(ball, paddle) {
  if (isGameStarted) {
    if ((ball.body.position.x - paddle.body.position.x) < 40) {
      ball.body.velocity.x += -150 * 1.1;
    } else {
      ball.body.velocity.x += +150 * 1.1;
    }
  }

}

function startGame() {
  if (!isGameStarted) {
    this.ball.setBounce(1);
    this.ball.body.velocity.y = 700;
    this.ball.body.velocity.x = 50;
    isGameStarted = true;
    StartGameText.destroy()
    gameOverText.setText('')
  }
}

function checkIfgameOver(ball) {
  if (lifeLineCount <= 0) {
    gameOver(ball);
  }
}

function ballHitsLine() {
  --lifeLineCount;
  LifeLineText.setText(`LifeLine : ${lifeLineCount}`);
  console.log('hitting')
}

function gameOver(ball) {
  gameOverText.setText('Game Over! Click AnyWhere To Restart The Game')
  resetGame(ball)
}

function resetGame(ball) {
  isGameStarted = false;
  lifeLineCount = 3;
  LifeLineText.setText(`LifeLine : ${lifeLineCount}`);
  ball.setBounce(0);
  ball.body.velocity.y = 0;
  ball.body.velocity.x = 0;
  ball.body.position.x = startingBallPositionX;
  ball.body.position.y = startingBallPositionY - 4;
  paddle.body.position.x = startingPaddlePositionX
  paddle.body.position.y = startingPaddlePositionY;
  resetBricks();
}

function resetBricks() {
  bricks.forEach(brick => {
    brick.enableBody(false, true);
    brick.active = true;
    brick.visible = true;
  })
}
function checkIfYouWon(ball) {
  let anyBrickRemains = bricks.find(brick => {
    return brick.active === true;
  })


  if (!anyBrickRemains) {
    gameOverText.setText('Yey!! Congratulations You won the Game. \n Click AnyWhere To Restart The Game')
    resetBricks()
    resetGame(ball)
  }
}