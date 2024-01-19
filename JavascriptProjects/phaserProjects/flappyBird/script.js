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
  this.add.image(144, 256, 'bg');

  this.add.image(144, 256, 'initialMsg');
  const bird = this.add.sprite(60, 60, 'bird');
  // 320 height of pipe 

  pillars = this.physics.add.staticGroup();

  pillars.create(200, 160, 'TopPipe');
  pillars.create(26, 352, 'bottomPipe');




}

function update() {
}