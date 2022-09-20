function katt(){

    let szam=parseFloat( document.getElementById('suly').value/(document.getElementById('magassag').value/100)*2);

    document.getElementById('index').innerHTML = szam;
}

document.getElementById('gomb').addEventListener('click',katt);