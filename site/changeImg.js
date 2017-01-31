window.onload = myMain;


function changeImg(x){
    var dispImg = document.getElementById("displayedImg");
    dispImg.src = getCorrespImg(x);
}

    /* used by changeImg() to get the hi-res photo link (different folder) */
    function getCorrespImg(x){
        var addrArr = x.src.split("/");
        var name = addrArr[addrArr.length-1];
        return "gallery/landscapes/1/" + name;
    }


function myMain(){
    if(document.getElementsByClassName){

        var imgList = document.getElementsByClassName("ph");
        //alert(imgList.length + " photos found");

        for( img of imgList ){
            img.addEventListener("click" , changeImg(img) , false);
        }

    }
    else{
        alert("Browser not supporting \'getElementsByClassName()\' ");
    }
}