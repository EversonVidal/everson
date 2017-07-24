$(document).ready(function(){
    var audio = new Audio('media/abecedario.mp3');
    audio.play();
    var letter = document.getElementById("letter");
    var img = document.createElement("img");

      Leap.loop(function (frame) {
         //output.innerHTML = 'Frame: ' + frame.id
        // hands.innerHTML = 'Hands:' + frame.hands.length;
        // pointables.innerHTML = 'Pointables:' + frame.pointables;

        if(frame.hands.length > 0){
          var hand = frame.hands[0];

          var crossProduct = Leap.vec3.create();
          var direction = frame.hands[0].direction;
          var normal = frame.hands[0].palmNormal;

          Leap.vec3.cross(crossProduct, direction, normal);

          for(var i = 0; i < hand.fingers.length; i++){

            // ------------ D -----------------
            if(hand.fingers[1].extended && !hand.fingers[0].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
                img.src = 'imagenes/d.png'
                letter.appendChild(img)
                var audio = new Audio('media/d.mp3');
	        audio.play();

            // ------------  A ------------------
            }else if(hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
              img.src = 'imagenes/a.png'
              letter.appendChild(img)
	      var audio = new Audio('media/a.mp3');
	      audio.play();
//	      alert("A");
              // ----------- B ------------------
            }else if(!hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended){
              img.src = 'imagenes/b.png'
              letter.appendChild(img)
              var audio = new Audio('media/b.mp3');
	      audio.play();
              // ----------- F ------------------
            }else if(!hand.fingers[0].extended && !hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended){
                img.src = 'imagenes/f.png'
                letter.appendChild(img)
                var audio = new Audio('media/f.mp3');
	        audio.play();

          // ----------- L ------------------
          }else if(!hand.fingers[0].extended && !hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended){
                img.src = 'imagenes/l.png'
                letter.appendChild(img)
                var audio = new Audio('media/l.mp3');
          audio.play();

              // ----------- I ------------------
            }else if(!hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && hand.fingers[4].extended){
              img.src = 'imagenes/i.png'
                letter.appendChild(img)
                var audio = new Audio('media/i.mp3');
	        audio.play();
            }

            // ------------- C --------- //
            else if((Leap.vec3.cross(crossProduct, direction, normal)[0] > 0) && frame.hands[0].fingers[4].extended){
              // console.log('hand sideways');
              // console.log('letter C');
                img.src = 'imagenes/c.png'
                letter.appendChild(img)
                var audio = new Audio('media/c.mp3');
	        audio.play();
            }else {
              letter.innerHTML = ""
            }
          }
        }
      });

});
