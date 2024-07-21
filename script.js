
let butottn = document.querySelectorAll('.btn') ;
let equals = document.querySelector('.Equal-btn');
let textinput = document.querySelector('.input-Screen');
let clear = document.querySelector('.Clear-btn');


butottn.forEach(function(butottn){
    butottn.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        textinput.value += value

    })

    equals.addEventListener('click',function(e){
        if(textinput.value==""){
            textinput.value=""
        }
        else{
            let answer = eval(textinput.value);
            textinput.value = answer

        }


    })
    clear.addEventListener('click',function(){
        textinput.value = ""
    })

})
  
   
   
     