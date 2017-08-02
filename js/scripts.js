$(document).ready(function(){
    var carouselList = $('#carousel ul');
    var left = $('.left');
    var right = $('.right');
    var interval;

    interval = setInterval(slideRight, 3000);

    function slideRight () {
        carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
        carouselList.css({marginLeft: -600});
    }

    function slideLeft() {
        // najpierw przenosimy ostatni przed pierwszym
        moveLastSlide();
        carouselList.animate({'marginLeft': 0}, 500);
    }

    left.click(function() {
        slideLeft();
    });

    right.click(function() {
        slideRight();
    });

    $('#carousel').hover(
        function() {
            clearInterval(interval);
        },
        function() {
            interval = setInterval(slideRight, 3000);
        }
    );
});