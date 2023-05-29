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


function getXmlHttpRequest()
{
	var httpRequest = null;
	try
	{
		httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch (e)
	{
		try
		{
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (e)
		{
			httpRequest = null;
		}
	}
	
	if (!httpRequest && typeof XMLHttpRequest != "undefined")
	{
		httpRequest = new XMLHttpRequest();
	}
	
	return httpRequest;
}

function getUrlSync(url)
{
	return getUrl(url, false, null);
}

function getUrlAsync(url, handleStateChange)
{
	return getUrl(url, true, handleStateChange);
}


// call a url
function getUrl(url, async, handleStateChange) {
	var xmlHttpReq = getXmlHttpRequest();

	if (!xmlHttpReq)
		return;

	if (handleStateChange)
	{
		xmlHttpReq.onreadystatechange = function()
			{
				handleStateChange(xmlHttpReq);
			};
	}
	else
	{
		xmlHttpReq.onreadystatechange = function() {;}
	}

	xmlHttpReq.open("GET", url, async);
	xmlHttpReq.send(null);
}

function postUrl(url, data, async, stateChangeCallback)
{ 
	var xmlHttpReq = getXmlHttpRequest(); 

	if (!xmlHttpReq)
		return;

	xmlHttpReq.open("POST", url, async);
	xmlHttpReq.onreadystatechange = function()
		{
			stateChangeCallback(xmlHttpReq);
		};
	xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlHttpReq.send(data);
}

function urlEncodeDict(dict)
{ 
	var result = "";
	for (var i=0; i<dict.length; i++) {
		result += "&" + encodeURIComponent(dict[i].name) + "=" + encodeURIComponent(dict[i].value);
	}
	return result;
}

function execOnSuccess(stateChangeCallback)
{
	return function(xmlHttpReq)
		{
			if (xmlHttpReq.readyState == 4 &&
					xmlHttpReq.status == 200)
				stateChangeCallback(xmlHttpReq);
			// fimxe: do something on error?
		};
}


function postFormByForm(form, async, successCallback) {
	var formVars = new Array();
	for (var i = 0; i < form.elements.length; i++)
	{
		var formElement = form.elements[i];
		
		// Special handling for checkboxes (we need an array of selected checkboxes..)!
		if(formElement.type=='checkbox' && !formElement.checked) {
			continue;
		} 
		var v=new Object;
		v.name=formElement.name;
		v.value=formElement.value;
		formVars.push(v);		
	} 
	postUrl(form.action, urlEncodeDict(formVars), async, execOnSuccess(successCallback));
}

function postForm(formName, async, successCallback)
{
	// postFormByName
	var form = document.forms[formName];
	return postFormByForm(form, async, successCallback);
}

function replaceDivContents(xmlHttpRequest, dstDivId)
{
	var dstDiv = document.getElementById(dstDivId);
	dstDiv.innerHTML = xmlHttpRequest.responseText;
}


function getUrlXMLResponseCallback(xmlHttpReq) {
	//alert(xmlHttpReq.responseText);
	if(xmlHttpReq.responseXML == null) {
		alert("Error while processing your request.");
		return;
	}
	var root_node = getRootNode(xmlHttpReq);
	var return_code = getNodeValue(root_node, 'return_code');
	//alert("return code " + return_code);

	if(return_code == 0) {
		redirect_val = getNodeValue(root_node, 'redirect_on_success');
		if(redirect_val != null) {
			window.location=redirect_val;
		} else {
			success_message = getNodeValue(root_node, 'success_message');
			if (success_message != null) {
				alert(success_message);
			}
			if(this.successCallback != null) {
				this.successCallback(xmlHttpReq);
			}
		}
	} else {
		var error_msg = getNodeValue(root_node, 'error_message');
		if (error_msg == null || error_msg.length == 0) {
			if(return_code==2) {
				error_msg = "You must be logged in to perform this operation.";
			} else {
				error_msg = "An error occured while performing this operation.";
			}
		}
		alert(error_msg)
	}
}

function getNodeValue(obj,tag)
{
	node=obj.getElementsByTagName(tag);
	if(node!=null && node.length>0) {
		return node[0].firstChild.nodeValue;
	} else {
		return null;
	}
}

function getRootNode(xmlHttpReq) {
	return xmlHttpReq.responseXML.getElementsByTagName('root')[0];
}

function getUrlXMLResponse(url, successCallback) {
	this.successCallback = successCallback;
	this.urlResponseCallback = getUrlXMLResponseCallback;
	getUrl(url, true, execOnSuccess(this.urlResponseCallback)) 
}
function postFormXMLResponse(formName, successCallback) {
	this.successCallback = successCallback;
	postForm(formName, true, execOnSuccess(getUrlXMLResponseCallback))
}


}
/*
     FILE ARCHIVED ON 14:17:39 May 17, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:07:29 Apr 30, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 214.434
  exclusion.robots: 161.726
  exclusion.robots.policy: 161.716
  xauthn.identify: 103.655
  xauthn.chkprivs: 57.784
  RedisCDXSource: 0.605
  esindex: 0.009
  LoadShardBlock: 33.325 (3)
  PetaboxLoader3.datanode: 41.87 (4)
  CDXLines.iter: 16.239 (3)
  load_resource: 37.315
  PetaboxLoader3.resolve: 25.69
*/