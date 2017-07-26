  var dataDB=[];
$(document).ready(function(){
    var txtresul="";


    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;


  var recognition = new SpeechRecognition();



 dataDB=leerDB();
   // alert(JSON.stringify(leerDB()))




})

var recognition;
	var recognizing = false;
	if (!('webkitSpeechRecognition' in window)) {
		alert("¡API no soportada!");
	} else {

		recognition = new webkitSpeechRecognition();
		recognition.lang = "es-VE";
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onstart = function() {
            $("#texto").val("");
			recognizing = true;
			//console.log("empezando a escuchar");
		}
		recognition.onresult = function(event) {

		 for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal)
				document.getElementById("texto").value += event.results[i][0].transcript;
		    }


			//texto
		}
		recognition.onerror = function(event) {
		}
		recognition.onend = function() {
			recognizing = false;
			document.getElementById("procesar").innerHTML = "Escuchar";
			//console.log("terminó de escuchar, llegó a su fin");
            txtresul=$("#texto").val();
           // alert(txtresul);
            traducir(txtresul)

		}

	}

	function procesar() {

		if (recognizing == false) {
			recognition.start();
			recognizing = true;
			document.getElementById("procesar").innerHTML = "Detener";
		} else {
			recognition.stop();
			recognizing = false;
			document.getElementById("procesar").innerHTML = "Escuchar";


		}
	}



//funciones para traducir
 function traducir(texto){
     var imagenes_tr="";
     if(texto.length>1){
         //es palabra u oracion
     }else{
         //abecedario
     }
    // alert(JSON.stringify(dataDB));
          $(dataDB.palabra).each(function(i,v){
              $("#img_tra").empty();
             // alert(texto+"=="+v.value)
             if(texto.toLowerCase()==v.value){
                 imagenes_tr=imagenes_tr+'<img src="'+v.img+'" style="height: 10%;width: 10%;">';
                // alert(v.img)

             }

         });
        $valortext=$("#texto").val();
     $("#img_tra").append(imagenes_tr);

    }
function tine_espacio(){

}
//localstorage
 leerDB=function(){
     var data=[];

  /*$.getJSON('../js/DBtr.json',{},function(response){
     // console.log("entro")
        alert("response"+JSON.stringify(response))
       return response;

     });*/
     $.ajax({
                    url: "../js/DBtr.json",
                    type: "GET",
                    async: false,
                    cache: false,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    beforeSend: function() {
                     // alert("leendo..")
                    },
                    success: function(response) {

                       data=response;
              // console.log("entro")


                    }
                });
 // alert("respuesta"+JSON.stringify(data))
     return data;
 }
