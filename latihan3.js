function angkaKali2(n){
    if(n == 1){
        return 3;
    }else{
        return 2 * angkaKali2(n-1)
    }
}

console.log(angkaKali2(5));