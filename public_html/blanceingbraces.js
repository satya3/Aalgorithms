/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var stack = [];

/**
07
* Returns "Correct" when parenthesis are validated, "Incorrect" otherwise
08
*/

function validString(input1)
{

   if(processExp(input1))
    return "Correct";
   else

   return "Incorrect";
}

function processExp(exp)

{

   for(var i =0;i<exp.length;i++)

   {
      if(exp[i] == '(' || exp[i] == '{' || exp[i] == '[')

        stack.push(exp[i]);
      else if(exp[i] == ')' || exp[i] == '}' || exp[i] == ']')
      {

        if(stack.length==0 || !isMatchingPair(stack[stack.length-1],exp[i]))
           return false;

        else

           stack.pop();

      }

   }

   if(stack.length==0)

      return true;

   else
      return false;

}

function isMatchingPair(ch1,ch2)
{

   if(ch1 == '(' && ch2 == ')')
     return true;
   else if(ch1 == '{' && ch2 == '}')

     return true;
   else if(ch1 == '[' && ch2 == ']')

     return true;

   else

     return false;
}

console.log(validString("([])"))


//var x=function getRandom()
//{
//    var n1=Math.sqrt(Math.random()*100);
//    var n2=(Math.Floor(n1)%4)+1;
//    return n2+1;
//    
//}
//console.log(x);
