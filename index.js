var randonplayer1=Math.floor(Math.random()*6)+1;
var randonimage1="images/dice"+randonplayer1+".png";
document.querySelector(".img1").setAttribute("src",randonimage1);

var randonplayer2=Math.floor(Math.random()*6)+1;
var randonimage2="images/dice"+randonplayer2+".png";
document.querySelector(".img2").setAttribute("src",randonimage2);

if(randonimage1>randonimage2){
    document.getElementsByClassName("show")[0].innerHTML="Player 1 Wins";
}
else if(randonimage1<randonimage2){
    document.getElementsByClassName("show")[0].innerHTML="Player 2 Wins";
}
else{
    document.getElementsByClassName("show")[0].innerHTML="Tied";
}