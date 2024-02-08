var config = {
  type: Phaser.AUTO,
  width: 960,
  height: 720,
  backgroundColor: '#282525',
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
let startGameText;
let gameEndText;

let currentScoreText;
let highestScoreText;
let highestScore;

let currentScore = 0;
let spaceship;
let bullets = [];
let invaders = [];

let createBulletTimer

let isGameStarted = false;
let IsGameOver = false;

let soundOnWining;
let soundOnGameOver;
let soundOnFiring;
let soundOnKilling;

function preload() {
  this.load.image('spaceshipImg', 'assets/images/spaceship.png');
  this.load.image('invaderImg', 'assets/images/invader.png');
  this.load.image('bulletImg', 'assets/images/bullet.png')

  this.load.audio('bgMusic', 'assets/Sounds/sounds_techno.wav');
  this.load.audio('gameOver', 'assets/Sounds/GameOver.mp3');
  this.load.audio('win', 'assets/Sounds/win.mp3');
  this.load.audio('firing', 'assets/Sounds/FiringSound.mp3');
  this.load.audio('killing', 'assets/Sounds/EnemyKill.wav')
}
function create() {
  soundOnWining = this.sound.add('win')
  soundOnGameOver = this.sound.add('gameOver');
  soundOnFiring = this.sound.add('firing')
  soundOnKilling = this.sound.add('killing')
  const backgroundMusic = this.sound.add('bgMusic', { loop: true });
  backgroundMusic.play();

  spaceship = this.physics.add.sprite(config.width / 2, config.height - 50, 'spaceshipImg').setScale(0.2);
  spaceship.body.setAllowGravity(false);
  spaceship.body.setImmovable(true);
  spaceship.setCollideWorldBounds(true);

  startGameText = this.add.text(config.width / 2 - 160, config.height / 2, 'Click Anywhere To start the Game', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: "1.25rem" }).setOrigin(0, 0);
  currentScoreText = this.add.text(20, 20, `Current Score: ${currentScore}`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: "1.25rem" }).setOrigin(0, 0);
  highestScoreText = this.add.text(20, 50, `Highest Score: ${currentScore}`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: "1.25rem" }).setOrigin(0, 0);

  cursors = this.input.keyboard.createCursorKeys();
  setHighestScore()

  this.input.on('pointerdown', startGame, this);
}

function update() {

  if (cursors.left.isDown) {
    spaceship.setVelocityX(-800);
  }
  else if (cursors.right.isDown) {
    spaceship.setVelocityX(800);
  }
  else {
    spaceship.setVelocityX(0);
  }

  bullets.forEach(bullet => {
    bullet.setVelocityY(-420);
  })

  if (IsGameOver === false && isGameStarted) {
    invaders.forEach(invader => {
      if (invader.body.position.y > config.height - 30) {
        if (!IsGameOver) {
          gameOver(this)
        }
      }
    })
  }




}

function startGame() {
  isGameStarted = true;
  IsGameOver = false;
  if (!IsGameOver) {
    launchBullets(this);
    generateInvaders(this);
    startGameText.setText('')
    gameEndText && gameEndText.setText('')
    currentScore = 0;
    currentScoreText.setText(`Current Score: ${currentScore}`);


    console.log(highestScore)
    setHighestScore()
  }

}

function launchBullets(currentScene) {

  function createBullet() {
    let bullet = currentScene.physics.add.sprite(spaceship.body.position.x + 45, config.height - 100, 'bulletImg').setScale(0.005);
    bullets.push(bullet);
    soundOnFiring.play()
    invaders.forEach((invader) => {
      this.physics.add.collider(bullet, invader, bulletHit, null, this);

    })

    function bulletHit(bullet, invader) {
      bullet.disableBody(true, true);
      invader.disableBody(true, true);
      currentScore = currentScore + 100;
      currentScoreText.setText(`Current Score: ${currentScore}`);
      setHighestScore()

      soundOnKilling.play()
    }
  }

  createBulletTimer = currentScene.time.addEvent({
    delay: 100,                // ms
    callback: createBullet,
    callbackScope: currentScene,
    loop: true
  });

}

function generateInvaders(currentScene) {
  if (IsGameOver) return;
  let newInvaders = [];
  for (let i = 0; i < 60; i++) {
    newInvaders.push(currentScene.physics.add.sprite(0, 0, 'invaderImg'));
  }

  newInvaders.forEach(invader => {
    currentScene.physics.add.collider(spaceship, invader, () => {
      if (!IsGameOver) {
        gameOver(currentScene)
      }
    }, null, this);



  })

  invaders = [...invaders, ...newInvaders];


  newInvaders.forEach(invader => {
    invader.body.setAllowGravity(false);
    invader.body.setImmovable(true);
    invader.body.onCollide = true;
    invader.setBounce(1)
  })

  let positionX = 80;
  let positionY = 50;
  let invadersGroupConfig;
  function moveInvadersGroup() {
    if (isGameStarted) {
      ++positionY;
      invadersGroupConfig = {
        width: 20,
        cellWidth: 40,
        cellHeight: 30,
        x: positionX,
        y: positionY
      }
      let invadersgroup = Phaser.Actions.GridAlign(newInvaders, invadersGroupConfig);
    }

  }

  var timer = currentScene.time.addEvent({
    delay: 40,
    callback: moveInvadersGroup,
    callbackScope: currentScene,
    loop: true
  });

  var timer2 = currentScene.time.addEvent({
    delay: 5000,
    callback: () => {
      generateInvaders(currentScene);
    },
    callbackScope: currentScene,
  });

  var timer3 = currentScene.time.addEvent({
    delay: 24000,
    callback: () => {
      invaders = invaders.slice(60);
    },
    callbackScope: currentScene,
  })
}

function gameOver(currentScene) {
  isGameStarted = false;
  IsGameOver = true;
  gameEndText = currentScene.add.text(config.width / 2 - 160, config.height / 2, 'OOps! YOu Looose \n Click AnyWhere in to Restart the game', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: "1.25rem" }).setOrigin(0, 0);
  soundOnGameOver.play()
  resetGame(currentScene);
  blinkFunction(currentScene)
}

function resetGame(currentScene) {
  invaders.forEach(invader => {
    invader.disableBody(true, true);
  })

  invaders = []


  currentScene.time.removeAllEvents();
  createBulletTimer.destroy()
}

function blinkFunction(currentScene) {
  currentScene.tweens.add({
    targets: [spaceship, gameEndText],
    alpha: 0,
    ease: 'Cubic.easeOut',
    duration: 300,
    repeat: 2,
    yoyo: true
  })

}

function setHighestScore() {
  if (highestScore <= currentScore - 100) {
    localStorage.setItem('highestScore', JSON.stringify(currentScore))
  }

  highestScore = localStorage.getItem("highestScore")
    ? JSON.parse(localStorage.getItem("highestScore"))
    : 0;
  highestScoreText.setText(`Highest Score: ${highestScore}`)
}