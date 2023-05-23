function fumos() {
    let doc = document.getElementsByClassName("fumos");
    let fumodoc = document.createElement("fumo");
    fumodoc.innerHtml = "<img src='https://m.media-amazon.com/images/I/51G22XSlZDL.jpg' alt='fumo'>";
    let fumodocs = document.createElement("fumos");
    for (let index = 0; index < 999; index++) {
        fumodoc.innerHtml += fumodoc;
    }
    return fumodocs;
}

document.body.append(fumos());