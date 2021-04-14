define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Table {
        constructor(querySelector, data, columns) {
            this.querySelector = querySelector;
            this.data = data;
            this.columns = columns;
        }
        createRows() {
            let tableHtml = this.get();
            for (let rowData of this.data) {
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