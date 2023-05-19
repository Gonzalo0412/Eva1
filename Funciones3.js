$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    $('.IdProd').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false;
    })
    $('.NombreProd').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.Marca').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.Descrip').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })


    $('.Publicar').click(function()
    {
        if(!$.trim($('.IdProd').val()))
        {
            alert("Debe especificar Id");
            $('.IdProd').focus();
        }
        else if(!$.trim($('.NombreProd').val()))
        {
            alert("Debe especificar nombre del Producto");
            $('.NombreProd').focus();
        }
        else  if(!$.trim($('.Marca').val()))
        {
            alert("Debe especificar Marca");
            $('.Marca').focus();
        }
        else  if(!$.trim($('.Descrip').val()))
        {
            alert("El producto debe tener descripcion");
            $('.Descripcion').focus();
        }
        else
        {
            alert("Producto Publicado");

        }

   });
});
