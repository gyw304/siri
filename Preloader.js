MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {

    create:function(){
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);

        this.add.image(0,0,'bg');

        this.loading = this.add.sprite(this.world.width/2,this.world.height/2, 'loading_json');
        this.loading.anchor.set(0.5);
        this.loading.animations.add('loading_json');
        this.loading.animations.play('loading_json',15,true);


        this.text = this.add.text(this.world.width/2, this.world.height/2+150, '', { fill: '#fff' });
        this.text.anchor.set(0.5);
        this.start();
    },
    start:function(){


        this.load.atlasJSONHash('siri_json', 'assets/siri_json.png?2', 'assets/siri_json.json?2');
        this.load.image('maikou','assets/maikou.png');


        this.load.audio('1-1', 'assets/1-1.mp3');
        this.load.audio('1-2', 'assets/1-2.mp3');
        this.load.image('brow1', 'assets/brow1.png');

        this.load.audio('2-1', 'assets/2-1.mp3');
        this.load.audio('2-2', 'assets/2-2.mp3');
        this.load.image('brow2', 'assets/brow2.png');

        this.load.audio('3-1', 'assets/3-1.mp3');
        this.load.audio('3-2', 'assets/3-2.mp3');
        this.load.image('brow3', 'assets/brow3.png');

        this.load.audio('4-1', 'assets/4-1.mp3');
        this.load.audio('4-2', 'assets/4-2.mp3');
        this.load.image('brow4', 'assets/brow4.png');

        this.load.audio('5-1', 'assets/5-1.mp3');
        this.load.audio('5-2', 'assets/5-2.mp3');
        this.load.image('brow5', 'assets/brow5.png');

        this.load.audio('6-1', 'assets/6-1.mp3');
        this.load.audio('6-2', 'assets/6-2.mp3');
        this.load.image('brow6', 'assets/brow6.png');

        this.load.audio('7-1', 'assets/7-1.mp3');
        this.load.audio('7-2', 'assets/7-2.mp3');
        this.load.image('brow7', 'assets/brow7.png');

        this.load.audio('8-1', 'assets/8-1.mp3');
        this.load.audio('8-2', 'assets/8-2.mp3');
        this.load.image('brow8', 'assets/brow8.png');

        this.load.audio('9-1', 'assets/9-1.mp3');
        this.load.audio('9-2', 'assets/9-2.mp3');
        this.load.image('brow9', 'assets/brow9.png');

        this.load.audio('10-1', 'assets/10-1.mp3');
        this.load.audio('10-2', 'assets/10-2.mp3');
        this.load.image('brow10', 'assets/brow10.png');

        this.load.audio('11-1', 'assets/11-1.mp3');
        this.load.audio('11-2', 'assets/11-2.mp3');
        this.load.image('brow11', 'assets/brow11.png');

        this.load.audio('12-1', 'assets/12-1.mp3');
        this.load.audio('12-2', 'assets/12-2.mp3');
        this.load.image('brow12', 'assets/brow12.png');

        this.load.audio('13-1', 'assets/13-1.mp3');
        this.load.audio('13-2', 'assets/13-2.mp3');
        this.load.image('brow13', 'assets/brow13.png');

        this.load.image('over-button', 'assets/over-button.png');
        this.load.image('replay-button', 'assets/replay-button.png');
        this.load.image('end', 'assets/end.png');

        this.load.image('nav-button', 'assets/nav-button.png');
        this.load.image('close-button', 'assets/close-button.png');
        this.load.image('share-button', 'assets/share-button.png');
        this.load.image('nav_bb', 'assets/nav_bb.png');

        this.load.image('nav_1', 'assets/nav_1.png');
        this.load.image('nav_2', 'assets/nav_2.png');
        this.load.image('nav_3', 'assets/nav_3.png');
        this.load.image('nav_4', 'assets/nav_4.png');
        this.load.image('nav_5', 'assets/nav_5.png');
        this.load.image('nav_6', 'assets/nav_6.png');
        this.load.image('nav_7', 'assets/nav_7.png');

        this.load.image('alert', 'assets/alert.png');

        this.load.start();
    },
    fileComplete:function(progress){
        this.text.setText("LOADING - " + progress + "%");
    },
    loadComplete:function(){
        this.state.start('MainMenu');
    }


    /*preload: function() {

        this.loadBar = this.add.group();
        this.loadBar.create(0,0,'loadingBar_0');
        this.preloadBar = this.loadBar.create(0,0,'loadingBar_1');
        console.log(this.load)
        this.load.setPreloadSprite(this.preloadBar);
        this.loadBar.y = MyGame.GAME_HEIGHT/2;


        /!*this.load.image('game_bg','assets/bg.jpg');
        this.load.image('bird','assets/bird.png');
        this.load.image('wall_left','assets/wall.jpg');
        this.load.image('wall_right','assets/wall.jpg');
        this.load.image('nail_top','assets/nail_top.png?1');
        this.load.image('nail_bottom','assets/nail_bottom.png?1');
        this.load.image('nail_left','assets/nail_left.png?1');
        this.load.image('nail_right','assets/nail_right.png?1');
        this.load.image('button-rest','assets/restBtn.png');*!/

    },
    create: function() {
        //this.state.start('MainMenu');
    }*/
};