import Page from './page';
import HttpWrapper from '../http/http-wrapper';
import Form from '../components/form';


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
        let data = { title:Form.getValueFromField("#title"), body:Form.getValueFromField("#body") };
        this.httpWrapper.post(data).then
        ((response:object)=>{
            console.log(response);
            alert('submetido' + data.title +  '-' + data.body);
        });
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