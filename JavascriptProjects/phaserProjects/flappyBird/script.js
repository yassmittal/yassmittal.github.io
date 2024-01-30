var config = {
  type: Phaser.AUTO,
  width: 288,
  height: 512,
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

var pillars;
var bird;

function preload() {
  this.load.image('initialMsg', 'assets/images/message-initial.png');
  this.load.image('bg', 'assets/images/background-day.png');
  this.load.spritesheet('bird', 'assets/images/bird-blue-sprite.png', {
    frameWidth: 34,
    frameHeight: 24,
  });

  this.load.image('bottomPipe', 'assets/images/pipe-green-bottom.png');
  this.load.image('TopPipe', 'assets/images/pipe-green-top.png')
}


function create() {

  this.bg = this.add.tileSprite(0, 0, 288, 512, 'bg').setOrigin(0, 0);

  this.add.image(144, 256, 'initialMsg');
  pillars = this.physics.add.staticGroup();

  pillars.create(200, 160, 'TopPipe');
  pillars.create(26, 352, 'bottomPipe');

  bird = this.physics.add.sprite(60, 60, 'bird');
  bird.setBounce(0.2);
  bird.setCollideWorldBounds(true);

  this.physics.add.collider(bird, pillars);

  this.anims.create({
    key: 'fly',
    frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 2 }),
    frameRate: 12,
    repeat: -1
  });


  bird.anims.play('fly', true);
  // cursors = this.input.keyboard.createCursorKeys();

}

function update() {
  this.input.keyboard.on('keydown', () => {
    bird.setVelocityY(-100);
  })

  this.bg.tilePositionX += 2;

}