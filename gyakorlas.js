function loadDoc() {
    let xhttp = new XMLHttpRequest();

    xhttp onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            myFunction = (this);
        }
    }

    xhttp.open("GET, konyvek.xml", true)
    xhttp.send();
}

function myFunction(that) {
    let XMLSzoveg =that.responseXML;
    let konyvTomb = XMLSzoveg.getelementsByTagName("konyv");

    let txt = "";

    for(let i = 0; i < konyvTomb.length; i++) {
        let szerzo = konyvTomb[i].getelementsByTagName("szerzo")[0].childNodes[0].nodeValue;
        let szerzo = konyvTomb[i].getelementsByTagName("cim")[0].childNodes[0].nodeValue;
        let szerzo = konyvTomb[i].getelementsByTagName("oldalszam")[0].childNodes[0].nodeValue;
        let szerzo = konyvTomb[i].getelementsByTagName("ar")[0].childNodes[0].nodeValue;
        let szerzo = konyvTomb[i].getelementsByTagName("kep")[0].childNodes[0].nodeValue;
        txt+= <p>szerző: ${szerzo}</p>
    }
    document.body.innerHTML= txt;
}