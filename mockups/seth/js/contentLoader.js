$(function(){
    var courseContentArea = $("#courseContentArea");

    var courseExampleFramework = "<div><a href='#'><div class='courseArea col-md-6'><h2>Course Name Here</h2><h3>Course Instructor Here</h3></div></a><a href='#'><div class='courseArea col-md-6'><h2>Course Name Here</h2><h3>Course Instructor Here</h3></div></a></div>"

    for(var i = 0; i < 5; i++)
    {
        courseContentArea.append(courseExampleFramework);
    }

    var listCourses = $(".courseArea");

    listCourses.hover(function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)");
        $(this).css("background-blend-mode", "multiply");
    }, function(){
        $(this).css("background-color", "");
        $(this).css("background-blend-mode", "");
    });
});
