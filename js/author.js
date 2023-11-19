var sosmed = [['https://github.com/foxsroot',
				'https://www.linkedin.com/in/jerryco-axel-dinata-35115321b',
				'https://www.instagram.com/jer.dinata/'],
				
			  ['https://github.com/anrexus7',
				'https://www.linkedin.com/in/hans-38a689297',
				'https://www.instagram.com/640509_040148/'],
				
			  ['https://github.com/adrianrenardkristanto',
				'',
				'https://instagram.com/eidorian_681'],
			  
			  ['https://github.com',
				'https://www.linkedin.com',
				'https://instagram.com']]

$(document).ready(function () {
    $('img').hover(function () {
			var ini = $(this);
            $(this).siblings('div.content').animate({ top: '30px' },500);
			setTimeout(function () {
				ini.css({transform:'scale(1.2)', transition:'transform 450ms ease-in'});
			}, 50); 
            
        },
        function () {
			var ini = $(this);
            $(this).siblings('div.content').animate({ top: '0px' }, 500);
				setTimeout(function () {
					ini.css({transform:'scale(1)', transition:'transform 450ms ease-out'});
				}, 50); 
        }
	);
	
	$('.socials').on('click', function() {
		var list = $(this).closest('li.author').index();
		var media,person;
		if ($(this).parent().hasClass('social j')){
			person = list
		}else if ($(this).parent().hasClass('social h')){
			person = list
		}else if ($(this).parent().hasClass('social a')){
			person = list
		}else {
			person = list
		}
		switch ($(this).index()){
				case 0 :
				media = $(this).index();
				break;
				case 1 :
				media = $(this).index();
				break;
				case 2 :
				media = $(this).index();
				break;
		}
		window.open(sosmed[person][media]);
	});
});