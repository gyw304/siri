MyGame.a1 = function(game) {

};
var me;
var say = [
    {
        'ask_text' : '“Siri，听说南京今年的房价都涨\n疯了。”',
        'ask_sound' : '1-1',
        'answer_text' : '是呀！连我都受不了。',
        'answer_sound' : '1-2',
        'brow' : 'brow1'
    },
    {
        'ask_text' : '“为什么会这样呢？”',
        'ask_sound' : '2-1',
        'answer_text' : '今年政府都放出16次大招救市了，\n楼市已经疯得唻。',
        'answer_sound' : '2-2',
        'brow' : 'brow2'
    },
    {
        'ask_text' : '“这些大招跟买房人有什么关系呢？”',
        'ask_sound' : '3-1',
        'answer_text' : '举个栗子，主人你以前买二套房，\n总价200万首付要140万，现在纯\n商贷最低只需50万，改善起来很\n轻松哎。',
        'answer_sound' : '3-2',
        'brow' : 'brow3'
    },
    {
        'ask_text' : '“刷刮！那我可以申请公积金\n贷款吧？”',
        'ask_sound' : '4-1',
        'answer_text' : '对不起，我的位置显示你不在南京。',
        'answer_sound' : '4-2',
        'brow' : 'brow4'
    },
    {
        'ask_text' : '“这有什么关系呢？”',
        'ask_sound' : '5-1',
        'answer_text' : '南京暂不支持公积金异地贷款。',
        'answer_sound' : '5-2',
        'brow' : 'brow5'
    },
    {
        'ask_text' : '“其实我的工作和房子未来都在南\n京，我是在外地躲避雾霾的。”',
        'ask_sound' : '6-1',
        'answer_text' : '哦，今年5次降息后你遇上了史上\n最低利率期呢，省下的钱可以买好\n多个茶叶蛋了。。',
        'answer_sound' : '6-2',
        'brow' : 'brow6'
    },
    {
        'ask_text' : '“那公积金贷款下款快吗？”',
        'ask_sound' : '7-1',
        'answer_text' : '对不起，很遗憾地告诉你南京市公\n积金目前余额不足，想下款快你可\n以申请公转商贴息贷款或商业贷款。',
        'answer_sound' : '7-2',
        'brow' : 'brow7'
    },
    {
        'ask_text' : '“这不是坑爹吗？”',
        'ask_sound' : '8-1',
        'answer_text' : '请节哀顺变。',
        'answer_sound' : '8-2',
        'brow' : 'brow8'
    },
    {
        'ask_text' : '“那还有什么消息是对我有利的？”',
        'ask_sound' : '9-1',
        'answer_text' : '二手房营业税5改2。',
        'answer_sound' : '9-2',
        'brow' : 'brow9'
    },
    {
        'ask_text' : '“这是几个意思？”',
        'ask_sound' : '10-1',
        'answer_text' : '假如主人你有一套满2年不满5年\n的普通住宅想卖，以前你得交5.55%\n的营业税，现在100万的房子可以\n省下5.55万呐！',
        'answer_sound' : '10-2',
        'brow' : 'brow10'
    },
    {
        'ask_text' : '“听起来似乎这些政策对我们都挺\n有利的。”',
        'ask_sound' : '11-1',
        'answer_text' : '也不全是。今年南京取消了90/50\n的限制，未来说不定刚需房会变少。',
        'answer_sound' : '11-2',
        'brow' : 'brow11'
    },
    {
        'ask_text' : '“我感觉我的心在滴血。”',
        'ask_sound' : '12-1',
        'answer_text' : '记得药不能停。',
        'answer_sound' : '12-2',
        'brow' : 'brow12'
    },
    {
        'ask_text' : '“Siri，你又调皮了。”',
        'ask_sound' : '13-1',
        'answer_text' : '呵呵。',
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



