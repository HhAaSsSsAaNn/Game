var button = document.getElementById("start-game")
var winnerDiv = document.getElementById("winner")
var winnerH1 = document.querySelector("#winner h1")
winnerH1.innerHTML = "press start new game"

button.addEventListener("click", function(){
    winnerDiv.style.display = "none";
    var allH1 = document.querySelectorAll(".game h1");
console.log();
var randArray = [];
for (let i = 0; i < allH1.length; i++) {
    var rand = Math.ceil(Math.random()*9);
    var x = 0;
    while (randArray.includes(rand) == true && randArray.length>0) {
        var rand = Math.ceil(Math.random()*9);
        x += 1; 
    }
    randArray.push(rand);
    if (rand!=9) {
        allH1[i].innerHTML = rand
        allH1[i].style.backgroundColor = "white"
    }
    else{
        allH1[i].innerHTML = ""
        allH1[i].style.backgroundColor = "black"
    }
    
}

for (let i = 0; i < allH1.length; i++) {
    allH1[i].addEventListener('click', function(evt){
        if (evt.target.innerHTML != "") {
            var swapindex = check(evt.target.id)
            if (swapindex != null) {
                allH1[swapindex].innerHTML = evt.target.innerHTML;
                allH1[swapindex].style.backgroundColor = "white"
                evt.target.innerHTML = "";
                evt.target.style.backgroundColor = "black";
                if(checkWin()){
                    winnerDiv.style.display = "block";
                    winnerH1.innerHTML = "You Win!"
                    allH1[8].innerHTML = "9"
                    allH1[8].style.backgroundColor = "white"
                }
            }
        }
        
    })
    
}


function check(id){
    var replaceable = []
    switch (id) {
        case "img1":
            replaceable = [1,3]
             break;
             
        case "img2":
            replaceable = [0,2,4]
             break;
             
        case "img3":
            replaceable = [1,5]
             break;
             
        case "img4":
            replaceable = [0,4,6]
             break;
             
        case "img5":
            replaceable = [1,3,5,7]
             break;
             
        case "img6":
            replaceable = [4,2,8]
             break;
             
        case "img7":
            replaceable = [3,7]
             break;
             
        case "img8":
            replaceable = [6,4,8]
             break;
             
        case "img9":
            replaceable = [7,5]
             break;
             
        default:
            break;
    }
    return swap(replaceable);
    
}

function swap(swapIndexies) {
    
    for (let i = 0; i < swapIndexies.length; i++) {
        if (allH1[swapIndexies[i]].innerHTML ==  "") {
            return swapIndexies[i];
        }   
    }
    return null
}

function checkWin(){
   for (let i = 0; i < allH1.length -1; i++) {
    if (allH1[i].innerHTML != i+1) {
        return false
    }
   }
   return true
}
})