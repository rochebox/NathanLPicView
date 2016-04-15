
//Nathan my notes are here in the comments -- Mr. Roche

//alert("hi there");  good idea to test with an alert...


var picData = new Array(7);
var locationData = new Array(7);
var captionData = new Array(7);

var fButtonListener;  //I added ; here
var bButtonListener;

var whichPic = 0;

/*

the pic data doesnt get the "..""
because the script when it runs is 
considered to be running in the
html file so you think of it as not running in  
you think of it as not running in 
//the javascript folder...  so no ..  (Strange but true..)
(See all the examples from class)

imagePicData [0] = "../images/flower1.jpg";  
imagePicData [1] = "../images/flower2.jpg";  
imagePicData [2] = "../images/flower3.jpg"; 
imagePicData [3] = "../images/icecrystals.jpg";  
imagePicData [4] = "../images/petal1.jpg";  
imagePicData [5] = "../images/petal2.jpg";  
imagePicData [6] = "../images/petal3.jpg";


 i moved the [] to be touching the name of the array...
Also details matter you have to capitalize JPG if 
the files are titled that way...
*/

picData[0] = "images/flower1.JPG";  //the pic data doesnt get the ..
picData[1] = "images/flower2.JPG";  // because the script when it runs is 
picData[2] = "images/flower3.JPG";  // considered to be running in the 
picData[3] = "images/icecrystals.JPG";  //html file so 
picData[4] = "images/petal1.JPG";  //you think of it as not running in 
picData[5] = "images/petal2.JPG";  //the javascript folder...
picData[6] = "images/petal3.JPG";


locationData[0] = "Milford, MA";
locationData[1] = "Milford, MA";
locationData[2] = "Milford, MA";
locationData[3] = "Southborough, MA";
locationData[4] = "Milford, MA";
locationData[5] = "Milford, MA";
locationData[6] = "Milford, MA";

captionData[0] = "A photo of a droopy flower in my house";
captionData[1] = "A picture showing a soft rose";
captionData[2] = "These are a small group of roses";
captionData[3] = "These ice crystals are beautiful close up";
captionData[4] = "A ton of small petals";
captionData[5] = "Some more of the petals close up";
captionData[6] = "Three of the the petals. Notice the tiny veins";


window.onload = function() {

	//alert("Hello from on load");

whichPic = 0;

// the format of this wasn't correnct --->document.getElementById("picBox").src(picData[0]);
document.getElementById("picBox").src = "images/flower1.JPG";

 fButtonListener = document.getElementById("forwardButton");
 bButtonListener = document.getElementById("backButton");





 fButtonListener.addEventListener('click', function(event){
	 	++whichPic;
	 	if ( whichPic >= picData.length ){
	 		whichPic = 0;
	 	}
		document.getElementById("locationStation").innerHTML = locationData[whichPic];
		document.getElementById("picBox").src = picData[whichPic];
		document.getElementById("captionLoc").innerHTML = captionData[whichPic];

 });


 bButtonListener.addEventListener('click', function(event){

 	whichPic = whichPic-1;
 	if (whichPic < 0){
		whichPic = picData.length-1;
 	}

 	document.getElementById("locationStation").innerHTML = locationData[whichPic];
	document.getElementById("picBox").src = picData[whichPic];
	document.getElementById("captionLoc").innerHTML = captionData[whichPic];
 	
 });







};

