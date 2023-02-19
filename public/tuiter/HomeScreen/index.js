import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostItem from "./PostList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-sm-2 col-md-2 col-lg-1 col-xl-2 p-0 ps-5">
                ${NavigationSidebar('Home')}
            </div>
            <div class="col-sm-10 col-md-10 col-lg-7 col-xl-6 pb-5">
                ${PostItem()}
            </div>
            <div class="col-lg-4 col-xl-3">
                ${PostSummaryList()}
            </div>
        </div>`);
}
$(exploreComponent);