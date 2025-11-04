



const quistion = [
  "1 Which planet is known as the “Red Planet”?", 
  "2. What has a face and two hands, but no arms or legs?", 
  "3. What gas do plants absorb from the atmosphere?", 
  "4.Who wrote Romeo and Juliet??", 
  "5. How many continents are there in the world?"
];


const ans = [
  ['Earth', 'Mars', 'Jupiter'],
  ['clock', 'car', 'plane', 'log'],
  [' Oxygen', '  Nitrogen', 'Carbon dioxide', 'Hydrogeng'],
  ['Charles Dickens', 'William Shakespeare ', 'Mark Twain', 'Mark Twain'],
  ['5', '6', '7', '8']
];


const currectanwers = ['Mars', 'clock', 'Carbon dioxide', 'William Shakespeare ','7'];
let n = 0;
let score = 0;




let button = document.querySelectorAll(".btn-chois");
const cont = document.getElementById("chois");
const cont2 = document.getElementById("Quiz-quition");
const back_btn = document.getElementById("back-btn");
document.getElementById("ans-1").addEventListener("click", sendans);
document.getElementById("back-btn").addEventListener("click", back);



 

cont.style.display = "none";
cont2.style.display = "none";


back_btn.style.display = "none"

function back() {
  n--;


  if (n == -1) {
    cont.style.display = "none";
    cont2.style.display = "none";
    back_btn.style.display = "none"

  }
  document.getElementById('Quiz-quition').innerHTML = quistion[n];

  document.getElementById('1').innerHTML = ans[n][0];
  document.getElementById('2').innerHTML = ans[n][1];
  document.getElementById('3').innerHTML = ans[n][2];
  document.getElementById('4').innerHTML = ans[n][3];


}
function sendans() {
   
  
    cont.style.display = "grid";
    cont2.style.display = "grid"
    back_btn.style.display = "grid"


  if (n == 5) {
    cont.style.display = "none";
    // cont2.style.display = "none";
    back_btn.style.display = "none"
    document.getElementById('Quiz-quition').innerHTML = "you finished the quize you score :" +score;
    document.getElementById("ans-1").innerHTML = "finish"

   


  }
  else{
    document.getElementById('Quiz-quition').innerHTML = quistion[n];
  document.getElementById('1').innerHTML = ans[n][0];
  document.getElementById('2').innerHTML = ans[n][1];
  document.getElementById('3').innerHTML = ans[n][2];
  document.getElementById('4').innerHTML = ans[n][3];

  }
  
  n++;

}

let nam;


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
 
     
    nam = this.innerText;

    if ( currectanwers.includes(nam)) {
      console.log("true");
      //  button[i].style.background = "green";
       
      score += 10;
    }

    else {
      console.log("false");
          //  button[i].style.background = "red";

    }
    // button.style.background = "none";
    

    // alert(button.innerText + " clicked") 
  })
}

