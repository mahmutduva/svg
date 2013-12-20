$(document).ready(function(){
    $('.bird').click(function(){

        $(".bird").attr("class", "bird_action");
        $(".left").attr("class", "left_wing_action");
        $(".right").attr("class", "right_wing_action");
        move();
    });

    function move(e)
    {
        $('html').mousemove(function(e){
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            $("svg").css('margin-top',y-80);
            $("svg").css('margin-left',x-140);
            $(".text").html(x+","+y);
            if ( (y > 180 && y < 380) && (x > 68 && x < 330))
            {
                alert("çarpışma");
            }

        });
    }


});