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

	$('.slide-dots p').on("click", function () {
        var dots = $('.slide-dots p').dots(this);
        i = dots % content.length;
		update();
    });
	
	$('[button-banner]').on('click', function () {
        var operator = $(this).data('bannerButton') === 'next' ? -1 : 1
		i = (i + operator) % content.length;
		update();
    });
	
	function update(){
		$('#iFrame').attr('src', content[i]);
        $('.slide-text p').text(text[i]);
        $('.slide-dots p').eq(i).css('background-color', 'white');
		$('.slide-dots p').css('background-color', 'grey');
	}
});