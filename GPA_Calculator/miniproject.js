
let X=0;

function calculateGPA(arr) {
    if (arr == 100) {
        X="A";
    };
    if (arr >= 80 && arr <= 99){
        X="B";
    };
    if (arr >= 70 && arr <= 79){
        X="C";
    };
    if (arr < 70){
        X="F";
    };
    return X;
};



function totalScore(){
    let mathScore = document.getElementById("math").value;
    let englishScore = document.getElementById("english").value;
    let socialScore = document.getElementById("social").value;
    let scienceScore = document.getElementById("science").value;
    let total = ((parseFloat(mathScore) + parseFloat(englishScore) +parseFloat(socialScore) + parseFloat(scienceScore))/4);

   
    calculateGPA(total);
 
    document.getElementById("total").innerHTML= "YOUR OVERALL GRADE IS: "+ X;
};

