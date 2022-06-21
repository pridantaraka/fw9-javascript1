let hasil = '';
for(let i = 4; i >= 0 ; i--){
    for(let j=1; j<=i; j++){
        hasil += j+' ';
    }
    hasil += i+1+'\n';
}
console.log(hasil);

