var Tcount, AMcount, ACcount;
Tcount = AMcount = ACcount = 1;

var TV1, TV2, TV3, TV4, TV5;
TV1 = TV2 = TV3 = TV4 = TV5 = 0;

var AMV1, AMV2, AMV3, AMV4, AMV5;
AMV1 = AMV2 = AMV3 = AMV4 = AMV5 = 0;

var ACV1, ACV2, ACV3, ACV4, ACV5;
ACV1 = ACV2 = ACV3 = ACV4 = ACV5 = 0;

var y = 5;

$(document).ready(function(){
  document.getElementById('transportsVote').innerHTML = TV1;
  document.getElementById('accomodationVote').innerHTML = AMV1;
  document.getElementById('activityVote').innerHTML = ACV1;
});

function addItem(event){
  if(event.id == 'transports'){
  Tcount = Tcount +1;

          if(Tcount == 2){
          $('#transportsItems').append('<li><span><button type="button" id="TVB2" onclick="addVote(this)"> Vote </button> </span><span><input type="text" name="transports" placeholder="Add option..."> </span><span><label id="transportsVote">0</label> </span></li>');

          } else if(Tcount == 3){
          $('#transportsItems').append('<li><span><button type="button" id="TVB3" onclick="addVote(this)"> Vote </button> </span><span><input type="text" name="transports" placeholder="Add option..."> </span><span><label id="transportsVote">0</label> </span></li>');

          }else if(Tcount == 4){
          $('#transportsItems').append('<li><span><button type="button" id="TVB4" onclick="addVote(this)"> Vote </button> </span><span><input type="text" name="transports" placeholder="Add option..."> </span><span><label id="transportsVote">0</label> </span></li>');

          }else if(Tcount == 5){
          $('#transportsItems').append('<li><span><button type="button" id="TVB5" onclick="addVote(this)"> Vote </button> </span><span><input type="text" name="transports" placeholder="Add option..."> </span><span><label id="transportsVote">0</label> </span></li>');

          }

} else if (event.id == 'accomodation') {
          AMcount = AMcount+1;
          if(AMcount == 2){
          $('#accomoItems').append('<li><span><button type="button" id="AMVB2" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label> </span></li>');
        }else if(AMcount == 3){
          $('#accomoItems').append('<li><span><button type="button" id="AMVB3" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
        }else if(AMcount == 4){
          $('#accomoItems').append('<li><span><button type="button" id="AMVB4" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
        }else if(AMcount == 5){
          $('#accomoItems').append('<li><span><button type="button" id="AMVB5" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
          }

} else if (event.id == 'activity') {
          ACcount = ACcount+1;
          if(ACcount == 2){
          $('#activityItems').append('<li><span><button type="button" id="ACVB2" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
        }else if(ACcount == 3){
          $('#activityItems').append('<li><span><button type="button" id="ACVB3" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
        }else if(ACcount == 4){
          $('#activityItems').append('<li><span><button type="button" id="ACVB4" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
        }else if(ACcount == 5){
          $('#activityItems').append('<li><span><button type="button" id="ACVB5" onclick="addVote(this)"> Vote </button></span><span><input type="text" name="accomodation" placeholder="Add option..."> </span><span><label id="accomodationVote">0</label></span></li>');
          }
      }
};


function addVote(event){
  if(event.id == 'TVB1'){
    TV1 = TV1+1;
    event.parentNode.parentNode.children[2].innerHTML = TV1;
  }else if(event.id == 'TVB2'){
    TV2 = TV2+1;
    event.parentNode.parentNode.children[2].innerHTML = TV2;
  }else if(event.id == 'TVB3'){
    TV3 = TV3+1;
    event.parentNode.parentNode.children[2].innerHTML = TV3;
  }else if(event.id == 'TVB4'){
    TV4 = TV4+1;
    event.parentNode.parentNode.children[2].innerHTML = TV4;
  }else if(event.id == 'TVB5'){
    TV5 = TV5+1;
    event.parentNode.parentNode.children[2].innerHTML = TV5;
  }else if(event.id == 'AMVB1'){
    AMV1 = AMV1+1;
    event.parentNode.parentNode.children[2].innerHTML = AMV1;
  }else if(event.id == 'AMVB2'){
    AMV2 = AMV2+1;
    event.parentNode.parentNode.children[2].innerHTML = AMV2;
  }else if(event.id == 'AMVB3'){
    AMV3 = AMV3+1;
    event.parentNode.parentNode.children[2].innerHTML = AMV3;
  }else if(event.id == 'AMVB4'){
    AMV4 = AMV4+1;
    event.parentNode.parentNode.children[2].innerHTML = AMV4;
  }else if(event.id == 'AMVB5'){
    AMV5 = AMV5+1;
    event.parentNode.parentNode.children[2].innerHTML = AMV5;
  }else if(event.id == 'ACVB1'){
    ACV1 = ACV1+1;
    event.parentNode.parentNode.children[2].innerHTML = ACV1;
  }else if(event.id == 'ACVB2'){
    ACV2 = ACV2+1;
    event.parentNode.parentNode.children[2].innerHTML = ACV2;
  }else if(event.id == 'ACVB3'){
    ACV3 = ACV3+1;
    event.parentNode.parentNode.children[2].innerHTML = ACV3;
  }else if(event.id == 'ACVB4'){
    ACV4 = ACV4+1;
    event.parentNode.parentNode.children[2].innerHTML = ACV4;
  }else if(event.id == 'ACVB5'){
    ACV5 = ACV5+1;
    event.parentNode.parentNode.children[2].innerHTML = ACV5;
  }
};

//modal js
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("share");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
