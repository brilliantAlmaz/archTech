$(document).ready(function() {
	//console.log('hi')
	

	//burger
	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		//$('.menu > .header__list').css('display', 'block')
		$('html').toggleClass('lock');
	})
	//for header links
	$('.header__link').click(function(){
		$('.burger').removeClass('active');
		$('.menu').removeClass('active');
		$('.menu > .header__list').css('display', 'block')
		$('html').removeClass('lock');
	})
	//main slider
	let count=0;
	$('.arrow-right').click(function(){
		console.log($('.main__slider .image__container').length)
		//count++;
		if (count<$('.main__slider .image__container').length-1){
			count++;
		}
		else{
			count=0;
		}
		$('.main__slider').css('transform', `translate(-${count * $(window).width()}px,0)`);
	});
	$('.arrow-left').click(function(){
		if (count>0){
			count--;
		}
		else{
			count=$('.main__slider .image__container').length-1;
		}
		$('.main__slider').css('transform', `translate(-${count * $(window).width()}px,0)`);
	})


	//slider quotes
	let countQ=0;
	for (let i=0; i<$('.quotes__item').length; i++){
		$('.quotes__nav').prepend('<div class="navigation__item"><div>')
	};
	$('.navigation__item')[0].classList.add('active')
	//btn next
	$('.arrow__next').click(function(){ 
		if (countQ < $('.quotes__item').length-1){
			countQ++;
		}
		else{
			countQ=0;
		}
		$('.quotes__slider').css('transform', `translate(-${countQ*$('.quotes__container').width()}px)`)
		console.log($('.quotes__item')[countQ])
		$('.navigation__item').removeClass('active')
		$('.navigation__item')[countQ].classList.add('active')
	});
	//btn previous
	$('.arrow__prev').click(function(){
		console.log('fds')
		if (countQ > 0){
			countQ--;
		}
		else{
			countQ=$('.quotes__item').length-1;
		}
		$('.quotes__slider').css('transform', `translate(-${countQ*$('.quotes__container').width()}px)`)
		console.log($('.quotes__item')[countQ])
		$('.navigation__item').removeClass('active')
		$('.navigation__item')[countQ].classList.add('active')
	});


	init();
	$(window).resize(init);
	function init(){
		//set size of the main block slider
		let sliderMainItemsCount=0;
		$('.main__slider .image__container').each(function(){
			sliderMainItemsCount++;
		});
		$('.main__slider').width($(window).width() * sliderMainItemsCount);
		$('.main__slider .image__container').height($(window).height() - 100);
		//set the position of the main block's welcomeblock;
		let res = $('.main__slider .image__container').height() / 3.5;
		if ($(window).width() <=400){
			$('.welcomeblock').height($(window).height() -120 -100);
			$('.welcomeblock').css('top', `100px`);
		}
		else{
			$('.welcomeblock').height(res *2);
			$('.welcomeblock').css('top', `${res}px`);
		}

		//slider quotes
		$('.quotes__slider').css('transform', `translate(-${countQ*$('.quotes__container').width()}px)`)
		let width;
		$('.quotes__item').each(function(){
			width=0;
			console.log($(this).width())
			width += $(this).children('.quotes__textblock').width() +$(this).children('img').width() +30;
			$(this).css('padding', `0 ${($('.quotes__container').width() - width)/2}px 0`);
		})

		//about
		let height =0;
		height=$('.about__title').height() + $('.about__text').height() + 120;
		$('.about__image img').height(height);
	}
});