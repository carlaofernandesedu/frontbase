export default abstract class Table{

    constructor(private querySelector:string,private data:Array<any>,private columns:Array<string>){
    }

    protected createRows(){
      
        let tableHtml = this.get();
        for(let rowData of this.data)
        {
            const rowHtml = document.createElement('tr');
            for(let columnName of this.columns)
            {
                this.createColumn(rowHtml,rowData[columnName]);
            }
            tableHtml.appendChild(rowHtml);
        }
        
    }

    protected createColumn(rowHtml:HTMLTableRowElement, columnData:string){
      let colHtml = document.createElement('td');
      colHtml.innerHTML = columnData ;
      rowHtml.appendChild(colHtml);
    }

    protected get()
    {
        return document.querySelector(this.querySelector);
    }

    make(){
        this.createRows();
    }
}