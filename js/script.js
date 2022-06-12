// event pada saat link
$('.page-scroll').on('click', function(e){
	

	// ambil isi dari href 
	var tujuan = $(this).attr('href');

	// mengambil element ybs
	var elemenTujuan = $(tujuan);


	// console.log(elemenTujuan.offset().top);
	// console.log($('body').scrollTop());

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top-50
	}, 1500,'easeInOutExpo');

	e.preventDefault();

});

// untuk menyimpan parallax effect

// Efek About Me

$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// console.log(wScroll);

	// efek parallax di jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// efek di portfolio
	if( wScroll > $('.portfolio').offset().top - 250 ) {
		// console.log('ok');

		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				// console.log('ok');
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});	
	}
});