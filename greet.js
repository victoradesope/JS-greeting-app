// to check if the number is greater than the date
function myFun(){
    const d= new Date().getHours();
    let x= document.getElementById("numb").value;
    let text = ""
  
  
    if(x == ""){
        text = document.getElementById("stop").innerHTML = "Put in something";
    }
    else if (x < d) {
      text = document.getElementById("stop").innerHTML = "HOUR IS LESS THAN THE PRESENT HOUR";
    }
    else if (x > d && x < 25){
        text = document.getElementById("stop").innerHTML = "HOUR IS GREATER THAN THE PRESENT HOUR";  
    }

  else {
        text = document.getElementById("stop").innerHTML = "THIS IS OUT OF RANGE";
  }
  document.getElementById("stop").innerHTML = text;
  }


  //greeting app
function myGood(){
  let y = document.getElementById("name").value;
  let send = ""

  if (y == ""){
    alert("pls fill everything");
  }
  else if (y < 12) {
    send = "good morning";
  }
  else if (y > 12 && y < 18) {
      send = "good afternoon";
  }
  else if(y > 18 && y < 24) {
    send = "good evening"
  }
  else {
    send = "good night. It's Mid-Night";
  }
  document.getElementById("nice").innerHTML = send;
}
  
  