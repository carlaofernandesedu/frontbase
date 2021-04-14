define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Table {
        constructor(querySelector, columns, _data) {
            this.querySelector = querySelector;
            this.columns = columns;
            this._data = _data;
        }
        set Data(value) {
            this._data = value;
        }
        createRows() {
            let tableHtml = this.get();
            for (let rowData of this._data) {
                const rowHtml = document.createElement('tr');
                for (let columnName of this.columns) {
                    this.createColumn(rowHtml, rowData[columnName]);
                }
                tableHtml.appendChild(rowHtml);
            }
        }
        createColumn(rowHtml, columnData) {
            let colHtml = document.createElement('td');
            colHtml.innerHTML = columnData;
            rowHtml.appendChild(colHtml);
        }
        get() {
            return document.querySelector(this.querySelector);
        }
        make() {
            this.createRows();
        }
    }
    exports.default = Table;
});
//# sourceMappingURL=table.js.map