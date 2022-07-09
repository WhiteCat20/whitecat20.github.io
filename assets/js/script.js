$(document).ready(function() {
    //hover and click effect list in sidebar
    $(".list-sidebar").click(function() {
        $(this).addClass("sidebar-hover");
        $(this).siblings().removeClass("sidebar-hover");
    });

    //home
    $("#nav-home").click(function() {
        $(".mbn").fadeOut();
        $(".mainbar-home").delay("slow").fadeIn();
        $("this").addClass("sidebar-hover");
    });

    //profile
    $("#nav-profile").click(function() {
        $(".mbn").fadeOut();
        $(".mainbar-profile").delay("slow").fadeIn();
        $("this").addClass("sidebar-hover");
    });
    //experience
    $("#nav-experience").click(function() {
        $(".mbn").fadeOut();
        $(".mainbar-experience").delay("slow").fadeIn();
        $("this").addClass("sidebar-hover");
    });
    //skills
    $("#nav-skills").click(function() {
        $(".mbn").fadeOut();
        $(".mainbar-skills").delay("slow").fadeIn();
        $("this").addClass("sidebar-hover");
    });
    //projects
    $("#nav-projects").click(function() {
        $(".mbn").fadeOut();
        $(".mainbar-projects").delay("slow").fadeIn();
        $("this").addClass("sidebar-hover");
    });
});