import HttpResposta from 'http/http-resposta';

enum httpVerbs
{
    GET = 'GET',
    POST = 'POST'
}

export default class HttpClient{

    get(url:string) : Promise<HttpResposta>
    {
          return new Promise( (resolve,reject) =>{
            let conexaoHttp = this.createXmlHttpRequest(httpVerbs.GET,url);
            this.configureCallbacks(conexaoHttp,resolve,reject);
        });
    } 

    private createXmlHttpRequest(verb:httpVerbs, url:string) : XMLHttpRequest
    {
        let conexaoHttp = new XMLHttpRequest();
        const async:boolean = true;
        conexaoHttp.open(verb,url,async);
        return conexaoHttp;
    }

    private configureCallbacks(conexaoHttp:XMLHttpRequest,resolve,reject)
    {
        conexaoHttp.onreadystatechange = function()
        {
            if(this.readyState == 4)
            {
                if(this.status==200)
                {
                    const resposta = new HttpResposta(this.responseText,this.status);
                    resolve(resposta);
                }
            }

            // if(this.readyState == 4 && this.status == 200)
            // {
            //     console.log('retornou dados');
            //     resolve(conexaoHttp.responseText);
            // }

            //reject(conexaoHttp.responseText)
        }
        
        conexaoHttp.send();
    }   
}