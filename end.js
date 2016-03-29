MyGame.end = function(game) {

};


MyGame.end.prototype = {
    create: function() {

        this.add.image(0,0,'bg');

        this.end = this.add.image(this.world.width/2,this.world.height/2 - 100,'end');
        this.end.anchor.set(0.5);
        this.add.tween(this.end).from({alpha:0}, 2700, Phaser.Easing.Cubic.Out, true,0);

        this.replayBtn = this.add.button(this.world.width/2,this.world.height - 50,'replay-button',function(){
            this.state.start('MainMenu');
        },this).anchor.set(0.5,1);



        this.add.button(50,this.world.height - 50,'nav-button',function(){
            this.state.start('nav');
        },this).anchor.set(0,1);

    }
};



