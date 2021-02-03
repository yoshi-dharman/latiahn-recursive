function angkaDuplikasi(n,item){
    let arrayDuplikasi = [];

    if(n <= 0){
        return [];
    }else{
        arrayDuplikasi = angkaDuplikasi(n-1,item);
        arrayDuplikasi.push(item);
        return arrayDuplikasi;
    }
}

console.log(angkaDuplikasi(0,3));
console.log(angkaDuplikasi(3,7));
console.log(angkaDuplikasi(5,7));
console.log(angkaDuplikasi(-1,7));