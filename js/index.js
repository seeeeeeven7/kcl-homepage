function showPapers() {
    document.getElementById("papers-show").style.display = "none";
    document.getElementById("papers-hide").style.display = "block";
    var divs = $("#papers-container table tbody tr");
    for (var i = 5; i < divs.length; ++i)
        $(divs[i]).show();
    
}

function hidePapers() {
    document.getElementById("papers-show").style.display = "block";
    document.getElementById("papers-hide").style.display = "none";
    var divs = $("#papers-container table tbody tr");
    for (var i = 5; i < divs.length; ++i)
        $(divs[i]).hide();
    location.href = "#papers";
}

function showAwards() {
    document.getElementById("awards-show").style.display = "none";
    document.getElementById("awards-hide").style.display = "block";
    var divs = $("#awards-container table tbody tr");
    for (var i = 5; i < divs.length; ++i)
        $(divs[i]).show();
}

function hideAwards() {
    document.getElementById("awards-show").style.display = "block";
    document.getElementById("awards-hide").style.display = "none";
    var divs = $("#awards-container table tbody tr");
    for (var i = 5; i < divs.length; ++i)
        $(divs[i]).hide();
    location.href = "#awards";
}

function toggle() {
    $("#mobile-nav-list").slideToggle(500);
}

$(function(){
    var wst = $(window).scrollTop(); 
    if (wst <= 160) {
        $('.header').addClass('expand');
        $('.container').addClass('expand');
    }
    else {
        $('.header').removeClass('expand');
        $('.container').removeClass('expand');
    }
    var title = ["introduction", "projects", "papers", "awards", "people"];
    for(i=0; i < title.length; i++){
        if($("#" + title[i]).offset().top <= wst) {
            // console.log(title[i]);
            $('.header .nav li').removeClass("active");
            $('.header .nav li:nth-child(' + (i + 1) + ')').addClass("active");
            $('.header .nav-list li').removeClass("active");
            $('.header .nav-list li:nth-child(' + (i + 1) + ')').addClass("active");
        }
    }
    $(window).scroll(function(){
        var wst = $(window).scrollTop(); 
        if (wst <= 160) {
            $('.header').addClass('expand');
            $('.container').addClass('expand');
        }
        else {
            $('.header').removeClass('expand');
            $('.container').removeClass('expand');
        }
        for(i=0; i < title.length; i++){
            if($("#" + title[i]).offset().top <= wst) {
                // console.log(title[i]);
                $('.header .nav li').removeClass("active");
                $('.header .nav li:nth-child(' + (i + 1) + ')').addClass("active");
                $('.header .nav-list li').removeClass("active");
                $('.header .nav-list li:nth-child(' + (i + 1) + ')').addClass("active");
            }
        }
    });
});