let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);

console.log(miObjeto);

function parsearUrl(laURL)
{
    let url = new URL(laURL)
    let obj
    {
        host = url.hostname
        path = url.pathname
        parameters = url.search
    }
    return obj
}
