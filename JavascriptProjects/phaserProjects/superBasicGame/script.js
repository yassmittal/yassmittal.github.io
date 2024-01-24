class MainScene {
  //
  preload() {
    //
    this.load.image('player', 'bird.png');
    this.load.image('coin', 'coin.jpg')

  }

  create() {
    this.score = 0;
    this.player = this.physics.add.sprite(200, 300, "player");
    this.coin = this.physics.add.sprite(200, 300, 'coin').setScale(.01);


    let style = { font: '20px Arial', fill: '#fff' };

    this.scoreText = this.add.text(20, 20, "score: " + this.score, style);

    this.arrow = this.input.keyboard.createCursorKeys();

  }

  update() {



    if (this.physics.overlap(this.player, this.coin)) {
      this.hit()
    }

    if (this.arrow.right.isDown) {
      this.player.x += 3;
      console.log(this.player.x)
    } else if (this.arrow.left.isDown) {
      this.player.x -= 3;
    }

    if (this.arrow.up.isDown) {
      this.player.y -= 3;
    } else if (this.arrow.down.isDown) {
      this.player.y += 3;
    }
    //

  }


  hit() {
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);


    this.scoreText.setText('Score: ' + this.score)
    this.score += 10;

    this.tweens.add({
      targets: this.player,
      duration: 200,
      scaleX: 1.2,
      scaleY: 1.2,
      yoyo: true,
    })
  }





}




new Phaser.Game({
  width: 700,
  height: 400,
  backgroundColor: "#3a3b73",
  scene: MainScene,
  physics: {
    default: "arcade"
  },
  parent: "game"

})