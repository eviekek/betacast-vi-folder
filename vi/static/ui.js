var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function showSheet(content)
{
	var sheet = document.getElementById('sheet');
	var sheetContent = document.getElementById('sheetContent');
	sheetContent.innerHTML = content;
	sheet.style.visibility = 'visible';
	return false;
}

function toggleVisibility(whichForm, setVisible)
{
	var newstate="none"
	if(setVisible == true) 
		newstate = ""
	
	if (document.getElementById)
	{
		// this is the way the standards work
		var style2 = document.getElementById(whichForm).style;
		style2.display = newstate;
	}
	else if (document.all)
	{
		// this is the way old msie versions work
		var style2 = document.all[whichForm].style;
		style2.display = newstate;
	}
	else if (document.layers)
	{
		// this is the way nn4 works
		var style2 = document.layers[whichForm].style;
		style2.display = newstate;
	}
}
	

function setInnerHTML(div_id, value)
{
	var dstDiv = document.getElementById(div_id);
	dstDiv.innerHTML = value;
}

function openPopup(url, name, height, width)
{
	newwindow=window.open(url, name,'height='+height+',width='+width);
	if (window.focus) {newwindow.focus()}
	return false;
}




function openDiv (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "block";
	}
}
function closeDiv (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "none";
	}
}

function showInline (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "inline";
	}
}
function hideInline (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "none";
	}
}


function blurElement (elName) {
	var theElement = document.getElementById(elName);
	if (theElement) {
		theElement.blur();
	}
}

function selectLink (elName) {
	var theElement = document.getElementById(elName);
	if (theElement) {
		theElement.className = "selectedNavLink";
	}
}
function unSelectLink (elName) {
	var theElement = document.getElementById(elName);
	if (theElement) {
		theElement.className = "unSelectedNavLink";
	}
}