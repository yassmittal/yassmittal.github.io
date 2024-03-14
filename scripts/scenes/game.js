class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }
  preload() {

    this.asteroids = ["asteroid1", "asteroid2", "asteroid3"];

    this.asteroids.forEach(asteroid => {
      this.load.image(`${asteroid}`, `./assets/tackels/${asteroid}.png`)
    })

    this.load.image('background', "./assets/background/bg_single_1536x3840.png");
    this.load.image('anamoly', "./assets/objects/spaceObjects/space_object_anomaly.png")
    this.load.image('galaxy', "./assets/objects/spaceObjects/space_object_galaxy.png")
    this.load.image('planetsunrise', "./assets/objects/spaceObjects/space_object_planetsunrise.png")

    this.load.atlas('monkey',
      './assets/spriteSheet/monkey/monkey.png', './assets/spriteSheet/monkey/monkey.json');

    this.load.image('banana', "./assets/tackels/powerup_banana.png")
    this.load.image('powerUpBlue', "./assets/tackels/powerup_blue.png")
    this.load.image('powerUpRed', "./assets/tackels/powerup_red.png")

    this.load.image('alienSideGreen', "./assets/objects/enemies/alien_side_green.png")
    this.load.image('alignTop1', "./assets/objects/enemies/alien_top_01.png")
    this.load.image('alignTop2', "./assets/objects/enemies/alien_top_02.png")

    this.load.image('spaceFlier', "/assets/objects/spaceFlier/spaceflier_01_a.png")

    this.load.audio('bgMusic', './assets/sounds/backgroundMusic.mp3');
    this.load.audio('achievement', './assets/sounds/achievement.wav');
    this.load.audio('powerUp', "./assets/sounds/powerUp.mp3")


  }
  create() {
    const { width, height } = this.scale;

    const bgMusic = this.sound.add('bgMusic');
    const achievementSound = this.sound.add('achievement');
    const powerUpSound = this.sound.add('powerUp');








    bgMusic.play()
    this.score = 0;

    this.bg = this.add.tileSprite(0, 0, width * 5 / 2, height * 5 / 2, 'background').setOrigin(0, 0).setScale(0.4);


    // this.banana = this.physics.add.sprite(Phaser.Math.Between(30, width), -50, 'banana')
    //   .setScale(0.6)


    let spaceFlier = this.add.sprite(Phaser.Math.Between(0, width), Phaser.Math.Between(50, height), 'spaceFlier').setScale(0.4);

    spaceFlier.rotation = Phaser.Math.DegToRad(90);


    this.showcaseObjects = [
      this.add.sprite(Phaser.Math.Between(0, width), Phaser.Math.Between(50, height), 'anamoly').setScale(0.4),
      this.add.sprite(Phaser.Math.Between(0, width), Phaser.Math.Between(50, height), 'galaxy').setScale(0.2),
      this.add.sprite(Phaser.Math.Between(0, width), Phaser.Math.Between(50, height), 'planetsunrise').setScale(0.15),
    ];

    this.banana = this.physics.add.sprite(width / 2, -50, 'banana')
      .setScale(0.6);

    this.powerUpBlue = this.physics.add.sprite(width / 2, 0, 'powerUpBlue')
      .setScale(0.7);

    this.asteroidsSprites = []

    this.asteroids.forEach((asteroid) => {
      this.asteroidsSprites.push(
        this.physics.add.sprite(Phaser.Math.Between(0, width), Phaser.Math.Between(50, height), `${asteroid}`).setScale(0.7)
      )
    })



    this.asteroidsSprites.forEach(asteroidsSprite => {
      console.log(asteroidsSprite)
      // this.physics.add.collider(this.monkey, asteroidsSprite, () => {
      //   console.log('game over')
      // })

    })

    // this.banana.setRandomPosition(0, 0, width, 0);


    this.monkey = this.physics.add.sprite(width / 2, height - 60, 'monkey')
      .setScale(0.6)
      .setCollideWorldBounds(true);

    this.anims.create({
      key: 'fly',
      frames: this.anims.generateFrameNames('monkey', {
        start: 1,
        end: 2,
        prefix: "spacemonkey_fly0",
        suffix: ".png"
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.monkey.anims.play('fly', true)

    this.physics.add.collider(this.monkey, this.banana, () => {
      this.banana.disableBody(true, true)
      this.score += 10;
      console.log(this.score)
      achievementSound.play()
    }, null, this)

    this.physics.add.collider(this.monkey, this.powerUpBlue, () => {
      this.powerUpBlue.disableBody(true, true);
      powerUpSound.play()
      // this.monkey.setScale(0.8);
      var tween1 = this.tweens.add({
        targets: this.monkey,
        scaleX: 1,
        scaleY: 1,
        duration: 2100, // Duration of the tween in milliseconds
        ease: 'easeInOut', // Easing function
        yoyo: false, // Whether to "yoyo" back to the original scale
        repeat: 0, // Number of times to repeat (-1 for infinity)
        onComplete: () => {
          //   // Action to perform once the tween is completed
          console.log("Tween completed!");
          var tween2 = this.tweens.add({
            targets: this.monkey,
            scaleX: 0.6,
            scaleY: 0.6,
            duration: 35000, // Duration of the tween in milliseconds
            ease: 'Linear', // Easing function
            yoyo: false, // Whether to "yoyo" back to the original scale
            repeat: 0 // Number of times to repeat (-1 for infinity)
          });
          //   // Add your custom action here
        },
        onCompleteScope: this,

      });


    })



    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    this.bg.tilePositionY -= 6;

    this.banana.y += 2;

    this.powerUpBlue.y += 1;

    this.showcaseObjects.forEach((object, index) => {
      this.showcaseObjects[0].y += 0.4;
      this.showcaseObjects[1].y += 1;
      this.showcaseObjects[2].y += 1.2;

      if (object.y > 800) {
        object.x = Phaser.Math.Between(0, 600);
        object.y = -120;
        // object.body.enable = true;
        // object.enableBody(true, Phaser.Math.Between(50, 600), -50, true, true);
      }
    });

    if (this.banana.y > 600) {
      this.banana.body.enable = true;
      this.banana.enableBody(true, Phaser.Math.Between(50, 600), -50, true, true);
    }

    if (this.powerUpBlue.y > 3000) {
      this.powerUpBlue.body.enable = true;
      this.powerUpBlue.enableBody(true, Phaser.Math.Between(50, 600), -50, true, true);
    }

    if (this.cursors.left.isDown) {
      this.monkey.setVelocityX(-220);
    }
    else if (this.cursors.right.isDown) {
      this.monkey.setVelocityX(220);
    }
    else {
      this.monkey.setVelocityX(0);
    }

    this.asteroidsSprites.forEach(asteroidsSprite => {
      asteroidsSprite.y += 2;
    })


  }

}

export default Game;