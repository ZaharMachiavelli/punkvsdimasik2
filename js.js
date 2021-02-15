
let game = document.querySelector(".game");
let res = document.querySelector(".res");
let btnGame = document.querySelector(".new-game");
let fields = document.querySelectorAll(".field");
var step = false;
var count = 0;
let audio = new Audio('img/MainMenu.mp3');
let data = {
	x:0,
	y:0,
	number:0
};
let allow=true;
let pictures = ["Punk.jpg","Dimasik.jpg","bitch.jpg","fedmc.jpg","lil.jpg","stick.jpg"];
let names =["PUNK","DIMASIK","BITCH","FEDMC","PEREZ","VETKA"];


function win() {

	let comb = [
	[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[0,3,6],[2,5,8],[2,4,6]
	];

	for(let i=0;i<comb.length;i++) {
		if(fields[comb[i][0]].classList.contains('x') && fields[comb[i][1]].classList.contains('x') && fields[comb[i][2]].classList.contains('x')) {
			setTimeout(()=> {
				fields[comb[i][0]].classList.add('active');
				fields[comb[i][1]].classList.add('active');
				fields[comb[i][2]].classList.add('active');
				res.innerText = `${names[data.x]} WINS!`;
			}, 500)
			$(".field").unbind();
			allow=false;
		}

		else if(fields[comb[i][0]].classList.contains('o') && fields[comb[i][1]].classList.contains('o') && fields[comb[i][2]].classList.contains('o')) {
			setTimeout(()=> {
				fields[comb[i][0]].classList.add('active');
				fields[comb[i][1]].classList.add('active');
				fields[comb[i][2]].classList.add('active');
				res.innerText = `${names[data.y]} WINS!`;
			}, 500)
			$(".field").unbind();
			allow=false;
		}
	}
	if (count==9 && allow) {
			res.innerText = "Ничья";
			$(".field").unbind();
			
		}

}





$(function() {

function stop() {
		$(".hero-choise").css('display', 'none');
		$(".new-game").css('display', 'block');
		$(".game").css('display', 'flex');
		$(".res").text("");
		$(".res").addClass('winner');
		audio.play();
}

var handler = function() {
	if (step) {
		if(!($(this).hasClass('x') || $(this).hasClass('o'))) {
			$(this).css('backgroundImage', `url(img/${pictures[data.y]})`);
			++count;
			$(this).addClass("o");
			step=!step;
			win();
		}
		
	}
	else {
		if(!($(this).hasClass('x') || $(this).hasClass('o'))) {
			$(this).css('backgroundImage', `url(img/${pictures[data.x]})`);
			++count;
			$(this).addClass("x");
			step=!step;
			win();
		}
	}
}

$(".field").bind("click", handler);
$(".new-game-button").click(function() {
		$(".field").bind("click", handler);
		step=false;
		count=0;
		$(".res").text("");
		$(".field").css('background-image', 'none');
		$(".field").removeClass("active");
		$(".field").removeClass("x");
		$(".field").removeClass("o");
		audio.load();
		audio.play();
		allow=true;

	});

$(".button-back").click(function() {
	$(".field").css('background-image', 'none');
	$(".field").removeClass("active");
	$(".field").removeClass("x");
	$(".field").removeClass("o");
	count=0;
	step=false;
	$(".field").bind("click", handler);
	$(".zero").attr('src','img/Punk.jpg');
	$('.one').attr('src','img/Dimasik.jpg');
	$('.two').attr('src','img/bitch.jpg');
	$('.three').attr('src','img/fedmc.jpg');
	$('.four').attr('src','img/lil.jpg');
	$('.five').attr('src','img/stick.jpg');
	data.x=0;
	data.y=0;
	data.number=0;
	$(".game").css('display', 'none');
	$(".new-game").css('display', 'none');
	$(".res").removeClass("winner");
	$(".res").text("Choose your hero");
	$(".hero-choise").css('display', 'flex');
	allow=true;

});

$(".startgame").click(function() {
	$(".res").removeClass("start");
	$(".res").text("Choose your hero");
	$(".preview").css('display', 'none');
	$(".hero-choise").css('display', 'flex');
});

$(".zero").click(function(){
	if(data.number==0) {
		data.x=0;
		data.number++;
		$(".zero").attr('src', '#');
	}
	else if (data.number==1){
		$(".zero").attr('src', '#');
		data.y=0;
		var t = setTimeout(stop,1000);
	}
});

$(".one").click(function(){
	if(data.number==0) {
		data.x=1
		data.number++;
		$(".one").attr('src', '#');
	} 
	else if (data.number==1){
		$(".one").attr('src', '#');
		data.y=1;
		var t = setTimeout(stop,1000);
	}
});

$(".two").click( function(){
	if(data.number==0) {
		data.x=2
		data.number++;
		$(".two").attr('src', '#');
	} 
	else if (data.number==1){
		$(".two").attr('src', '#');
		data.y=2;
		var t = setTimeout(stop,1000);		
	}
});

$(".three").click(function(){
	if(data.number==0) {
		data.x=3
		data.number++;
		$(".three").attr('src', '#');
	} 
	else if (data.number==1){
		$(".three").attr('src', '#');
		
		data.y=3;
		var t = setTimeout(stop,1000);
	}
});

$(".four").click(function(){
	if(data.number==0) {
		data.x=4
		data.number++;
		$(".four").attr('src', '#');
	} 
	else if (data.number==1){
		$(".four").attr('src', '#');
		
		data.y=4;
		var t = setTimeout(stop,1000);
	}
});

$(".five").click(function(){
	if(data.number==0) {
		data.x=5
		data.number++;
		$(".five").attr('src', '#');
	} 
	else if (data.number==1){
		$(".five").attr('src', '#');
		
		data.y=5;
		var t = setTimeout(stop,1000);
	}
});

});