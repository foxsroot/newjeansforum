$(document).ready(function () {
	var content = [
		'https://www.youtube.com/embed/8pMReO11Ln8?si=omROYc2I_1GWVZt9',
		'https://www.youtube.com/embed/iEr6m_QCtFo?si=teeH1NRrSMJ9QYyN',
		'https://www.youtube.com/embed/GLGk6TGANP8?si=WUDbXeLaBosEhvF9'
	];
	var text = [
		'halo 1',
		'halo 2',
		'halo 3'
	];
	var i= 0;

	$('.slide-dots p').on('click', function () {
        var dots = $('.slide-dots p').index(this);
        i = dots;
		update();
    });
	
	$('.button').on('click', function () {
		if ($(this).hasClass('next')) {
			i = (i + 1);
		}else {
			i = (i - 1 + content.length);
		}
		update();
    });
	
	function update(){
		i %=content.length;
		
		$('#iFrame').attr('src', content[i]);
        $('.slide-text p').text(text[i]);
		$('.slide-dots p').css('background-color', 'grey');
        $('.slide-dots p').eq(i).css('background-color', 'white');
	}

	$('.slide-dots p').hover(function () {
		$(this).css('background-color', 'white');
	},function () {
		if ($(this).index() === i) {
			$(this).css('background-color', 'white');
		} else {
			$(this).css('background-color', 'grey');
		}
	});
});