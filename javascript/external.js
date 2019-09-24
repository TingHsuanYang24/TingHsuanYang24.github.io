/*
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);

x = 22;
const y = 33;
document.writeln(x + y);
document.writeln("<br>");
document.writeln(x += 33);
*/

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
