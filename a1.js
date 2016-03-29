MyGame.a1 = function(game) {

};
var me;
var say = [
    {
        'ask_text' : '��Siri����˵�Ͼ�����ķ��۶���\n���ˡ���',
        'ask_sound' : '1-1',
        'answer_text' : '��ѽ�����Ҷ��ܲ��ˡ�',
        'answer_sound' : '1-2',
        'brow' : 'brow1'
    },
    {
        'ask_text' : '��Ϊʲô�������أ���',
        'ask_sound' : '2-1',
        'answer_text' : '�����������ų�16�δ��о����ˣ�\n¥���Ѿ���Æ���',
        'answer_sound' : '2-2',
        'brow' : 'brow2'
    },
    {
        'ask_text' : '����Щ���и�������ʲô��ϵ�أ���',
        'ask_sound' : '3-1',
        'answer_text' : '�ٸ����ӣ���������ǰ����׷���\n�ܼ�200���׸�Ҫ140�����ڴ�\n�̴����ֻ��50�򣬸���������\n���ɰ���',
        'answer_sound' : '3-2',
        'brow' : 'brow3'
    },
    {
        'ask_text' : '��ˢ�Σ����ҿ������빫����\n����ɣ���',
        'ask_sound' : '4-1',
        'answer_text' : '�Բ����ҵ�λ����ʾ�㲻���Ͼ���',
        'answer_sound' : '4-2',
        'brow' : 'brow4'
    },
    {
        'ask_text' : '������ʲô��ϵ�أ���',
        'ask_sound' : '5-1',
        'answer_text' : '�Ͼ��ݲ�֧�ֹ�������ش��',
        'answer_sound' : '5-2',
        'brow' : 'brow5'
    },
    {
        'ask_text' : '����ʵ�ҵĹ����ͷ���δ��������\n������������ض�������ġ���',
        'ask_sound' : '6-1',
        'answer_text' : 'Ŷ������5�ν�Ϣ����������ʷ��\n����������أ�ʡ�µ�Ǯ�������\n�����Ҷ���ˡ���',
        'answer_sound' : '6-2',
        'brow' : 'brow6'
    },
    {
        'ask_text' : '���ǹ���������¿���𣿡�',
        'ask_sound' : '7-1',
        'answer_text' : '�Բ��𣬺��ź��ظ������Ͼ��й�\n����Ŀǰ���㣬���¿�����\n�����빫ת����Ϣ�������ҵ���',
        'answer_sound' : '7-2',
        'brow' : 'brow7'
    },
    {
        'ask_text' : '���ⲻ�ǿӵ��𣿡�',
        'ask_sound' : '8-1',
        'answer_text' : '��ڰ�˳�䡣',
        'answer_sound' : '8-2',
        'brow' : 'brow8'
    },
    {
        'ask_text' : '���ǻ���ʲô��Ϣ�Ƕ��������ģ���',
        'ask_sound' : '9-1',
        'answer_text' : '���ַ�Ӫҵ˰5��2��',
        'answer_sound' : '9-2',
        'brow' : 'brow9'
    },
    {
        'ask_text' : '�����Ǽ�����˼����',
        'ask_sound' : '10-1',
        'answer_text' : '������������һ����2�겻��5��\n����ͨסլ��������ǰ��ý�5.55%\n��Ӫҵ˰������100��ķ��ӿ���\nʡ��5.55���ţ�',
        'answer_sound' : '10-2',
        'brow' : 'brow10'
    },
    {
        'ask_text' : '���������ƺ���Щ���߶����Ƕ�ͦ\n�����ġ���',
        'ask_sound' : '11-1',
        'answer_text' : 'Ҳ��ȫ�ǡ������Ͼ�ȡ����90/50\n�����ƣ�δ��˵�������跿����١�',
        'answer_sound' : '11-2',
        'brow' : 'brow11'
    },
    {
        'ask_text' : '���Ҹо��ҵ����ڵ�Ѫ����',
        'ask_sound' : '12-1',
        'answer_text' : '�ǵ�ҩ����ͣ��',
        'answer_sound' : '12-2',
        'brow' : 'brow12'
    },
    {
        'ask_text' : '��Siri�����ֵ�Ƥ�ˡ���',
        'ask_sound' : '13-1',
        'answer_text' : '�Ǻǡ�',
        'answer_sound' : '13-2',
        'brow' : 'brow13'
    }
]



