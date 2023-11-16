$(document).ready(function () {
    $('.images').hover(function () {
			var ini = $(this);
            ini.siblings('.content').animate({ top: '30px' },500);
			setTimeout(function () {
				ini.css({transform:'scale(1.2)', transition:'transform 450ms ease-in'});
			}, 50); 
            
        },
        function () {
			var ini = $(this);
            ini.siblings('.content').animate({ top: '0px' }, 500);
				setTimeout(function () {
					ini.css({transform:'scale(1)', transition:'transform 450ms ease-out'});
				}, 50); 
        });
});