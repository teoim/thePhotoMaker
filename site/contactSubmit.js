window.onload = myMain;

function myMain(){

	document.getElementById('contactForm').onsubmit = procesare;

}

function procesare(e){
    var nume = document.getElementById('fNameI').value;
    var prenume = document.getElementById('lNameI').value;
    var adresaMail = document.getElementById('mailI').value;
    var subiect = document.getElementById('subj').value;
    var mesaj = document.getElementById('txtArea').value;

    var fullMessage = "From: \n" + nume + " " + prenume + " - " + adresaMail + "\n\nSubject: \t" + subiect + "\n\nMessage: \n" + mesaj;

    alert(fullMessage);

    hideBtn();

    /* prevents page-refresh right after displaying the "thank-you" message */
    e.preventDefault();  
    /* page-refresh 3 seconds after displaying the "thank you" message so the submit button reappears */
    setInterval( function(){location.reload();} , 3000);

	
    //var forma = new FormData(document.getElementById('contactForm'));
    // var mesaj = "mesaj: ";
    // for ( var x of forma.entries() ){
        // mesaj = mesaj + x[0] + ": " + x[1] + "\n";
    // }

    // alert(mesaj);
}

/* hides button and displays "thank you" message: */
function hideBtn(){
	var btn = document.getElementById('submitBtn');
	var parent = document.getElementById('divSmBn');
	var hdr = document.createElement('h4');
	var lbl = document.createTextNode("Thank you!");
	hdr.appendChild(lbl);
	hdr.style = "color: white; font-size: 1.3em; margin: 0.15em 0em; padding: 0.3em 0em; text-align: center; font-family: serif; font-weight: 600; width: 6em; background-color: transparent; border-radius: 6px;";
	btn.style = "display: none;";
	parent.appendChild(hdr);
}