window.onload = myMain;



/* gets the link of the hi-res photo to be displayed  (different folder) */
function getCorrespImg(x){
    var addrArr = x.src.split("/");
    var name = addrArr[addrArr.length-1];
    return "gallery/landscapes/1/" + name;
}


function myMain(){
    if(document.getElementsByClassName){

        var imgList = document.getElementsByClassName("ph");
        //alert(imgList.length + " photos found");
		var dispImg = document.getElementById("displayedImg");

        for( img of imgList ){
            img.addEventListener("click" , function(){ dispImg.src = getCorrespImg(this); } , false);
            img.addEventListener("touchstart" , function(){ dispImg.src = getCorrespImg(this); } , false);
        }

    }
    else{
        alert("Browser not supporting \'getElementsByClassName()\' ");
    }
}