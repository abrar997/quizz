

// object in array to save the informatio nand use it by java script
var html5question = [
    //as array=0
    {
        //q1//

        question: "Which of the following tag represents an independent piece of content of a document in HTML5 ?",
        a: " section",
        b: "article ",
        c: "aside",
        d: " header",
        correct: "b",

    }, //this comma to inspire between array=0 & array=1
    //new array 
    {

        //q2//

        question: "Which of the following is correct about custom attributes in HTML5?",
        a: "A custom data attribute starts with data- and would be named based on your requirement.",
        b: "You would be able to get the values of these attributes using JavaScript APIs or CSS in similar way as you get for standard attributes.",
        c: "Both of the above.",
        d: "None of the above.",
        correct: "c",
    },

    {//q3//

        question: "Which of the following tag represents a piece of content that is only slightly related to the rest of the page in HTML5?",
        a: "section",
        b: "article",
        c: "aside",
        d: "header",
        correct: "c",
    }
    ,
    {
        //q4//

        question: " Are HTML5 tags case sensitive?",
        a: "true",
        b: "false",
        c: "/",
        d: "/",
        correct: "b",
    },

    //q5//
    {
        question: "Which of the following tag insists to have a value in an input control in HTML5",
        a: "output",
        b: "placeholder",
        c: "required",
        d: "outofocus",
        correct: "c",
    }

    ,
    {
        question: "Which of the following element is removed by HTML5?",
        a: "vlink",
        b: "dir",
        c: "marginwidth",
        d: "compact",
        correct: "b",



    }
    ,
    {
        question: "Which of the following is not a newly added element in HTML5?",
        a: "article",
        b: "audio",
        c: "nav",
        d: " frameset",
        correct: "d",



    },
    {
        question: "_______ defines a group of content that should be used as a figure and may be labeled by a legend element.",
        a: "details",
        b: "output",
        c: "aside",
        d: "figure",
        correct: "d",



    },
    {
        question: "HTML5 consist of ____ Semantic Elements",
        a: "4",
        b: "5",
        c: "6",
        d: "none of above ",
        correct: "c",



    }

]


console.log(html5question.length); //to know the length of array






//declare variable to take the basics  from html and fall it by java script
var questioncontainer = document.getElementById("questionquiz"); //the main div 

var questionheader = document.querySelector("#heraderh1"); //header of form h1(html) =question(java script)


var labelA = document.getElementById("a-answer"); //answer 1
var labelB = document.getElementById("b_answer"); //answer 2
var labelC = document.getElementById("c_answer"); //answer 3
var labelD = document.getElementById("d_answer"); //answer 4


var answerAll = document.querySelectorAll(".answer") // all answer 
var sumbitbtn = document.getElementById("submit");  // click on submit

var score = 0; //start with score=0 
var currentquestion = 0; //means start with question one 


// timer 


var startminute = 1; // number of minutes
var time = startminute * 60;   //take all second
var downMinute = document.getElementById("countDown");  //father div








function startTime() {
    var minute = Math.floor(time / 60)  // تقريب الرقم لاقرب عشر دون باقي 
    var second = time % 60   //equal zero  لاخذ كل الثواني 
    //  بدل عن if syntax 
    time = time < 0 ? 0 : time;
    downMinute.innerHTML = `${minute}: ${second} `;
    time--;
    if (minute == "0" && second=="0" ){
   
        alert("your time is over and your score=0 ");
       
            

        }
    }











//
//start quiz by click on start btn
var start = document.getElementById("startbutton"); //in html 
start.addEventListener('click', startquize) //event by click


//hidden and appaer quiz box by one class
function startquize() {
    console.log('started')
    start.classList.add("question"); //hidden quiz box by class called question put on css with proper display none 
    questioncontainer.classList.remove("question"); //remove class queston and appeare quiz box  
    var h333 = document.getElementById("h333");
    h333.style.display = "none";

    setInterval(startTime, 1000);  //call function every second

    

}









//show data from java script to browser 
//fall the empty places in html by using id from the information in java script to show all infor in browser 
//current slide
function showQuestionAndAnanswer() {
    var finalFormQuiz = html5question[currentquestion]; // new var  to display currentqusetion from the father var who contain the all objects 
    questionheader.innerText = finalFormQuiz.question;  // put question one from java script in header h1 in html 
    labelA.innerText = finalFormQuiz.a; // in  labelA put  choice one from list 
    labelB.innerText = finalFormQuiz.b;  //in  labelB put  choice two from list 
    labelC.innerText = finalFormQuiz.c;   //in labelC put  choice  three from list
    labelD.innerText = finalFormQuiz.d;   //in  labelD put  choice foyr from list 
    deleteChoiceSelected();

}

showQuestionAndAnanswer() //call function









//function select one answer from list :
function selectAnswer() {
    var choices = undefined;
    //role of forEach is take the father who contain all eelnt who have the same class=answer mean all chooses in the list and loop on the all element by first choice then second then third ---etc SYNTAX = (fathe.forEach((the son)))
    // and we use with forEach arrow function as aconstant syntax ( aparthees for each  (for function )) => {}
    answerAll.forEach((answerElement) => {
        if (answerElement.checked) {        // if you choose any choice so,, answer=what you choose  &&& checked  is  ready in language
            choices = answerElement.id;      //  it is  reday in language to know id for label  &&& any choice=id
            console.log(choices)          //  you will have not thing bcz you don't write the code of submit at the end when you write code of submit the answer will run in console
        }

    })

    return choices;
    //if you are not choose any answer the browser will choose anser=undefined so you will not coul go to next slide bcz undefind



}








//function to remove the previouse choice from new slide that mean when you inter to the next slide choice مراح تطلغ النقطة الخضرة على اي اختيار وانما تطلع فارقة 
function deleteChoiceSelected() {
    answerAll.forEach((answerElement) => {
        answerElement.checked = false;
    } // remove the choice an back to zero point and choose new choice
    )
}






//function when you click  on submit every thing will work 
// sumbitbtn.addEventListener('submit',function(){ //normal function

sumbitbtn.addEventListener('click', () => {  //arrow function 
    var choices = selectAnswer();
    if(choices!=undefined){
    if (choices === html5question[currentquestion].correct) {  //if you have html5question[currentquestion].correct = choice that you select it  ,,,,, currentquestion=0
        //So,
        score++ //increase score
    }
    currentquestion++ //go to next slide in any state if the answer is true or false


    if (currentquestion < html5question.length) { //of course will be less then 1 
        showQuestionAndAnanswer()    // go to next slide //first function 
    }


    else {

        questioncontainer.innerHTML = `
        <h2 class="headerjs"> you answered correctly at <span> ${score}/${html5question.length} </span>question </h2>
        <button class="btnjs" onclick="location.reload()">Reload </button> 
        `

    }


}
})



//  // /// /// 






































