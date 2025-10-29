// const quistion = ["1 Which planet is known as the “Red Planet”?", "2. What has a face and two hands, but no arms or legs?"];
// const ans = [['1', '2', '3', '4'], ['8', '7', '6', '5']]
// let n = 0;

// console.log(n)
// document.getElementById("ans-1").addEventListener("click", sendans);
// document.getElementById("ans-1").addEventListener("click", next);

// function next() {
//   document.getElementById('Quiz-quition').innerHTML = quistion[n];
//   n++;
// }

// function sendans() {
//   document.getElementById('1').innerHTML = ans[n][0];
//   document.getElementById('2').innerHTML = ans[n][1];
//   document.getElementById('3').innerHTML = ans[n][2];
//   document.getElementById('4').innerHTML = ans[n][3];
// }



const quistion = ["1 Which planet is known as the “Red Planet”?", "2. What has a face and two hands, but no arms or legs?"];
const ans = [['Earth', 'Mars', 'Jupiter'], ['clock', 'car', 'plane', 'log']]
const currectanwers =['Mars', 'clock'];
let n = 0;
let score = 0;



console.log(n)
document.getElementById("ans-1").addEventListener("click", sendans);

// let anwerCorrect = document.querySelectorAll('.btn-chois');
// anwerCorrect.addEventListener("click", checkresult)
// // console.log(anwerCorrect)
// function checkresult(){
//   anwerCorrect.innerText
// }



function sendans() {
   document.getElementById('Quiz-quition').innerHTML = quistion[n];

  document.getElementById('1').innerHTML = ans[n][0];
  document.getElementById('2').innerHTML = ans[n][1];
  document.getElementById('3').innerHTML = ans[n][2];
  document.getElementById('4').innerHTML = ans[n][3];
    n++;
    console.log(currectanwers[n-1])

}

let nam;
let button = document.querySelectorAll(".btn-chois");

for(let i = 0;i <button.length;i++)
{
  button[i].addEventListener('click',function(){
   nam = this.innerText;
 
      if (nam == currectanwers[n-1] ) {
        console.log("true");
        score+=10;
      }
      else{
         console.log("false");
         score+0;
      }
       
  // alert(button.innerText + " clicked") 
  })
}

