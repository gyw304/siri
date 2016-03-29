MyGame.nav = function(game) {

};


MyGame.nav.prototype = {
    create: function() {

        this.add.image(0,0,'bg');

        this.add.image(0,63,'nav_bb');

        this.add.button(this.world.width-30,30,'close-button',function(){
            this.state.start('end');
        },this).anchor.set(1,0);



        this.nav_1 = this.add.button(this.world.width,170,'nav_1',function(){
            window.location.href = 'http://zt.house365.com/njzt/2015/12/11/nz2/index.php'
        },this);
        this.nav_1.anchor.set(1,0);
        this.nav_1.alpha = 0;
        this.add.tween(this.nav_1).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,0);

        this.nav_2 = this.add.button(this.world.width,290,'nav_2',function(){
            this.showAlert()
        },this);
        this.nav_2.anchor.set(1,0);
        this.nav_2.alpha = 0;
        this.add.tween(this.nav_2).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,100)

        this.nav_3 = this.add.button(this.world.width,410,'nav_3',function(){
            this.showAlert()
        },this);
        this.nav_3.anchor.set(1,0);
        this.nav_3.alpha = 0;
        this.add.tween(this.nav_3).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,200)

        this.nav_4 = this.add.button(this.world.width,540,'nav_4',function(){
            this.showAlert()
        },this);
        this.nav_4.anchor.set(1,0);
        this.nav_4.alpha = 0;
        this.add.tween(this.nav_4).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,300)

        this.nav_5 = this.add.button(this.world.width,670,'nav_5',function(){
            this.showAlert()
        },this);
        this.nav_5.anchor.set(1,0);
        this.nav_5.alpha = 0;
        this.add.tween(this.nav_5).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,400)

        this.nav_6 = this.add.button(this.world.width,800,'nav_6',function(){
            this.showAlert()
        },this);
        this.nav_6.anchor.set(1,0);
        this.nav_6.alpha = 0;
        this.add.tween(this.nav_6).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,500)

        this.nav_7 = this.add.button(this.world.width,930,'nav_7',function(){
            this.showAlert()
        },this);
        this.nav_7.anchor.set(1,0);
        this.nav_7.alpha = 0;
        this.add.tween(this.nav_7).to({alpha:1}, 3000, Phaser.Easing.Cubic.Out, true,600)


        this.alert = this.add.image(this.world.width/2,this.world.height/2,'alert');
        this.alert.alpha = 0;
        this.alert.anchor.set(0.5);
        this.alert.y = 1500;

        this.alert.inputEnabled = true;
        this.alert.events.onInputDown.add(function(){
            this.alert.alpha = 0;
            this.alert.y = 1500;
        }, this);

        /*this.end = this.add.image(this.world.width/2,this.world.height/2 - 100,'end');
        this.end.anchor.set(0.5);
        this.add.tween(this.end).from({alpha:0}, 2700, Phaser.Easing.Cubic.Out, true,0);

        this.replayBtn = this.add.button(this.world.width/2,this.world.height - 50,'replay-button',function(){
            this.state.start('a1');
        },this).anchor.set(0.5,1);*/


    },
    showAlert : function(){
        this.alert.y = this.world.height/2;
        this.add.tween(this.alert).to({alpha:1}, 500, Phaser.Easing.Cubic.Out, true,0);
        this.add.tween(this.alert.scale).from({x:1.1,y:1.1}, 500, Phaser.Easing.Cubic.Out, true,0)
    }
};



