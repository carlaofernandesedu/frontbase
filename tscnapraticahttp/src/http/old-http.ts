import HttpClient from 'http-client'
import HttpResposta from 'http-resposta';

export default class OldHttp
{
    constructor(private httpClient:HttpClient){
    }


    query(callable){
        console.log('iniciando comunicacao com servico');
        const url='https://jsonplaceholder.typicode.com/posts';
        this.httpClient.get(url).then(
            (response:HttpResposta) => {
                callable(response.body);
            }
        );
        // conexaoHttp.onreadystatechange = function()
        // {
        //     if(this.readyState == 4 && this.status == 200)
        //     {
        //         console.log('retornou dados');
        //         callable(this.responseText);
        //     }
        // }
        
        // conexaoHttp.send();
    }

    post(){

    }

}

