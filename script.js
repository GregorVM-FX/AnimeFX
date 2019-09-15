var men = 0;




function changeapp(){



if (localStorage.getItem(app) == "true"){
	localStorage.setItem(app, false)
	
}else{
	localStorage.setItem(app, true)
	
}

mostrarApp()

}


var dark = 0;


function menu(){
	
	
		var settings = document.getElementById("settings");
	var all = document.getElementById("all");
	var footer = document.getElementById("footer");
	
	if (men == 0){
		
		men = 1;
		settings.style.display="block";
		all.style.display="none";
		footer.style="margin-top: 1200px;"
		
	}else{
		men = 0;
		all.style.display="block";
settings.style.display="none";
footer.style="margin-top: 0px;"
	}
	
	
	
}
//fin menu




function mostrarApp(){
	
	
	var x = document.getElementById("app");
	var y = document.getElementById("botonCloseApp");
	
	if (localStorage.getItem(app) == "true"){
		
		
		x.style.opacity="0";
y.style.background="black";
		
	}else{
	
		x.style.opacity="1";
y.style.background="rgba(0,0,0,0)";

	}
	
	
	
}

//fin closeApp


function darkMode(){



if (localStorage.getItem('dark') == 1){
	localStorage.setItem('dark', 0)
	
}else{
	localStorage.setItem('dark', 1)
	
}

darkModeSee()

}


function darkModeSee(){
	
	alert("Próximamente")
	
	
	
}








function clickAnime(ind){



	var ind = Math.ceil(ind);




var listAnimeNow = [];
for (z in allAnimes[ind]){
	
	listAnimeNow.push(allAnimes[ind][z] + "*")
	
}


	localStorage.setItem('anime', listAnimeNow)
	
	window.location="anime/"
	
}











window.addEventListener('load', mostrarApp, false);














function crearDivs(){
	
	var all = document.getElementById("all");
	
	
	
	
	for (var i=0;i<allAnimes.length;i++){
		
		all.innerHTML +='<article class="articleAnime" onclick="clickAnime('+ i  +')"><img src="'+allAnimes[i].img+'" class="imgAnime" id="animeImg"></img><div class="titleAnime">'+allAnimes[i].title+'</div><div class="sinopsisAnime">'+allAnimes[i].sinopsis+'</div><div class="rate">'+allAnimes[i].rate+'</div><div class="género">'+allAnimes[i].genero+'</div><div class="descarga"><a href="'+allAnimes[i].descarga+'">Descarga Completa</a></div></article>';
		
		
		
		
	}
	
	
	
	
	
	
}



window.addEventListener('load', crearDivs, false);





function anime(){
	


var animeTitle = document.getElementById("animeTitle")
	var animeSinopsis = document.getElementById("animeSinopsis")
	var animeRate = document.getElementById("animeRate")
	var animeGenero = document.getElementById("animeGenero")
	var animeEpisodios = document.getElementById("animeEpisodios")
	var animeImg = document.getElementById("animeImg")

	var animeThisStr = localStorage.getItem('anime');
		var animeThis = animeThisStr.split("*");
		
		
		
		
	
		
	animeTitle.innerHTML= animeThis[1].slice(1);
	animeSinopsis.innerHTML= animeThis[5].slice(1);
	animeRate.innerHTML= animeThis[6].slice(1);
	animeGenero.innerHTML= animeThis[7].slice(1);	

animeImg.src="../"+animeThis[8].slice(1);
	
	
	
if(animeEpisodios != null){	animeEpisodios.innerText= animeThis[3].slice(1);}
		
	
	
	
}



function loadCaps(){
	
	//episodiosAnime()
	
	
	var animeThisStr = localStorage.getItem('anime');
	
	var animeThis = animeThisStr.split("*");
	
	var max = animeThis[4].slice(1)
	
	
	
	var link = "episodios"
	
	var caps = document.getElementById("caps");
	
	
	
	for (x=1;x<=max;x++){
		
		var sustituir = document.getElementById("cap" + x)
		sustituir.innerHTML = '<a  href="'+ link + '/"' + '> <span onclick="episodio(' + x + ')">Capitulo ' + x + '</span>';
		
	}
	
	
}






function episodio(x){
	
	localStorage.setItem('episodio',x)
	
	
	
}




function episodioVer(){
	
	var animeThisStr = localStorage.getItem('anime');
	
	var animeThis = animeThisStr.split("*");
	
	var anime = animeThis[1].slice(1);
	var codeAnime = animeThis[0].slice(0);
	
	
	


	var episodio = localStorage.getItem('episodio');
	
	var cap = document.getElementById("cap");
	
	cap.innerHTML=anime + ' Capitulo '+ episodio;
	
	
 
	
	

	

	
	var ul = document.getElementById("ul");
	
	
	
	for (var x=1;x<=Links[codeAnime].length;x++){
	
	servers.innerHTML += '<li class="li" onclick="cargarVideo('+x+')" id="server'+x+'">Server '+x+'</li>';}
	
	
	
	
}




function cargarVideo(x){
	
	
	
	var animeThisStr = localStorage.getItem('anime');
	
	var animeThis = animeThisStr.split("*");
	
	
	var codeAnime = animeThis[0].slice(0);
	
	var episodio = localStorage.getItem('episodio');
	
	
	
	var enlace = Links[codeAnime][x-1][codeAnime+episodio];
	
	
	
	
	var div = document.getElementById("contVideo");
	
	if(enlace.includes("mega")){
	
	
	
	var enlaceNew = "";
	
	for (var m=0;m<enlace.length;m++){
		
		if (m==16){
			
			var enlaceNew = enlaceNew + "embed";
		}else{}
		
		var enlaceNew = enlaceNew + enlace[m];
		
	}
	
	
	div.innerHTML='<iframe width="640" height="360" frameborder="0" src='+'"'+enlaceNew+'"'+' allowfullscreen></iframe>';
	
	
	
	
	}//cierra if mega
	
	else if(enlace.includes("drive")){
		
		div.innerHTML='<iframe src="'+enlace+'/preview"'+' width="640" height="480"></iframe>';
		
	
	
	}
	
	
	
	
	else{
		
		
		div.innerHTML='<video src="'+enlace+'" id="video" class="video" controls autoplay></video>';
		
		
		
	}
	
	
	
	
	
	
	
	
}







function next(){
	
	
	var animeThisStr = localStorage.getItem('anime');
	
	var animeThis = animeThisStr.split("*");
	
	var x = animeThis[4].slice(1)
	
	
	
	
	var num = localStorage.getItem('episodio');
	num = parseInt(num);

if (num == x){
		alert("No hay más episodios")
		
		next.close()
	}else{}
	localStorage.setItem('episodio',num+1);

	window.location=window.location;
}



function back(){
	
	
	
	var num = localStorage.getItem('episodio');
	num = parseInt(num);

if (num == 1){
		alert("No hay más episodios")
		
		next.close()
	}else{}
	localStorage.setItem('episodio',num-1);

	window.location=window.location;
}







function carga(){
	
	
	
	var all = document.getElementById("all");
	all.style.opacity="1";
	

}

// carga window
window.addEventListener('load', carga, false)




function clear(){
	
	localStorage.removeItem('anime');
	
	localStorage.removeItem('episodio');
	
	
}