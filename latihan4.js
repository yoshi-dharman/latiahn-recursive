function angkaBagi15(n){
    if(n <= 0){
        return 0;
    }else{
        return 1 + angkaBagi15(n-15);
    }
}

console.log(angkaBagi15(36));