var askStyle = {
    font: "38px Microsoft YaHei", fill: "#fff",
    align: "left"
};

var answerStyle = {
    font: "38px Microsoft YaHei", fill: "#fff",
    align: "left"
};

MyGame.a1.prototype = {
    create: function() {
        me = this;
        this.add.image(0,0,'bg');


        this.graphics = this.add.graphics(0, 0);
        this.graphics.beginFill(0x000000);
        this.graphics.drawRect(0, 0, this.world.width,this.world.height);
        this.graphics.endFill();
        this.add.tween(this.graphics).to({alpha:0},100,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            askShow(this.ask_text,say[0].ask_text,this.ask_sound,say[0].ask_sound,function(){
                answerShow(this.answer_text,say[0].answer_text,250,this.answer_sound,say[0].answer_sound,say[0].brow,50,'a2');
            });
        },this);


    }
};

function askShow(id,content,soundId,soundKey,callBack)
{

    me.siriLine = me.add.sprite(me.world.width/2,me.world.height - 200, 'siri_json');
    me.siriLine.anchor.set(0.5,0);
    me.siriLine.animations.add('siri_json');
    me.siriLine.animations.play('siri_json',35,true);


    id = me.add.text(me.world.width-50, 50, content, askStyle);
    id.anchor.set(1,0);
    me.add.tween(id).from({x:me.world.width+750}, 700, Phaser.Easing.Cubic.Out, true,0);

    soundId = me.add.audio(soundKey);
    soundId.play();

    soundId.onStop.add(callBack, me);

}

function answerShow(id,content,top,soundId,soundKey,brow,browTop,state)
{
    id = me.add.text(50, top, content, answerStyle);
    me.add.tween(id).from({x:-750}, 700, Phaser.Easing.Cubic.Out, true,0);

    me.brow = me.add.image(0,browTop,brow);
    me.add.tween(me.brow).from({x:20,alpha:0}, 700, Phaser.Easing.Cubic.Out, true,1000);
    id.addChild(me.brow)
    soundId = me.add.audio(soundKey);
    soundId.play();

    soundId.onStop.add(function(){
        me.add.tween(me.siriLine).to({alpha:0}, 800, Phaser.Easing.Cubic.Out, true,0).onComplete.add(function(){
            me.siriLine.kill()
        },me)
        if(state == 'over')
        {
            me.maikou = me.add.image(this.world.width/2,me.world.height - 130,'over-button');
            me.maikou.anchor.set(0.5);
            me.add.tween(me.maikou).from({alpha:0}, 800, Phaser.Easing.Cubic.Out, true,0)
            me.maikou.inputEnabled = true;
            me.maikou.events.onInputDown.add(function(){
                me.state.start('end');
            }, me);
        }
        else
        {
            me.maikou = me.add.image(this.world.width/2,me.world.height - 130,'maikou');
            me.maikou.anchor.set(0.5);
            me.add.tween(me.maikou).from({alpha:0}, 800, Phaser.Easing.Cubic.Out, true,0)
            me.graphics2 = me.add.graphics(0, 0);
            me.graphics2.lineStyle(5, 0xffffff);
            me.graphics2.arc(me.world.width/2, me.world.height - 130, 80, 0, 360, false);
            me.graphics2.endFill();

            me.maikou.inputEnabled = true;
            me.maikou.events.onInputDown.add(function(){
                me.state.start(state);
            }, me);
        }

    },me)

}



