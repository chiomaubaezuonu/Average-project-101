document.getElementById("reset").addEventListener("click", function(){
             input1.value = "";
             input2.value = "";
             input3.value = "";
             input4.value = "";

        });

            
        document.getElementById("btn").addEventListener("click", function(){

         
            let a = document.getElementById("input1").value;
            let b = document.getElementById("input2").value;
            let c = document.getElementById("input3").value;
            let d= document.getElementById("input4").value;
            let aNum = Number(a);
            let bNum = Number(b);
            let cNum = Number(c);
            let dNum = Number(d);
            let sum = aNum+bNum+cNum+dNum;
            let arrayOfNum = [aNum,bNum,cNum,dNum];
            let aveRage = sum/arrayOfNum.length;      
            document.getElementById("average").innerHTML = "The average is " + aveRage;

            
            if (isNaN(aNum)) {
                document.getElementById("average").innerHTML = "Please enter a valid number in input one";
                document.getElementById("average").style.color = "#820014";
                 }
            else if (isNaN(bNum)) {
                document.getElementById("average").innerHTML = "Please enter a valid number in input two";
                document.getElementById("average").style.color = "#820014";
            }

            else if (isNaN(cNum)) {
                document.getElementById("average").innerHTML = "Please enter a valid number in input three";
                document.getElementById("average").style.color = "#820014";
            }

            else if (isNaN(dNum)) {
                document.getElementById("average").innerHTML = "Please enter a valid number in input four";
                document.getElementById("average").style.color = "#820014";
            }
                 
                 else {
                    document.getElementById("average").innerHTML = "The average is " + aveRage + "!";  
                    document.getElementById("average").style.color = "#237804";
                    document.getElementById("average").style.fontSize = "1.3rem";
                
            }
            // var buttons = document.getElementsByClassName(‘buttons’); 
            // buttons.setAttribute(‘id’, ‘Introduction_ 1’)
            
            
           
         });
        
        

        

       
