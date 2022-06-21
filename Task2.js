const mtk = 80
const bahasaindonesia = 90
const bahasainggris = 89
const ipa = 69

const total = (mtk+bahasaindonesia+bahasainggris+ipa)
const rata2 = total/4

console.log(rata2);
if(rata2>=90){
    console.log('Grade = A');
}else if(rata2>=80){
    console.log('Grade = B');
}else if(rata2>=70){
    console.log('Grade = C');
}else if(rata2>=60){
    console.log('Grade = D');
}else{
    console.log('Grade = E');
}