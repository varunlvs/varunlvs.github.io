$(document).ready(function(){
	$('.notes-adder').show();
	$('.character-frequency').hide();
	$('.svg-flags').hide();
	$('.hbar').hide();
	$('.vbar').hide();
	$('.YTD').hide();
	$('.dbar').hide();
	$('.splot').hide();
	$('.gminder').hide();

	$('#notes-adder').on('click',function(){
		$('.notes-adder').show();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#character-frequency').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').show();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#svg-flags').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').show();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#hbar').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').show();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#vbar').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').show();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#YTD').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').show();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#dbar').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').show();
		$('.splot').hide();
		$('.gminder').hide();
	})

	$('#splot').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').show();
		$('.gminder').hide();
	})

	$('#gminder').on('click',function(){
		$('.notes-adder').hide();
		$('.character-frequency').hide();
		$('.svg-flags').hide();
		$('.hbar').hide();
		$('.vbar').hide();
		$('.YTD').hide();
		$('.dbar').hide();
		$('.splot').hide();
		$('.gminder').show();
	})

});