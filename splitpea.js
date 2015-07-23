$(document).ready(function() {

/* SplitPea v0.1.5 | (c)2015 Greg Fiske & Katherine Nix-Carnell. */

var lineWidth = 0;
var paraWidth = $(".splitP").width();

var parArr = $(".splitP").html().split(' '); //Split each word into an array
//Clear the original paragraph of its content
$('.splitP').text('');

//Rewrite the paragraph line by line
var lineDiv = $('<div />').addClass('line');//"<div class='line'>"; //Start a new line
var tempDiv = $('<div />').addClass('line temp');//"<div class='line'>"; //Start a new line
	
$('.splitP').append(lineDiv).append(tempDiv);
//For each word in the array...
for (var i=0; i<=parArr.length-1; i++) {
	//console.log('iteration '+i+', word: '+parArr[i])
    //console.log('lineWidth: '+lineWidth);
    //Write word to html
	
	//Kath edit: Create span element. This is a variable that should be created and overwritten every loop for proper scoping.
	var newSpan = $('<span />').html(parArr[i]+'&nbsp;');
	//console.log('HTML: '+$(newSpan).html());
	
	
	
    //line += "<span>"+parArr[i]+" </span>";
   // $(".splitP").html(line);
	$(tempDiv).html(newSpan);
    //console.log('newSpan width:' +$(newSpan).outerWidth());
    //Check the width and add to the total line width
    spanWidth = parseInt($(newSpan).width());
	//console.log('spanWidth: '+spanWidth);
	//console.log('lineDiv innerWidth: '+$(lineDiv).innerWidth());
	//console.log('lineWidth: '+lineWidth);
    //lineWidth += spanWidth;
    //console.log('lineWidth 2: '+lineWidth);
    //It the line width is greater than the paragraph width
	//console.log(newSpan);
	//console.log(lineWidth+spanWidth+' >= '+paraWidth+' == '+(lineWidth >= paraWidth))
    if (lineWidth+spanWidth >= paraWidth) {
		//console.log('---');
		//console.log(newSpan);
        //line = line.replace("<span>"+parArr[i]+" </span>", ""); //Remove the last added word
        //$(lineDiv).detach(newSpan);
        //End the line
        lineDiv = $('<div />').addClass('line');//"<div class='line'>"; //Start a new line
		$('.splitP').append(lineDiv);
		
        lineWidth = 0;
      
        //Re add the last word to the next line and recheck width
        //line += "<span>"+parArr[i]+" </span>";
		
		
		//console.log('spanWidth: '+spanWidth);
		//console.log('line width: '+$(lineDiv).width());
		//console.log('lineWidth: '+lineWidth);
		//console.log('---')
    } 
	
	$(lineDiv).append(newSpan);
    //spanWidth = $("span").width();
    lineWidth += spanWidth;
	
	//console.log(' ');
}

//End the final line
//line += "</div>";

//Optional. Remove the span tags
var element = $(".splitP"); //Convert string to JQuery element
element.find("span").each(function(index) {
    var text = $(this).text(); //Get the span content
    $(this).replaceWith(text); //Replace all span with just content
});
var newString = element.html(); //Get back new string

	
$('div.line.temp').each(function() {
	$(this).remove();	
});
});