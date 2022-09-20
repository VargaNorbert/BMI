function katt(){

    let szam=parseFloat( document.getElementById('suly').value / (document.getElementById('magassag').value/100)**2).toFixed(1);

    document.getElementById('index').innerHTML = szam;


    document.getElementById('szelso').innerHTML = 'X kg';
    document.getElementById('index2').innerHTML = 'X-Y kg';

    if(szam<parseFloat(18,5)){
        document.getElementById('elso').style.backgroundColor= '#f3953e';
        document.getElementById('masodik').style.backgroundColor= 'white';
        document.getElementById('harmadik').style.backgroundColor= 'white';
        document.getElementById('negyedik').style.backgroundColor= 'white';
        document.getElementById('otodik').style.backgroundColor= 'white';
        document.getElementById('hatodik').style.backgroundColor= 'white';
    }else if(szam<25){
        document.getElementById('masodik').style.backgroundColor= '#f3953e';
        document.getElementById('elso').style.backgroundColor= 'white';
        document.getElementById('harmadik').style.backgroundColor= 'white';
        document.getElementById('negyedik').style.backgroundColor= 'white';
        document.getElementById('otodik').style.backgroundColor= 'white';
        document.getElementById('hatodik').style.backgroundColor= 'white';
    }else if(szam<30){
        document.getElementById('harmadik').style.backgroundColor= '#f3953e';
        document.getElementById('masodik').style.backgroundColor= 'white';
        document.getElementById('elso').style.backgroundColor= 'white';
        document.getElementById('negyedik').style.backgroundColor= 'white';
        document.getElementById('otodik').style.backgroundColor= 'white';
        document.getElementById('hatodik').style.backgroundColor= 'white';
    }else if(szam<35){
        document.getElementById('negyedik').style.backgroundColor= '#f3953e';
        document.getElementById('masodik').style.backgroundColor= 'white';
        document.getElementById('harmadik').style.backgroundColor= 'white';
        document.getElementById('elso').style.backgroundColor= 'white';
        document.getElementById('otodik').style.backgroundColor= 'white';
        document.getElementById('hatodik').style.backgroundColor= 'white';
    }else if(szam<40){
        document.getElementById('otodik').style.backgroundColor= '#f3953e';
        document.getElementById('masodik').style.backgroundColor= 'white';
        document.getElementById('harmadik').style.backgroundColor= 'white';
        document.getElementById('negyedik').style.backgroundColor= 'white';
        document.getElementById('elso').style.backgroundColor= 'white';
        document.getElementById('hatodik').style.backgroundColor= 'white';
    }else{
        document.getElementById('hatodik').style.backgroundColor= '#f3953e';
        document.getElementById('masodik').style.backgroundColor= 'white';
        document.getElementById('harmadik').style.backgroundColor= 'white';
        document.getElementById('negyedik').style.backgroundColor= 'white';
        document.getElementById('otodik').style.backgroundColor= 'white';
        document.getElementById('elso').style.backgroundColor= 'white';
    }
}

document.getElementById('gomb').addEventListener('click',katt);