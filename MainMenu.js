MyGame.MainMenu = function(game) {};
var angle = { min: 0, max: 0 };
var self;
MyGame.MainMenu.prototype = {
    create: function() {
        self= this;
        this.add.image(0,0,'bg');
        this.siriLine = this.add.sprite(this.world.width/2,this.world.height - 200, 'siri_json');
        this.siriLine.anchor.set(0.5,0);
        this.siriLine.animations.add('siri_json');
        this.siriLine.animations.play('siri_json',35,true);


        this.style = { font: '60px Microsoft YaHei', fill: '#ffffff', align: 'left'};
        this.style2 = { font: '34px Microsoft YaHei', fill: '#ffffff', align: 'left'};

        this.text = this.add.text(this.world.centerX, 200, "���ߺ�ը����", this.style);
        this.text.anchor.set(0.5);
        this.add.tween(this.text).from({y:this.world.height/2,alpha:0}, 800, Phaser.Easing.Cubic.Out, true,0).onComplete.add(function(){
            this.add.tween(this.text).to({y:-200,alpha:0}, 500, Phaser.Easing.Cubic.Out, true,1500);
            this.text2 = this.add.text(this.world.centerX, this.world.height/2, "���˻������٣�", this.style);
            this.text2.alpha = 0;
            this.add.tween(this.text2).to({y:200,alpha:1}, 800, Phaser.Easing.Cubic.Out, true,1500).onComplete.add(function(){
                this.add.tween(this.text2).to({y:-200,alpha:0}, 500, Phaser.Easing.Cubic.Out, true,1500);
                this.text3 = this.add.text(this.world.centerX, this.world.height/2, "�ع���һ��", this.style);
                this.text3.anchor.set(0.5);
                this.text3.alpha = 0;
                this.add.tween(this.text3).to({y:200,alpha:1}, 800, Phaser.Easing.Cubic.Out, true,1500);
                this.add.tween(this.siriLine).to({alpha:0}, 800, Phaser.Easing.Cubic.Out, true,1500).onComplete.add(function(){
                    this.siriLine.kill();
                    this.tween.resume();
                    this.maikou = this.add.image(this.world.width/2,this.world.height - 130,'maikou');
                    this.maikou.anchor.set(0.5);
                    this.add.tween(this.maikou).from({alpha:0}, 800, Phaser.Easing.Cubic.Out, true,0);

                    this.maikou.inputEnabled = true;
                    this.maikou.events.onInputDown.add(function(){
                        angle = { min: 0, max: 0 };
                        this.state.start('a1');
                    }, this);

                    addText('�þ��Ķ���������¥��Ҳ��Ϊ��',350,this.t1,500)
                    addText('5�ν�Ϣ��׼',450,this.t2,600)
                    addText('���������ҵ�����׸��µ�',550,this.t3,700)
                    addText('Ӫҵ˰5��2����',650,this.t4,800)
                    addText('�ڶ����߷׷���Ϯ',750,this.t5,900)
                    addText('���˻������Щʵ�ڵ����ã�',850,this.t6,1000)
                },this)
            },this)
            this.text2.anchor.set(0.5);
        },this);

        this.graphics = this.add.graphics(0, 0);
        this.tween = this.add.tween(angle).to( { max: 360 }, 1000, Phaser.Easing.Cubic.Out, true, 0)
        this.tween.pause();

    },
    update : function(){
        this.graphics.clear();
        this.graphics.lineStyle(5, 0xffffff);
        this.graphics.arc(this.world.width/2, this.world.height - 130, 80, angle.min, this.math.degToRad(angle.max), false);
        this.graphics.endFill();
    }
};

function addText(content,top,id,time)
{
    id = self.add.text(self.world.centerX, top, content, self.style2);
    id.anchor.set(0.5);
    self.add.tween(id).from({y:top+500,alpha:0}, 700, Phaser.Easing.Cubic.Out, true,time);
}