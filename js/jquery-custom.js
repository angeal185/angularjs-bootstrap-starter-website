

$('#div1').load('assets/pages/index.html');

$(document).ready(function() {
	$('body').on('click', '.social__ico', function() {
		$('.social').toggleClass('social_open');
	});
});



(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  })();

$('.main-footer').hover(
    function() {
        $(this).stop(true,true).animate({
            bottom: '0px'
        },200)
    },
    function() {
        $(this).stop(true,true).animate({
            bottom: '-40px'
        },1000)
    }
);
//themes




jQuery(function(){
	document.getElementById('thmA');
	jQuery('#thmA').click(function(){
		$('body').get('themes.js')}
					);
				});



$(document).ready(function () {
    $("#cerulean").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/cerulean.css');
    });
});

$(document).ready(function () {
    $("#cosmo").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/cosmo.css');
    });
});
$(document).ready(function () {
    $("#cyborg").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/cyborg.css');
    });
});

$(document).ready(function () {
    $("#darkly").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/darkly.css');
    });
});

$(document).ready(function () {
    $("#flatly").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/flatly.css');
    });
});

$(document).ready(function () {
    $("#journal").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/journal.css');
    });
});

$(document).ready(function () {
    $("#lumen").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/lumen.css');
    });
});

$(document).ready(function () {
    $("#paper").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/paper.css');
    });
});

$(document).ready(function () {
    $("#readable").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/readable.css');
    });
});

$(document).ready(function () {
    $("#sandstone").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/sandstone.css');
    });
});

$(document).ready(function () {
    $("#simplex").click(function () {
       $('head > link').filter(':first').attr('href', 'css/stylus.css');
    });
});

$(document).ready(function () {
    $("#slate").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/slate.css');
    });
});

$(document).ready(function () {
    $("#spacelab").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/spacelab.css');
    });
});

$(document).ready(function () {
    $("#superhero").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/superhero.css');
    });
});

$(document).ready(function () {
    $("#united").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/united.css');
    });
});

$(document).ready(function () {
    $("#yeti").click(function () {
       $('head > link').filter(':first').attr('href', 'themes/yeti.css');
    });
});