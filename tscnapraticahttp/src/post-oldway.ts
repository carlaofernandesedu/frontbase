
import OldHttp from 'http/old-http';
import HttpClient from 'http/http-client';

class PostOldWay
{
    constructor(private requisicao:OldHttp)
    {
        this.init();
    }

    listar(resposta){
      let elemento = document.getElementById('#listapost');
      console.log(resposta);
    }

    private init(){
      this.requisicao.query(this.listar);
    }
}

new PostOldWay(new OldHttp(new HttpClient()));