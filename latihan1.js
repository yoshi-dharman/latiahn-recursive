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
