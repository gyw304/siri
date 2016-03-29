var MyGame = {};
MyGame.Boot = function(game) {
    MyGame.GAME_WIDTH = 750;
    MyGame.GAME_HEIGHT = 1206;
};
MyGame.Boot.prototype = {
    preload: function() {
        this.load.image('bg','assets/bg.jpg');
        this.load.atlasJSONHash('loading_json', 'assets/loading_json.png', 'assets/loading_json.json');
    },
    create: function() {
        this.stage.backgroundColor = '#2d2d2d';
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader');
    }
};