var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    if ( level > 7 || level < 1) //Making sure that level is between 0 and 7
        //level shouldn't be less than 1 or greater than 0
    {
        return "Invalid level size"
    }
    else
    {
        return "<h" + level + ">" + text + "</h" + level + ">"
    }
    //return "not yet implemented"
}

lib.generateOrderedList = function(arrayOfText) {
    /*
    var ol = "<ol>"
    arrayOfText.forEach(function(item){
        ol += "<li>" + item + "</li>"
    })
    ol += "</ol>"
    return ol
    */
    return "not yet implemented"
}

lib.generateUnorderedList = function(arrayOfText) {
    /*
    var ul = "<ul>"
    arrayOfText.forEach(function(item){
        ul += "<li>" + item + "</li>"
    })
    ul += "</ol>"
    return ul
    */
    return "not yet implemented"
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

lib.generateHyperLink = function(url, text) {
    //return "<a href=\"" + url + "\">" + text + "</a>"
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    //return "<input type=\"text\" name=\"" + name + "\">"
    return "not yet implemented"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    //return "<label>" + label + "</label> <input type=\"text\" name=\"" + name + "\">"
    return "not yet implemented"
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
