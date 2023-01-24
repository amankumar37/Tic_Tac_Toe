
let turn = 'X';
let color=[1];

//funtion for changing turn
const  changeTurn=()=>{
          if(turn=='X') turn='0';
          else turn ='X';
          document.getElementById("status").innerText="Turn for " + turn;
}

let boxes=document.getElementsByClassName('boxText');


// function to check win

let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWin(){
    
    for(let i=0;i<wins.length;i++){
        if((boxes[wins[i][0]].innerText===boxes[wins[i][1]].innerText)&&(boxes[wins[i][1]].innerText===boxes[wins[i][2]].innerText)&&(boxes[wins[i][0]].innerText)!==""){
               return true;
        }
    }
    return false;
}


// for checking tie

function checkTie(){
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].innerText==="")return false;
    }
    return true;
}

// Logic




for(let i=0;i<boxes.length;i++){
   boxes[i].addEventListener('click',()=>{
    if(boxes[i].innerText==""){
        boxes[i].innerText=turn;
        if(checkWin()){
            document.getElementById('status').innerText=turn + " won";
        }else if (checkTie()){
            document.getElementById('status').innerText="It's a tie";
        }
        else changeTurn();

    }
   });
}



document.getElementById('reset').addEventListener('click',function(){

    var rand=color[Math.floor(Math.random() * color.length)]*100;
    document.querySelector(':root').style.setProperty('--hue',rand);
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText="";
    }
    document.getElementById('status').innerText="Turn for X";
});