
let mainScene = new Phaser.Class({
  //Define Scene
  Extends: Phaser.Scene,
  initialize: function mainScene() {
    Phaser.Scene.call(this, {
      key: "mainScene"
    })
  },


  preload: function () {
    this.load.image('tiles', 'assets/tilemaps/tiles/dungeon-16-16.png');
    this.load.tilemapTiledJSON('tileMap', 'assets/tilemaps/json/dungeon.json');
  },

  create: function () {

    const map = this.make.tilemap({ key: 'tileMap' })

    const tileSet = map.addTilesetImage('dungeon', 'tiles')

    const Ground = map.createLayer('Ground', [tileSet]);
    const Walls = map.createLayer('Walls', [tileSet]);
    const Walls2 = map.createLayer('Walls', [tileSet]);
    // map.createStaticLayer('Walls', tileSet)

  },

  update: function () {
  }
})




let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  scene: [mainScene]
}

let game = new Phaser.Game(config);