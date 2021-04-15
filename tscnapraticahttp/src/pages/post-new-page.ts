import Page from './page';
import HttpWrapper from '../http/http-wrapper';


class PostNewPage implements Page{

    constructor(private httpWrapper:HttpWrapper){
        this.init();
    }

    private associarEventos()
    {
        document.querySelector('#my-form').addEventListener('submit',(event:Event)=>{
            event.preventDefault();
            this.submit();
            return false;
        });
    }

    submit(){
        alert('ok');
    }

    isValid():boolean
    {
        return false;
    }
    
    init(): void {
        this.associarEventos();
    }

}

const httpWrapper = new HttpWrapper();
new PostNewPage(httpWrapper);