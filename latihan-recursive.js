// Latihan 1 ========================================

function deretAngkaGenap(n){
    if(n == 0){
        console.log(n);
    }else{
        deretAngkaGenap(n-1);
        if(n % 2 == 0){
            console.log(n);
        }
    }
}

console.log(deretAngkaGenap(8));

// Latihan 2 ========================================

function faktorial(n){
    if(n==1){
        return 1
    }else{
        return n * faktorial(n-1)
    }
}

console.log(faktorial(4));

// Latihan 3 ========================================

function angkaKali2(n){
    if(n == 1){
        return 3;
    }else{
        return 2 * angkaKali2(n-1)
    }
}

console.log(angkaKali2(5));

// Latihan 4 ========================================

function angkaBagi15(n){
    if(n <= 0){
        return 0;
    }else{
        return 1 + angkaBagi15(n-15);
    }
}

console.log(angkaBagi15(36));


// Latihan 5 ========================================

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