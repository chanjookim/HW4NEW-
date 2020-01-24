
const
firstBtn = document.querySelector("#start"),
secondBtn = document.querySelector("#swap");

let wordList = [];

firstBtn.addEventListener("click",first,false);
secondBtn.addEventListener("click",swap,false)
secondBtn.style.display = "none";

function first(){
    wordList = [];
    for(let i = 0; i < 3; i++){
        wordList.push(prompt('Please enter a word'));
    }
    
    if (wordList != null) {
        let listUl = "<ul>"
        for(let i = 0; i < 3; i++){
            listUl = listUl + "<li>" + wordList[i] + "</li>";
        } 
        listUl = listUl + "</ul>"
        document.getElementById("out").innerHTML = listUl
        secondBtn.style.display = "block";
    }
}



function swap(){
    start.style.display = "none";
    end.style.display = "block";
    
    wordList = wordList.map(swapLetters);
    
    let listUl = "<ul>"
    for(let j = 0; j < 3; j++){
        listUl = listUl + "<li>" + wordList[j] + "</li>"
    }
    listUl = listUl + "</ul>"
    document.getElementById("out2").innerHTML = listUl 
}

function swapLetters(word) {
    let onef = word[0]; //this is the last character
    let twof = word[word.length-1]; //this will be the first character shown
    let three = word.substring(1,word.length-1) //this will be the middle character shown 
    return twof + three + onef;
}