document.addEventListener("keyup",sizeFunc,false)

function sizeFunc(key){                  
    if (key.keyCode == "107"){                  
            bigFunc();
            console.log("")
        }
    else if (key.keyCode == "109"){
            smallFunc();
        }
    else {
            console.log("error")
         }
    }b

function bigFunc(){
    var id = document.getElementById("Balloon")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)

        if (currentSize < 60){
            document.getElementById("Balloon").style.fontSize = (currentSize + 15) + 'px'
        }
        else {
            document.getElementById("Balloon").textContent=""
            document.removeEventListener("keydown",sizeFunc)
        }
        
    }

function smallFunc(){
    var id = document.getElementById("Balloon")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)

    if (currentSize > 15){
        document.getElementById("Balloon").style.fontSize = (currentSize - 15) + 'px'
    }
    else {
        document.getElementById("Balloon").style.fontSize = "20px";
        document.getElementById("Balloon").textContent="Done"
        document.removeEventListener("keydown",sizeFunc)

    }
