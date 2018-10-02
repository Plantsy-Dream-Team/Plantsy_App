$(document).ready(function(){
    
    $(".plantPic").on("click", function(){
        $(".modal").addClass("active");
    });

    $(".modal").on("click", function(){
        $(".modal").removeClass("active");
    });

    $(".plantPic").on("click", function(){
        $(".modal").addClass("green");
    });

});