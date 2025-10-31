



const quistion = ["1 Which planet is known as the “Red Planet”?", "2. What has a face and two hands, but no arms or legs?", "3. What has a face and two hands, but no arms or legs?", "4. What has a face and two hands, but no arms or legs?", "5. What has a face and two hands, but no arms or legs?"];
const ans = [['Earth', 'Mars', 'Jupiter'], ['clock', 'car', 'plane', 'log']]
const currectanwers =['Mars', 'clock'];
let n = 0;
let score = 0;



console.log(n)


document.getElementById("ans-1").addEventListener("click", sendans);
 const cont = document.getElementById("chois");
  const cont2 = document.getElementById("Quiz-quition");
 cont.style.display="none";
 cont2.style.display="none";



function sendans() {
   cont.style.display="grid";
 cont2.style.display="grid"
  if(n==2)
      {
        alert(score);
      }
   document.getElementById('Quiz-quition').innerHTML = quistion[n];

  document.getElementById('1').innerHTML = ans[n][0];
  document.getElementById('2').innerHTML = ans[n][1];
  document.getElementById('3').innerHTML = ans[n][2];
  document.getElementById('4').innerHTML = ans[n][3];
    n++;
 
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
         
      }
       
  // alert(button.innerText + " clicked") 
  })
}

