    var Quizcontainer= document.getElementById("ques");
function Question(id,name,choices, rightAns){
    this.id=id;
    this.name=name;
    this.choices=choices;
  this.rightAnswer=rightAns;
}
function Choices(id,name){
    this.choiceId=id;
    this.choiceName=name;
}
var answer1= new Choices(1,"2000");
 var answer2= new Choices(2,"6897");
var answer3= new Choices(3,"7000");
var q_choices=[answer1,answer2,answer3];
var question1=new Question(1,"If 72 x 96 = 6927, 58 x 87 = 7885, then 79 x 86 = ?",q_choices,q_choices[1]);


var answer4= new Choices(1,"300");
var answer5= new Choices(2,"500");
var answer6= new Choices(3,"924");
var q2_choices=[answer4,answer5,answer6];

var question2=new Question(2,"If 13 x 12 = 651 & 41 x 23 = 448, then, 24 x 22 =?",q2_choices,q2_choices[2]);

var answer7= new Choices(1,"14");
var answer8= new Choices(2,"15");
var answer9= new Choices(3,"10");
var q3_choices=[answer7,answer8,answer9];
var question3=new Question(3,"Look at this series: 53, 53, 40, 40, 27, 27, … What number should come next?",q3_choices,q3_choices[0]);

var answer10= new Choices(1,"10");
var answer11= new Choices(2,"25");
var answer12= new Choices(3,"30");
var q4_choices=[answer10,answer11,answer12];

var question4=new Question(4,"Look at this series: 22, 21, 23, 22, 24, 23, … What number should come next?",q4_choices,q4_choices[1]);

var answer13= new Choices(1,"10");
var answer14= new Choices(2,"22");
var answer15= new Choices(3,"20");
var q5_choices=[answer13,answer14,answer15];

var question5=new Question(5,"Look at this series: 36, 34, 30, 28, 24, … What number should come next?", q5_choices, q5_choices[1]);


var arrQuestion=[question1,question2,question3,question4,question5];
var choicesArray=[q_choices,q2_choices,q3_choices,q4_choices,q5_choices]
var arr=[];
var opt1= document.getElementById("frst");
var opt2= document.getElementById("sec");
var opt3= document.getElementById("thrd");

for (var i = 0; i < 5; i++) {
    var index = Math.floor((Math.random() * arrQuestion.length) + 1) - 1;
    arr.push(arrQuestion[index]);
    arrQuestion.splice(index, 1);
}

var question_count = 0;
window.onload = function () {
    show(question_count);

}

function show(count) {
    
    var ques=document.getElementById("qus-containe");

    var questionInArray = arr[count];
    var QuestionOption = questionInArray.choices;

    var valueOption = []

    for (var i = 0; i < QuestionOption.length; i++) {
        valueOption.push(QuestionOption[i].value)
    }

  

     ques.textContent ="Q"+(count+1)+")"+arr[count].name;
      opt1.textContent=arr[count].choices[0].choiceName;
      opt2.textContent=arr[count].choices[1].choiceName;
      opt3.textContent=arr[count].choices[2].choiceName;
    
}

function qNext() {
    if (question_count < arr.length - 1) {
        question_count++;
        show(question_count)
    }
    removeBtn();
    state();
} 
function qPrev(){
    if (question_count > 0) {
        question_count--;
        show(question_count);
    }
    removeBtn();
    state();
} 

function qMark(){
    if(question_count<arr.length){
        var marked=document.getElementById("markedQuestion");
        var hasChild= marked.children;
        if(hasChild.length==0)
        {
            var div = document.createElement('div');
            div.id = arr[question_count].id;
            div.className = "markDiv1";
            div.innerHTML = "Q" + (question_count + 1) + ") ";
            div.onclick = function () {
                for (var i=0;i<arr.length;i++){
                    if(arr[i].id == this.getAttribute("id")){
                        question_count = i;
                    }
                }
                show(question_count);
                this.remove()
            }
            marked.appendChild(div);
        }
        else{
            var notFound=false;
               for(var i=0;i<hasChild.length;i++)
               {
                    if(arr[question_count].id == hasChild[i].getAttribute("id")){
                        notFound=true;
                    }
              }
              if(!notFound)
                   {
                    var div = document.createElement('div');
                    div.id = arr[question_count].id;
                    div.className = "markDiv1";
                    div.innerHTML = "Q" + (question_count + 1) + ") ";
                    div.onclick = function () {
                        for (var i=0;i<arr.length;i++){
                            if(arr[i].id == this.getAttribute("id")){
                                question_count = i;
                            }
                        }
                        show(question_count);
                        this.remove()
                    }
                    marked.appendChild(div);
                   }
               }

        }
} 
   
function Submit(){  
        var grade=CountGrage();
           sessionStorage.setItem("time",  document.getElementById("timer").innerHTML);
            sessionStorage.setItem("grade",grade);
           myStopFunction();
            window.location.replace("final.html");
}

var stuAnswer=[];
function checkedAnswer(e){
    var clickedBtn=e.target;
    console.log(e.target);
   removeBtn();
    clickedBtn.classList.add("clicked");
    clickedBtn.style.backgroundColor="green";
   var Qid=arr[question_count].id;
   var userVal= clickedBtn.innerHTML;
   console.log(Qid,userVal);
   var notFound=false;
   var j;
   for(i=0;i<stuAnswer.length;i++)
   {
       if(Qid == stuAnswer[i].Qid)
       {
           notFound=true;
           j=i;
       }
        //    console.log("nora");
       
   }
   if( stuAnswer.length==0)
   {
       stuAnswer.push({Qid,userVal});
   }
   else if(!notFound){
    stuAnswer.push({Qid,userVal});
   }
   else{
       stuAnswer.splice(j,1);
       stuAnswer.push({Qid,userVal});
   }
   
 }
function removeBtn(){
    var option = document.querySelectorAll("button.option");

    for(i=0;i<option.length;i++)
    {
        if(option[i].classList.contains("clicked"))
        {
            option[i].classList.remove("clicked");
            option[i].style.backgroundColor="white";
        }
    }
}
function state(){
    var equal=false,j;
    for(var i=0;i<stuAnswer.length;i++){
       if( stuAnswer[i].Qid == arr[question_count].id){
          equal=true;
            j=i;
       }

    }
    if(equal){
        var option = document.querySelectorAll("button.option");
        var textEqual=false;
        for(var i=0;i<option.length;i++){
            if(stuAnswer[j].userVal== option[i].innerText)
            {
                textEqual=true;
                k=i;
            }
        }
        var k;
        if(textEqual){
            option[k].classList.add("clicked");
            option[k].style.backgroundColor="green";
        }
    }

}

function CountGrage() {
    let points = 0;
    for (var i = 0; i <stuAnswer.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (stuAnswer[i].Qid == arr[j].id) {
                if (stuAnswer[i].userVal == arr[j].rightAnswer.choiceName) {
                    points += 2;
                }
            }
        }
    }
    return points;

}

///////////timer//////

var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 30;

function myTimer() {
    if(secondlimit == 0)
    {
        var grade=CountGrage();
        sessionStorage.setItem("time",  document.getElementById("timer").innerHTML);
         sessionStorage.setItem("grade",grade);
        myStopFunction();
        window.location.replace("final.html");
    }

    document.getElementById("timer").innerHTML = '00:' + zeroPad(secondlimit,2);
    secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}