
function submitScores() {
   
    let gamer1 = document.getElementById("gamer1").value;
    let gamer2 = document.getElementById("gamer2").value;
    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    // Perform any desired operations with the scores
    // For example, you can display them on the page
    document.getElementById("result").innerHTML = "Score: " + gamer1 + " " + score1 + " - " + score2 + " " + gamer2;
  }

  console.log(gamer1, gamer2)

  
 