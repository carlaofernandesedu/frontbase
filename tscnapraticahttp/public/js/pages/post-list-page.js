define(["require", "exports", "../components/post-table", "../http/http-wrapper"], function (require, exports, post_table_1, http_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostListPage {
        constructor(httpWrapper, postTable) {
            this.httpWrapper = httpWrapper;
            this.postTable = postTable;
            this.init();
        }
        getPosts() {
            this.httpWrapper.query().then((posts) => {
                this.postTable.Data = posts;
                this.postTable.make();
            });
        }
        init() {
            this.getPosts();
        }
    }
    const postTable = new post_table_1.default("#my-table>tbody", ["title", "body"]);
    const httpWrapper = new http_wrapper_1.default();
    new PostListPage(httpWrapper, postTable);
});
//# sourceMappingURL=post-list-page.js.map