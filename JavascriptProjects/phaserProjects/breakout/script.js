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

function preload() {
  this.load.image('brick', 'assets/brike.png');
  this.load.image('background', 'assets/background2.png');
  this.load.image('paddle', 'assets/paddle.png');
  this.load.image('ball', 'assets/ball.png');
}

function create() {
  this.bg = this.add.tileSprite(0, 0, 960, 720, 'background').setOrigin(0, 0);


  for (let i = 0; i < 60; i++) {
    bricks.push(this.physics.add.sprite(0, 0, 'brick'));
  }

  // bricks.body.setAllowGravity(false);
  // bricks.body.setImmovable(true);

  bricks.forEach(brick => {
    brick.body.setAllowGravity(false);
    brick.body.setImmovable(true);
    brick.body.onCollide = true;

    this.physics.world.on('collide', (ball, brick) => {
      brick.disableBody(true, true);
    });
  })


  Phaser.Actions.GridAlign(bricks, {
    width: 10,
    cellWidth: 90,
    cellHeight: 38,
    x: 35,
    y: 35
  });

  this.ball = this.physics.add.sprite(config.width / 4, 450, 'ball');

  this.ball.setBounce(1);
  this.ball.body.velocity.y = 510;
  this.ball.body.velocity.x = 50;
  this.ball.setCollideWorldBounds(true);
  this.paddle = this.physics.add.sprite(config.width / 3, config.height - 40, 'paddle')

  this.paddle.body.setAllowGravity(false);
  this.paddle.body.setImmovable(true);

  this.paddle.setCollideWorldBounds(true);
  this.physics.add.collider(this.ball, bricks);
  this.physics.add.collider(this.ball, this.paddle, paddleHit, null, this);

  cursors = this.input.keyboard.createCursorKeys();
}
function update() {
  this.bg.tilePositionX -= 1;

  if (cursors.left.isDown) {
    this.paddle.setVelocityX(-800);
  }
  else if (cursors.right.isDown) {
    this.paddle.setVelocityX(800);
  }
  else {
    this.paddle.setVelocityX(0);
  }
}

function paddleHit(ball, paddle) {
  // console.log(ball.body.position.x)
  // console.log(paddle.body.position.x)
  console.log(ball.body.position.x - paddle.body.position.x)

  if ((ball.body.position.x - paddle.body.position.x) < 40) {
    console.log('ball hit on left')
    ball.body.velocity.x += -150 * 1.1;
  } else {
    ball.body.velocity.x += +150 * 1.1;
  }
}