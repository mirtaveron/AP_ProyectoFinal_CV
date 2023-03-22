
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {        
            document.getElementById('imgUsuario').src = data.results[0].picture.medium;
            document.getElementById('nombreUsuario').innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
            document.getElementById('edadUsuario').innerHTML = data.results[0].dob.age;
            document.getElementById('emailUsuario').innerHTML = data.results[0].email;
            document.getElementById('movilUsuario').innerHTML = data.results[0].cell;
            document.getElementById('ubicacionUsuario').innerHTML = data.results[0].location.city + ', ' + data.results[0].location.country;
            
            var objImagen = '<img  alt="imagen de perfil" ' + 'src="' + data.results[0].picture.large + '">';
            $('#imgModal .modal-content').html(objImagen);

        }
    });

    mostrarHora()
    function mostrarHora(){
        fecha = new Date();
        hora = fecha.getHours();
        minutos = fecha.getMinutes();
        segundos = fecha.getSeconds();
        if (hora < 10) hora = 0 + hora;            
        if (minutos < 10) minutos = "0" + minutos;            
        if (segundos < 10) segundos = "0" + segundos;
    
        $("#hora").text(hora + ":" + minutos + ":" + segundos);
        
        setTimeout("mostrarHora()", 1000);
    
    }

    $(document).ready(function () {
        document.getElementById('imgUsuario').onclick = function() {     
            $('#imgModal').modal({ show:true });
        }


        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })

        var audio = $("#miAudio")[0];
        $("li").mouseenter(function() {
            audio.play();
        });
        $(".mizoom").mouseenter(function() {
            audio.play();
        });
       
    })