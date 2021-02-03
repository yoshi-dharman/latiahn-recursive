let arrayDuplikasi = [];

function angkaDuplikasi(n,item){
    if(n <= 0){
        return "";
    }else{
        arrayDuplikasi.push(item);
        angkaDuplikasi(n-1,item);
        return arrayDuplikasi;
    }
}

console.log(angkaDuplikasi(0,3));
console.log(angkaDuplikasi(5,7));