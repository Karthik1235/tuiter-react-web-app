import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-sm-2 col-md-2 col-lg-1 col-xl-2 p-0 ps-5">
                ${NavigationSidebar('Explore')}
            </div>
            <div class="col-sm-10 col-md-10 col-lg-7 col-xl-6 pb-5">
                ${ExploreComponent()}
            </div>
            <div class="col-lg-4 col-xl-3">
                ${WhoToFollowList()}
            </div>
        </div>`);
}
$(exploreComponent);


