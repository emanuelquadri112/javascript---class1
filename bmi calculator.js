function bmiCalculstor(weight,height){
    var bmi = weight/(height*height);
    return bmi;
}
var bmi = bmiCalculstor(65,1.8);
console.log(bmi);