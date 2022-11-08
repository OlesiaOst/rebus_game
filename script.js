var input1=documentGetElementById("task1"),
    res=documentGetElementById("result"),
    button=documentGetElementById("button"),
    counter=0;
    button.addEventListener("click",
    function(){
        )
        if(input1.value=="GitHub"){
        counter++
        console.log(counter);
        button.setAttribute("disalled", "true")
        }
        else{
        alert("Неправильно")
        }
        
    }
    