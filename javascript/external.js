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

var webmaps =
[
  ["Inside Asia",
   "https://www.insideasiatours.com/step-inside/",
   "The map of tourist attractions in several southeastern Asia countries developed by Green Chameleon and Inside Asia Tours."
  ],
  ["Our Nation's Air",
   "https://gispub.epa.gov/air/trendsreport/2019/#home",
   "The interactive annual report summarizes the nation's air quality status and trends through 2018 created by EPA"
  ]
]


function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      if (column <2){
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
      else{
        document.write("<tr>");
        document.write("<td width=100%>" + webmaps[row][column] + "</td>");
        document.write("</tr>");
      };
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

function rectangle()
{
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var area = parseFloat(length)*parseFloat(length);
  document.getElementById("answer").innerHTML="The area is :" + area;
};
/*
//Set content to display in drop-down menu
document.getElementById("map-works").innerHTML = "<a href='https://irinaramirez9.github.io/' target='_blank'>Irina Ramirez</a><br><a href='https://TingHsuanYang24.github.io/' target='_blank'>TingHsuan Yang</a>";


document.getElementById("map-works").innerHTML = "<a href='https://TingHsuanYang24.github.io/tile_layer.html' target='_blank'>Tile Layer</a><br>"+
                                                 "<a href='https://TingHsuanYang24.github.io/on_event.html' target='_blank'>View On Event</a><br>"+
                                                 "<a href='https://TingHsuanYang24.github.io/basemap_gallery.html' target='_blank'>Basemap Gallery</a><br>"+
                                                 "<a href='https://TingHsuanYang24.github.io/query_task.html' target='_blank'>Query Task</a>";
*/
