function factorial(n) {
    if(n>0){
        var fact=1;
        for( var i=1; i<=n;i++){
            fact=fact*i;    
        }
        return fact;
    }else{
        return null;
    }

}