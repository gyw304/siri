MyGame.a12 = function(game) {

};


MyGame.a12.prototype = {
    create: function() {

        this.add.image(0,0,'bg');

        var index = 12;

        askShow(this.ask_text,say[index-1].ask_text,this.ask_sound,say[index-1].ask_sound,function(){
            answerShow(this.answer_text,say[index-1].answer_text,250,this.answer_sound,say[index-1].answer_sound,say[index-1].brow,100,'a13');
        });


    }
};



