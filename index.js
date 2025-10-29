const quistion= ["1 Which planet is known as the “Red Planet”?","2. What has a face and two hands, but no arms or legs?"];
 const ans = [['1','2','3','4'],['8','7','6','5']]

document.getElementById("ans-1").addEventListener("click", sendans);
document.getElementById("ans-1").addEventListener("click", next);

let n = 0;
function next(){
document.getElementById('Quiz-quition').innerHTML=    quistion[n];

    n++;
  
}

const chois =document.getElementsByClassName('btn').addEventListener("click");
console.log(chois[0])

function sendans(){

  document.getElementById('1').innerHTML=ans[n][0];
   document.getElementById('2').innerHTML=ans[n][1];
    document.getElementById('3').innerHTML=ans[n][2];
     document.getElementById('4').innerHTML=ans[n][3];
}



 
