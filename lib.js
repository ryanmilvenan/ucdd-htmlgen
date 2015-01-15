var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) //Team function completed
{
    if ( level > 6 || level < 1) //Making sure that level is between 0 and 7
        //level shouldn't be less than 1 or greater than 6
    {
        return "Invalid level size"
    }
    else
    {
        return "<h" + level + ">" + text + "</h" + level + ">"
    }
    //return "not yet implemented"
}

lib.generateOrderedList = function(arrayOfText) //Week 1: Function 3 complete
{//Ordered list header is <ol> and list items are <li>, so I cycle through the arrayOfText and add everything
    //to a single var to be returned with all the headers included
    var OrdList = "<ol>"
    var endlist = "</ol>"
    for (var i = 0; i < arrayOfText.length; ++i) 
    {
        OrdList = OrdList + "<li>" + arrayOfText[i] + "</li>"
    };
    return OrdList + endlist
    //return "not yet implemented"
}

lib.generateUnorderedList = function(arrayOfText) //Week 1: Function 4 complete
{//Same as above except that it is an UnorderedList
    var UnOrdList = "<ul>"
    var endlist = "</ul>"
    for (var i = 0; i < arrayOfText.length; ++i) 
    {
        UnOrdList = UnOrdList + "<li>" + arrayOfText[i] + "</li>"
    };
    return UnOrdList + endlist
    //return "not yet implemented"
}

lib.generateTableRow = function (arrayOfText) {
	/*
    var row = "<tr>"
	arrayOfText.forEach(function(item){
		row += "<td>" + item + "</td>"
	})	
	row += "</tr>"
    return row
    */
    return "not yet implemented"
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    return "not yet implemented"
}

lib.generateHyperLink = function(url, text) //Individual #2 function completed
{
    //In HTML, <a> </a> is similar to <h></h>....The text goes between the carats
    //Therefore, the text will refer to the address found in the first <a> carat
    return "<a href=\"" + url + "\">" + text + "</a>"
    //return "not yet implemented"
}

lib.generateFormTextField = function(name) //week 1: Function 1 complete
{//Form header on the outside will create the form, then the input command that a text will be inputted from the user
    return "<form><input type=\"text\" name=\"" + name + "\"></form>"
    //return "not yet implemented"
}

lib.generateFormTextFieldWithLabel = function(name, label) //week 1: Function 2 complete
{//Same as above, but now the box will be labeled for the input
    return "<form>" + label + "<br><input type=\"text\" name=\"" + name + "\"></form>"
    //return "not yet implemented"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
	/*
    var container = "<select>"
	var idx = 0
	arrayOfText.forEach(function(name){
		value = arrayOfValues[idx]
		container += "<option value=\"" + value + "\">" + name + "</option>"
		idx++
	})
	container += "</select>"
    return container
    */
    return "not yet implemented"
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
	/*
    var iframe = "<iframe "
	var width = "width=\"" + width + "\" "
	var height = "height=\"" + height + "\" "
	var vidId = "src=\"//www.youtube.com/embed/" + videoId + "\" allowfullscreen></iframe>" 
    return iframe + width + height + vidId
    */
    return "not yet implemented"
}

module.exports = lib
