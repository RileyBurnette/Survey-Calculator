function grade() {
        
    var Homework = parseFloat(document.getElementById("1").value);
    var Quizzes = parseFloat(document.getElementById("2").value);
    var Clicker = parseFloat(document.getElementById("3").value);
    var Paper = parseFloat(document.getElementById("4").value);
    var Exam1 = parseFloat(document.getElementById("5").value);
    var Exam2 = parseFloat(document.getElementById("6").value);
    var Exam3 = parseFloat(document.getElementById("7").value);
    var Exam4 = parseFloat(document.getElementById("8").value);
    
    var ExamArray = [Exam1, Exam2, Exam3, Exam4];
    
    ExamArray.sort(function(a, b){return a - b});
    var min = ExamArray[0];

    var knownexams = ExamArray[1] + ExamArray[2] +ExamArray[3];
    var allexams = ExamArray[0] +ExamArray[1] + ExamArray[2] +ExamArray[3];

    var knownswap = ((Homework+Quizzes+Clicker)*.1)+Paper*.06+(knownexams*.11);	
    var knownnoswap = ((Homework+Quizzes+Clicker)*.1)+Paper*.06+(allexams *.11);	

    var pointsneededA = (90 - knownswap) / .31;
    var pointsneededB = (80 - knownswap) / .31;
    var pointsneededC = (70 - knownswap) / .31;

    if (pointsneededA < ExamArray[0]) {
        pointsneededA = (90 - knownnoswap) / .2;
    }
    if (pointsneededB < ExamArray[0]) {
        pointsneededB = (80 - knownnoswap) / .2;
    }
    if (pointsneededC < ExamArray[0]) {
        pointsneededC = (70 - knownnoswap) / .2;
    }

var array1 = [Exam1, Exam2, Exam3, Exam4];  
var array2 = ["Exam 1", "Exam 2", "Exam 3", "Exam 4"];  
 
Sort(array1,array2);  
  
function Sort(a,b)  {  
    var swapped;  
        do { swapped = false;  
            for (var i=0; i < a.length-1; i++) {  
            if (a[i] > a[i+1]) {  
                var temp = a[i];  
                    a[i] = a[i+1];  
                        a[i+1] = temp;   
                                var temp = b[i];  
                                     b[i] = b[i+1];  
                                         b[i+1] = temp;  
                                             swapped = true;  
            }  
        }  
    } while (swapped);  
}  
    document.getElementById("answer").innerHTML= "Final exam grade needed for an A is " + pointsneededA.toFixed(2)+'%';
    document.getElementById("answer").innerHTML= "Final exam grade needed for an A is " + pointsneededA.toFixed(2)+'%';
    document.getElementById("answer2").innerHTML= "Final exam grade needed for a B is " + pointsneededB.toFixed(2)+'%';
    document.getElementById("answer3").innerHTML= "Final exam grade needed for a C is " + pointsneededC.toFixed(2)+'%';
    document.getElementById("answer4").innerHTML= "Exam grade replaced was " +array2[0] + " ("+min+'%)';
}
    

    
    
    





