$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.Rut').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.Dv').keypress(function(e)
    {
        let patron = numeros + 'kK';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })
    $('.Nombre').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.Correo').keypress(function(e)
    {
        let patron = letras + numeros + '@._-';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    });


    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

    $('.enviar').click(function()
    {
        if(!$.trim($('.Nombre').val()))
        {
            alert("Debe especificar nombre");
            $('.Nombre').focus();
        }
        else  if(!$.trim($('.Apellidos').val()))
        {
            alert("Debe especificar Apellidos");
            $('.AApellidos').focus();
        }
        else if(!$.trim($('.Rut').val()))
        {
            alert("Debe especificar rut");
            $('.Rut').focus();
        }
        else  if(!$.trim($('.Dv').val()))
        {
            alert("Debe especificar dv");
            $('.Dv').focus();
        }
        else  if(! esValidoElRut($('.Rut').val(),$('.Dv').val()))
        {
            alert("El rut no es válido");
            $('.Rut').focus();
        }
        else  if(!$.trim($('.Correo').val()))
        {
            alert("Debe especificar email");
            $('.Correo').focus();
        }
        else  if(!emailRegex.test(($('.Correo').val())))
        {
            alert("El formato del correo no es válido");
            $('.Correo').focus();
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