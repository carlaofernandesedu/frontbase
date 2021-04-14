export default abstract class Table{

    constructor(private querySelector:string,private columns:Array<string>,private _data?:Array<any>){
    }

    set Data(value:Array<any>)
    {
        this._data = value;
    }

    protected createRows(){
      
        let tableHtml = this.get();
        for(let rowData of this._data)
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