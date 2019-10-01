/*
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);

x = 22;
const y = 33;
document.writeln(x + y);
document.writeln("<br> 123");
document.writeln(x += 33);
*/
/*
document.writeln("<button onclick='condition()'>Conditional Test</button>")

function condition()
{
  x = confirm("are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You chose Okay!");
  }
  else
  {
  document.writeln("You choose Cancel!");
  }
}
*/
/*
function HelloVisitor()
{
  var Visitor = window.prompt("Please enter you name.", "visitor" );
  document.getElementById("hello-visitor").innerHTML = "Hello, welcome to my webpage, " + Visitor + "!";
}
*/


function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here."

  // A prompt bix is used to prompt user to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my web page, " + user_name + "!</h1>"

  return message
}
