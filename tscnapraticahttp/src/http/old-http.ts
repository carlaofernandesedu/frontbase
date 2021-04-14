import HttpClient from './http-client';
import HttpResposta from './http-resposta';

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
    }

    post(){

    }

}

