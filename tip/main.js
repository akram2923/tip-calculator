$(function(){

 

    $(".b").on("click",function(e){
   
        
        let input2 = $("#in2").val();
        if(input2 < 1 ){
            console.log("empty")
            $(".sms").text("eber lama ogala")

        }else{
            let res = Number(e.target.value);
        var cost =  Number ($("input").val())
        console.log(cost)
        let tip = Number((cost * (res/100)));
        console.log(tip)
        $(".tip").text(`$${tip}`);
        let total = cost + tip;
        $(".total").text(`$${total}`)
        $(".color").text(`${input2} ${input2 == 1 ?'person':'persons'} `)
        $("#in2").val("");
        $("input").val("");
        $(".sms").text("")




        }
        
    })

   $(".reset").on("click",function(){

    $(".tip").text(`0.00`);
      
    $(".total").text(`0.00`)

    $(".color").text(" / person")


   })

})

