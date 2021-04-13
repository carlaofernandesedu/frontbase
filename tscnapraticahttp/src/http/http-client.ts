enum httpVerbs
{
    GET = 'GET',
    POST = 'POST'
}

export default class HttpClient{



get(url:string)
{
   let conexaoHttp = this.createXmlHttpRequest(httpVerbs.GET,url);
   conexaoHttp.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                console.log('retornou dados');
            }
        }
        
        conexaoHttp.send();
}

private createXmlHttpRequest(verb:httpVerbs, url:string) : XMLHttpRequest
{
    let conexaoHttp = new XMLHttpRequest();
    const async:boolean = true;
    conexaoHttp.open(verb,url,async);
    return conexaoHttp;
}
    
}