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

var UT_RATING_IMG = '/img/star.gif';
var UT_RATING_IMG_HOVER = '/img/star_hover.gif';
var UT_RATING_IMG_HALF = '/img/star_half.gif';
var UT_RATING_IMG_BG = '/img/star_bg.gif';
var UT_RATING_IMG_REMOVED = '/img/star_removed.gif';

function UTRating(ratingElementId, maxStars, objectName, formName)
{
	this.ratingElementId = ratingElementId;
	this.maxStars = maxStars;
	this.objectName = objectName;
	this.formName = formName;

	this.starTimer = null;
	this.starCount = 0;

	// pre-fetch image
	(new Image()).src = UT_RATING_IMG;
	(new Image()).src = UT_RATING_IMG_HALF;

	function showStars(starNum, skipMessageUpdate) {
		this.clearStarTimer();
		this.greyStars();
		this.colorStars(starNum);
		if(!skipMessageUpdate)
			this.setMessage(starNum);
	}

	function setMessage(starNum) {
		messages = new Array("Rate this video", "Poor", "Nothing special", "Worth watching", "Pretty cool", "Awesome!");
		document.getElementById('ratingMessage').innerHTML = messages[starNum];
	}

	function colorStars(starNum) {
		for (var i=0; i < starNum; i++)
			document.getElementById('star_' + (i+1)).src = UT_RATING_IMG;
	}

	function greyStars() {
		for (var i=0; i < this.maxStars; i++)
			if (i <= this.starCount)
				document.getElementById('star_' + (i+1)).src = UT_RATING_IMG_BG; // UT_RATING_IMG_REMOVED;
			else
				document.getElementById('star_' + (i+1)).src = UT_RATING_IMG_BG;
	}

	function setStars(starNum) {
		this.starCount = starNum;
		this.drawStars(starNum);
		document.forms[this.formName]['rating'].value = this.starCount;
		var ratingElementId = this.ratingElementId;
		postForm(this.formName, true, function (req) { replaceDivContents(req, ratingElementId); });
	}


	function drawStars(starNum, skipMessageUpdate) {
		this.starCount=starNum;
		this.showStars(starNum, skipMessageUpdate);
	}

	function clearStars() {
		this.starTimer = setTimeout(this.objectName + ".resetStars()", 300);
	}

	function resetStars() {
		this.clearStarTimer();
		if (this.starCount)
			this.drawStars(this.starCount);
		else
			this.greyStars();
		this.setMessage(0);
	}

	function clearStarTimer() {
		if (this.starTimer) {
			clearTimeout(this.starTimer);
			this.starTimer = null;
		}
	}

	this.clearStars = clearStars;
	this.clearStarTimer = clearStarTimer;
	this.greyStars = greyStars;
	this.colorStars = colorStars;
	this.resetStars = resetStars;
	this.setStars = setStars;
	this.drawStars = drawStars;
	this.showStars = showStars;
	this.setMessage = setMessage;

}


}
/*
     FILE ARCHIVED ON 04:59:08 May 17, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:07:00 Apr 30, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 392.772
  exclusion.robots: 270.824
  exclusion.robots.policy: 270.815
  xauthn.identify: 227.375
  xauthn.chkprivs: 43.172
  RedisCDXSource: 4.44
  esindex: 0.008
  LoadShardBlock: 99.525 (3)
  PetaboxLoader3.datanode: 85.695 (4)
  CDXLines.iter: 13.809 (3)
  PetaboxLoader3.resolve: 142.942 (2)
  load_resource: 136.323
*/