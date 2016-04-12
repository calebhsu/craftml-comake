$(function(){
    var courseContentArea = $("#courseContentArea");

    var courseExampleFramework = "<div class='courseArea col-md-12'>Course Info Here</div>"

    for(var i = 0; i < 5; i++)
    {
        courseContentArea.append(courseExampleFramework);
    }
});
