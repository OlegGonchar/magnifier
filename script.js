$(function(){
    var $little = $('#little');
    var $big = $('#big');

    $little.mouseleave(function(){
        $big.css('display','none');
    })
    $little.mousemove(function(e){
        $big.css('display','inline-block');
        var pos = $(this).offset();
        var elem_left = pos.left;
        var elem_top = pos.top;

        var x_little = e.pageX - elem_left;
        var y_little = e.pageY - elem_top;
        var str = coord(x_little, y_little);
        $big.css('background-position', str);
    })

// Checking that we will not see a white background behind the image
    function coord(x, y){
        if (x > 133){
            x = 133;
        };
        if (y > 133) {
            y = 133;
        }
        var x_big = -3*x;
        var y_big = -3*y;
        var str = x_big +'px ' + y_big +'px';
        return str;

    }
});