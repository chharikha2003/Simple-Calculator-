var buttons1= document.getElementsByClassName('buttons');
var display=document.getElementById("screen");
var operand1=0;
var operand2=null;
var operator=null;
console.log(buttons1.length);
for(var i=0;i<buttons1.length;i++)
{   buttons1[i].addEventListener("click",function()
     {   var value=this.getAttribute("data-value");
         if (value=="+")
         {    operator="+";
              operand1=parseFloat(display.textContent);
              display.innerText="";

         }
         else if(value=="-")
         {    operator="-";
              operand1=parseFloat(display.textContent);
              display.innerText="";

         }
         else if(value=="*")
         {    operator="*";
              operand1=parseFloat(display.textContent);
              display.innerText="";
         }
         else if(value=="/")
         {    operator="/";
              operand1=parseFloat(display.textContent);
              display.innerText="";
         }
         else if(value=="%")
         {   operator="%";
             operand1=parseFloat(display.textContent);
             display.innerText="";
         }
         else if(value=="AC")
         {   
             display.innerText="";
         }
         else if(value=="=")
         {    operand2=parseFloat(display.textContent);
             
              if (operator=="%")
              {   console.log(operator);
                  var divide=(operand1/operand2)*100;
                  var res=divide.toString();
                  display.innerText=res;
             }
              else{
              var result=eval(`${operand1} ${operator} ${operand2}`);
              display.innerText=result;
              }

         }
         else
         {
            display.innerText+=value;
         }
     }
     )

}