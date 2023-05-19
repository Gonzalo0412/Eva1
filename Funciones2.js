$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.IdAdmin').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.RutAd').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.DvAd').keypress(function(e)
    {
        let patron = numeros + 'kK';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })
    $('.NombreAd').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.CorreoAd').keypress(function(e)
    {
        let patron = letras + numeros + '@._-';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    });


    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

    $('.enviarAd').click(function()
    {
        if(!$.trim($('.IdAdmin').val()))
        {
            alert("Debe especificar Id");
            $('.IdAmin').focus();
        }
        else if(!$.trim($('.NombreAd').val()))
        {
            alert("Debe especificar nombre");
            $('.NombreAd').focus();
        }
        else  if(!$.trim($('.ApellidosAd').val()))
        {
            alert("Debe especificar Apellidos");
            $('.ApellidosAd').focus();
        }
        else if(!$.trim($('.RutAd').val()))
        {
            alert("Debe especificar rut");
            $('.RutAd').focus();
        }
        else  if(!$.trim($('.DvAd').val()))
        {
            alert("Debe especificar dv");
            $('.DvAd').focus();
        }
        else  if(! esValidoElRut($('.RutAd').val(),$('.DvAd').val()))
        {
            alert("El rut no es válido");
            $('.RutAd').focus();
        }
        else  if(!$.trim($('.CorreoAd').val()))
        {
            alert("Debe especificar email");
            $('.CorreoAd').focus();
        }
        else  if(!emailRegex.test(($('.CorreoAd').val())))
        {
            alert("El formato del correo no es válido");
            $('.CorreoAd').focus();
        }
        else
        {
            alert("Registro completo");

        }

    });

    function esValidoElRut(Rut,Digito)
    {
		let factor          = 2;
		let sumaProducto    = 0;
		let con             = 0;
		let caracter     	= 0;
 
		for( con=Rut.length-1; con>=0; con--)
		{
			caracter = Rut.charAt(con);
			sumaProducto += (factor * caracter);
			if (++factor > 7)
				factor=2;		
		}
 
        let digitoCaracter= "-123456789K0".charAt(11-(sumaProducto % 11));
        return digitoCaracter == Digito.toUpperCase();            
    }    

});