(function(){

	$("div.ctrls-btn").on('click', '#search-toggle', function(){
		$('body').addClass('search-on');
	});

	$("form.search-pane").on('click', '.cancel-btn', function(){
		$('body').removeClass('search-on');
	});


	$("div.ctrls-btn").on('click', '#nav-toggle', function(){
		$('body').addClass('nav');
	});

	$("nav.navigation").on('click', 'button.hide-nav', function(){
		$('body').removeClass('nav');
	});

	$(document).on('click', 'div.overlay', function(e){
		e.stopPropagation();
		$('body').removeClass('nav');
	});

	$("div.logo-wrapper").on('mouseover', 'div.logo', function(e){
		$('body').addClass('motto-on');
	});

	$(document).on('click', 'div.overlay', function(e){
		e.stopPropagation();
		if($('body').hasClass('motto-on')){
			$('body').removeClass('motto-on');
		}
	});

})()