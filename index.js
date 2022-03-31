document.getElementById("calc").onclick=function(){   //On clicking find button the process gets started

    
    var a=document.getElementById("A").value;         //value entered in first box is assigned to variable A
    
    
    var b=document.getElementById("B").value;         //value entered in second box is assigned to variable B
    
    
    a=Number(a);                                      //variable a is convereted to a number data type 
    
    
    b=Number(b);                                      //variable b is convereted to a number data type 


    var c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));    //formulation to find hypotenuse


    alert(c);                                        //alert to display out put
}