import HttpClient from './http-client';
import HttpResposta from './http-resposta';

export default class HttpWrapper
{
    private httpClient:HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }


    query():Promise<Array<any>>{
        console.log('iniciando comunicacao com servico via GET');
        const url='https://jsonplaceholder.typicode.com/posts';
        return this.httpClient.get(url).then(function (response:HttpResposta) {
               return JSON.parse(response.body);
            });
    }

    post(data:{title:string,body:string}):Promise<object>{
        console.log('iniciando comunicacao com servico via POST');
        const url='https://jsonplaceholder.typicode.com/posts';
        return this.httpClient.post(url,data).then(function (response:HttpResposta) {
               return JSON.parse(response.body);
            });
    }    

}