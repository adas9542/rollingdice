function random_num_gen(){
  return Math.floor((Math.random()*6)+1);;
}

var winner = "";
var max_num = 0;
var bool_val = false;
var dicee_list = document.querySelectorAll("img");
for(var trav = 0; trav < dicee_list.length; trav++){
  var random_num = random_num_gen();
  dicee_list[trav].src = "images/dice" + String(random_num) + ".png"
  if(random_num == max_num){
    bool_val = true;
  }
  if(random_num > max_num){
    max_num = random_num;
    winner = trav;
  }
}
if(bool_val === false){
  document.querySelector("h1").textContent = "Player " + String(winner+1) + " wins!";
}
else{
  document.querySelector("h1").textContent = "It's a tie!";
}
