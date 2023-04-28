let a;
let b;
let c;


/*
a = window.prompt("Enter side A");
a = Number(a); // type conversion to number

b = window.prompt("Enter side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
*/

/*  c = Math.pwr(a, 2) + Math.pow(b, 2);    
    c=Math.sqrt(c);
 Easy oneline code: c=Math.sqrt(Math.pwr(a, 2) + Math.pow(b, 2)); 


console.log("Side C: ", c );
*/

document.getElementById("submitButton").onclick =function() {

    a = document.getElementById("aTextbox").value;
    a = Number(a); // type conversion to number
    
    b = document.getElementById("bTextbox").value;
    b = Number(b);
   
    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);


    document.getElementById("cLabel").innerHTML = "Side C: " + c;

}
