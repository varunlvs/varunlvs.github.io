var displayCover;
displayCover = false;
/*======================================================
						Preloader
======================================================*/

$(window).on('load',function(){
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});

// CUSTOM
init();

function init() {
	document.getElementById('cover').style.display = 'none';
}

document.getElementById('toggle').addEventListener('click',function(){

	toggleDisplay();
});

function toggleDisplay() {
    displayCover === 0 ? displayCover = 1 : displayCover = 0;

    console.log(displayCover);

    if(displayCover==0)
		document.getElementById('cover').style.display = 'block';
	else
		document.getElementById('cover').style.display = 'none';


}
