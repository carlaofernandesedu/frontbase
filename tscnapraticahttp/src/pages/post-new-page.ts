import Page from './page';
import HttpWrapper from '../http/http-wrapper';
import Form from '../components/form';
import ValidatorManager from '../components/validators/validator-manager';
import Validator from '../components/validators/validator';


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
        if (!this.isValid())
            return;

        let data = { title:Form.getValueFromField("#title"), body:Form.getValueFromField("#body") };
        this.httpWrapper.post(data).then
        ((response:object)=>{
            console.log(response);
            alert('submetido' + data.title +  '-' + data.body);
        });
    }

    isValid():boolean
    {
        let validator = new ValidatorManager([
          {selector:'#title',rules:[Validator.required,Validator.mincarac],message:'titulo invalido'},
          {selector:'#body',rules:[Validator.required],message:'conteudo invalido'}]
        );
        return validator.isValid();
    }
    
    init(): void {
        this.associarEventos();
    }

}

const httpWrapper = new HttpWrapper();
new PostNewPage(httpWrapper);