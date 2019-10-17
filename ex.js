document.addEventListener("keyup",sizeFunc,false)

//inflate balloon
function sizeFunc(key){                  
    if (key.keyCode == "KeyI"){                  
            bigFunc();
            console.log("")
        }
//deflate balloon
    else if (key.keyCode == "KeyD"){
            smallFunc();
        }
    else {
            console.log("error")
         }
    }

function bigFunc(){
    var id = document.getElementById("&#127880")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)

//display explosion emoji if size is bigger than 60px
        if (currentSize < 60){
            document.getElementById("&#127880").style.fontSize = (currentSize + 15) + 'px'
        }
        else {
            document.getElementById("&#127880").textContent=""
            document.removeEventListener("keydown",sizeFunc)
        }
        
    }

function smallFunc(){
    var id = document.getElementById("&#127880")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)

    if (currentSize > 15){
        document.getElementById("&#127880").style.fontSize = (currentSize - 15) + 'px'
    }
    else {
        document.getElementById("&#127880").style.fontSize = "10px";
        document.getElementById("&#127880").textContent="Done"
        document.removeEventListener("keydown",sizeFunc)

    }
    }