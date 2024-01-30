let player;
let enemies;
let enemiesToSpawn = 10;
let enemiesLeft = enemiesToSpawn;
let enemiesAreSafe;

// Heath points or Hit Points 
let hitPoints = 5;
let hitPointsString = "HP: ";
let hitPointsText;

let cursors

//Score
let score = 0;
let scoreString = "Score: ";
let scoreText;

let introText;

//Game Started Boolean
let gameStarted;

//Game Ended Boolean
let gameEnded;

let gamePlay = new Phaser.Class({
  //Define Scene

  Extends: Phaser.Scene,
  initialize: function GamePlay() {
    Phaser.Scene.call(this, {
      key: "GamePlay"
    })
  },


  preload: function () {
    this.load.image("sky", "https://raw.githubusercontent.com/cattsmall/Phaser-game/5-2014-game/assets/sky.png")
    this.load.spritesheet('dude', "https://raw.githubusercontent.com/cattsmall/Phaser-game/5-2014-game/assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    });

    this.load.spritesheet('buddie', "https://raw.githubusercontent.com/cattsmall/Phaser-game/5-2014-game/assets/baddie.png", {
      frameWidth: 32,
      frameHeight: 32,
    })

  },

  create: function () {
    this.physics.add.sprite(config.width / 2, config.height / 2, "sky");

    player = this.physics.add.sprite(32, config.height - 150, 'dude');


    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 0 }),
      repeat: -1
    })

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("dude", { start: 1, end: 1 }),
      repeat: -1
    })

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 2, end: 2 }),
      repeat: -1
    })

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("dude", { start: 3, end: 3 }),
      repeat: -1
    })

    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    enemiesAreSafe = true;

    enemies = this.physics.add.staticGroup({
      key: "buddie",
      repeat: enemiesToSpawn - 1
    })

    enemies.children.iterate(function (enemy) {
      console.log('enemy made')
      enemy.setX(Phaser.Math.FloatBetween(32, config.width - 32))
      enemy.setY(Phaser.Math.FloatBetween(32, config.height - 32))
    })

    this.anims.create({
      key: "safe",
      frames: this.anims.generateFrameNumbers("buddie", { start: 1, end: 1 }),
      repeat: -1
    })

    this.anims.create({
      key: "unsafe",
      frames: this.anims.generateFrameNumbers("buddie", { start: 0, end: 0 }),
      repeat: -1
    })

    enemies.refresh();

    scoreText = this.add.text(32, 32, scoreString + score);
    scoreText.visible = false

    hitPointsText = this.add.text(32, 70, hitPointsString + hitPoints);
    hitPointsText.visible = false

    introText = this.add.text(32, 32, "Clear all the baddies when they're weak!  \nClick to start playing, use the keyboard to move. \n\n(Click the white area around the game to make movement work)");


    this.input.on("pointerdown", function () {
      if (!gameStarted) {
        startGame()
      }
    })

    let timedEvent = this.time.addEvent({
      delay: 1000,
      callback: switchEnemyState,
      callbackScope: this,
      loop: true
    })

    this.physics.add.overlap(player, enemies, collideWithEnemy, null, this)
  },

  update: function () {
    ///update function
    player.setVelocity(0, 0)

    if (gameStarted && !gameEnded) {
      if (cursors.left.isDown) {
        player.setVelocityX(-150);
        player.anims.play('left')
      } else if (cursors.right.isDown) {
        player.setVelocityX(150)
        player.anims.play('right')
      } else if (cursors.up.isDown) {
        player.setVelocityY(-150)
        player.anims.play('up')
      } else if (cursors.down.isDown) {
        player.setVelocityY(150)
        player.anims.play('down')
      }
    }

    scoreText.setText(scoreString + score);
    hitPointsText.setText(hitPointsString + hitPoints)

  }
})


function switchEnemyState() {

  if (gameStarted && !gameEnded) {
    // console.log(enemiesAreSafe)
    if (enemiesAreSafe) {
      enemiesAreSafe = false;
      enemies.children.iterate(function (enemy) {
        enemy.anims.play('unsafe');
      })
    } else {
      enemiesAreSafe = true;
      enemies.children.iterate(function (enemy) {
        enemy.anims.play('safe');
      })

    }

    // if (enemiesAreSafe == false) {
    //   enemiesAreSafe = true;
    //   enemies.children.iterate(function (enemy) {
    //     enemy.anims.play('safe')
    //   })
    // } else {
    //   enemiesAreSafe = false;
    //   enemies.children.iterate(function (enemy) {
    //     enemy.anims.play('unsafe')
    //   })

    // }
  }
}

function collideWithEnemy(player, enemy) {

  if (gameStarted && !gameEnded) {

    console.log(enemiesAreSafe)
    if (enemiesAreSafe) {
      ++score;
    } else {
      --hitPoints
    }

    enemy.disableBody(true, true);
    --enemiesLeft;
    console.log(hitPoints)
    console.log(enemiesLeft)

    if (hitPoints <= 0) {
      killGame();
      introText.setText("Game Over! Rerun to play again");
    } else if (hitPoints > 0 && enemiesLeft <= 0) {
      introText.setText("Yey!! you won the game");
      killGame();
    }
  }

}

function startGame() {
  introText.visible = false;
  gameStarted = true;
  gameEnded = false;
  scoreText.visible = true;
  hitPointsText.visible = true;
}

function killGame() {
  introText.visible = true;
  // gameStarted = false;
  gameEnded = true;
  scoreText.visible = false;
  hitPointsText.visible = false;
  player.setVelocity(0, 0)
}
//Define the game config once everything else is defined
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    }
  },
  scene: [gamePlay]
}

let game = new Phaser.Game(config);