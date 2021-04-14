import OldHttp from 'http/old-http';
import HttpClient from 'http/http-client';
import PostTable from 'components/post-table';

class PostOldWay
{
    constructor(private requisicao:OldHttp)
    {
        this.init();
    }

    listar(resposta){
      console.log("servico retornado:");
      new PostTable("#my-table>tbody",JSON.parse(resposta),["title","body"]).make();
      
    }

    private init(){
      this.requisicao.query(this.listar);
    }
}

new PostOldWay(new OldHttp(new HttpClient()));