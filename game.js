const gameArea = document.getElementById('game-area');  

var notes = []
var point = 0

class Note{
    constructor(x){
        this.element = document.createElement('div');  
        this.element.className = 'note'
        this.element.style.top = "0px"
        this.element.style.left = x + "px"
        console.log(notes)
        gameArea.appendChild(this.element);

            


    }

    move(){
        //this.element.style.right = `${parseInt(this.element.style.left, 10) - 50}px`;
        
        var temp = parseInt(this.element.style.top, 10) + 10;

        //console.log(temp)


        this.element.style.top = temp + "px"




    }

    remove(){
        this.element.remove();

    }





};


class Borad{
    constructor(){
        this.element = document.createElement('div');  
        this.element.className = 'board'
        this.element.style.left = "320px"
        
        gameArea.appendChild(this.element);

        
    // 监听鼠标移动事件  
    document.addEventListener('mousemove', function(event) {  
    
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        console.log(mouseX, mouseY);
        this.element.style.left = mouseX + "px";
        
        
      });  

    }




}


    //var board = new Borad();


 



document.addEventListener('keydown', (event) => {  

    console.log(event)
    
}); 






function createNote(x){
   console.log(x)
    var note = new Note(x);
    notes.push(note);  
}

var music = ""
function noteMove(){

 var combo = document.getElementById("combo")
 var body = document.getElementById("body")
 var charge = document.getElementById("charge")

 combo.innerHTML = point + "连击"

 combo.style.top = "50px"

 if(point >= 50){
    combo.style.fontSize = "22px"
    combo.style.transition = "0.5s"
    body.style.backgroundColor = "yellow"
    body.style.transition = "0.5s"
    }


else if(point >= 30){
combo.style.fontSize = "20px"
combo.style.transition = "0.5s"
body.style.backgroundColor = "khaki"
body.style.transition = "0.5s"

}

else if(point >= 10){
combo.style.fontSize = "18px"
combo.style.transition = "0.5s"
body.style.backgroundColor = "antiquewhite"
body.style.transition = "0.5s"
}




else{
    combo.style.fontSize = "15px"
    combo.style.transition = "0.2s"
    body.style.backgroundColor = "transparent"
    
}



    for(var i = 0; i < notes.length; i++){
        notes[i].move();
        //console.log(parseInt(notes[i].element.style.top, 10))
        //console.log(mouseX)

    

        if(parseInt(notes[i].element.style.top, 10) >= 635){
	//console.log(parseInt(notes[i].element.style.left, 10) )
                //console.log(mouseX)

            
            if(parseInt(notes[i].element.style.left, 10) < mouseX + 150 && parseInt(notes[i].element.style.left, 10) > mouseX - 150 ){

               
	  music = document.getElementById("myau")
	  music.currentTime = 0;
 	  music.play()
	

	


        charge.innerHTML = "PERFECT"
    
        console.log("GET!!")
        combo.style.top = "40px"
        point = point + 1

  
	}

    else{
        point = 0
        charge.innerHTML = "MISS"
        charge.style.color = "gray"
    }
    
            notes[i].remove()
            console.log(notes)
            console.log(i)
            notes.splice(i, 1)
            //console.log(notes.pop(i))
            //i--
        

        }

	
        

       
        
    }

    //console.log(notes.length)

    //is_hit();
}


// function is_hit(){
//     for(var i = 0; i < notes.length; i++){  
//             if(parseInt(notes[i].element.style.top, 10) >= 500){
//                 console.log(i)
//                 notes[i].remove()
//                 notes.pop(i)
//                 console.log(notes)
//             }
//     }
// }

var move_block = ""

var index = 0
function cre(){
var note_x = [300,300,300,300,600,600,600,600,300,300,300,300,300,300,300,300,600,600,600,300,300,300,600,600,600,300,300,300,600,300,300,300,300,600,600,600,300,300,300,600,600,600,300,300,300,600,600,600,300,300,300,600,600,600,300,600,600,600,600,300,300,300,600,600,600,300,300,300]
var note = new Note(note_x[index]);
notes.push(note);  
index++
}

function start(){
index = 0
point = 0

 var music = document.getElementById("music")


music.pause()

 setTimeout(function(){
 music.currentTime = 0
 music.play()
},2600)

 music.volume = 0.4


clearInterval(move_block)
console.log("123")

//var music_list = [0,720,1180,2000,2820,3660,4360,4910,5660,6430,7130,7700,,7800,8400]
var music_list = [0,720,1280,2000,2820,3540,4100,4820,5640,6360,6920,7640,8000,8600,9200,9800,11400,11700,12000,12800,13100,13400,14200,14500,14800,15600,15900,16200,17000,17400,17500,17600,18400,18800,18900,19000,19800,20100,20400,21200,21500,21800,22600,22900,23200,24000,24300,24600,25400,25700,26000,26800,27100,27400,28200,28600,28700,28800,29600,30000,30100,30200,31000,31400,31700,32500,32800,33100]
//var note_x = [100,200,300]

for(var i=0;i<music_list.length;i++){
    //console.log(note_x[i])
    setTimeout(cre,music_list[i]);
}


move_block = setInterval(noteMove, 50);



}






















//gameLoop();  