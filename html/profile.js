$(document).ready(function(){
    
    $(".plantPic").on("click", function(){
        $(".modal").addClass("active");
    });

    $(".modal").on("click", function(){
        $(".modal").removeClass("active");
    });

    $(".proPic").on("click", function(){
        $(".picModal").addClass("on");
    });

    $(".picModal").on("click", function(){
        $(".picModal").removeClass("on");
    });
    
    $(".btnR").on("click", function(){
        $(".modal").addClass("active");
    });

});