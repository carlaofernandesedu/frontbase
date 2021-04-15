import Page from './page';
import PostTable from '../components/post-table';
import HttpWrapper from '../http/http-wrapper';


class PostListPage implements Page{

    constructor(private httpWrapper:HttpWrapper,private postTable:PostTable){
        this.init();
    }

    getPosts()
    {
        this.httpWrapper.query().then
        ((posts:Array<any>)=>{
           this.postTable.Data = posts;
           this.postTable.make();     
        });
    }
    
    init(): void {
        this.getPosts();
    }

}

const postTable = new PostTable("#my-table>tbody",["title","body"]);
const httpWrapper = new HttpWrapper();
new PostListPage(httpWrapper,postTable);