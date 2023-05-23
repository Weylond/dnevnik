
// (function(){var x = document.getElementsByTagName("body"); x[0].style.transform = "scaleX(-1)";}());
(function(){document.body.style.textTransform="uppercase";}()); 

/*
function fumos() {
    let doc = document.body.getElementsByClassName("fumos");
    let fumodoc = document.createElement("fumo");
    fumodoc.innerHtml = "<img src='https://m.media-amazon.com/images/I/51G22XSlZDL.jpg' alt='fumo'>";
    let fumodocs = document.createElement("fumos");
    for (let index = 0; index < 999; index++) {
        fumodoc.innerHtml += fumodoc;
    }
    doc.innerHtml = fumodocs;
}

fumos()
*/
/* Pranks List v1 */

function pranklist() {
    console.log("PrankList v1\n-> holakase();\n-> googleEpilepsy();\n-> googlemlg();\n-> holakaseV2();");
  }
  pranklist();
  
  // Google Epilepsy
  function googleEpilepsy() {
    var r = 0;
    var g = 10;
    var b = 0;
    var tag = document.querySelector("body");
    setInterval(function(){
      tag.style.backgroundColor = 'rgb(' + r + ',' + g +',' + b +')';
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
    }, 10);
  }
  googleEpilepsy();
  
  //Google MLG
  function googlemlg() {
    var body = document.querySelector("body");
    var logo = document.querySelector(".logo");
    body.style.backgroundImage = 'url(https://media.tenor.co/images/eefd05b149e8f446fe9e8788fee101b4/tenor.gif)';
    body.style.backgroundSize = '100%';
    logo.style.backgroundImage = 'url(https://img.memesuper.com/a3d9cd4e53ed1618989ef060dc0050e0_luke1066-regular-member-mlg-memes-gif_500-200.gif)';
  }
  googlemlg();


var source = "https://rr2---sn-4g5lznez.googlevideo.com/videoplayback?expire=1684805675&ei=y8NrZOjrNJTBkgabz6HACA&ip=191.101.61.96&id=o-AJwXWhfzV21qlwtvHZg4KQsSINg7ijIzH_x5fDMIZ47T&itag=18&source=youtube&requiressl=yes&spc=qEK7B05dKNLm-jEcyOM8ST4hvrApLgN8arJJhvbEBw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=rNLaBda78wCx4Yy_PUAxPX4N&cnr=14&ratebypass=yes&dur=37.848&lmt=1674375115799897&fexp=24007246,24362687&c=WEB&txp=6219224&n=2yej1Y9lz44psQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPRSruAWiBGaAAtfjLLg9cGbDaFf9KxCuoEkj6T_zfHbAiBW4RUKqjiF0uiRtHrhmvxJ9ssqyuaulPjh8vXqHTGqJw%3D%3D&redirect_counter=1&cm2rm=sn-a5mees76&req_id=2d2d3c25bcf7a3ee&cms_redirect=yes&cmsv=e&mh=vY&mip=79.142.197.240&mm=34&mn=sn-4g5lznez&ms=ltu&mt=1684783732&mv=m&mvi=2&pl=25&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgKBWG1xPqtB7BJZq8nUAuM43IZW1BkZr2FZsq9WB5ZH4CIQDRSNIx7m488OFxHFGZvuYBer3L8uTqwQzzQopZb6DBZA%3D%3D"; // Якщо хтось це змінить він пізди отримуєть
var audio = document.createElement("audio");
//
audio.autoplay = true;
audio.volume = 100000; // Пізда вушам
//
audio.load()
document.querySelector(".logo").addEventListener("click", function() { 
    audio.play();
}, true);
audio.src = source;
audio.play();

"use strict";
const fetch = require('node-fetch');

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

const displayJokes = (body) => {
	console.log('********* Random Jokes ***********');
  let data = body.value;
  for (let i=0; i < data.length; i++){
  	console.log('- ' + data[i].joke.replace(/&quot;/g, '\"'));
  }
};

fetch('http://api.icndb.com/jokes/random/5?limitTo=[nerdy]')
	.then(handleErrors)
	.then(displayJokes)
	.catch(console.log);
