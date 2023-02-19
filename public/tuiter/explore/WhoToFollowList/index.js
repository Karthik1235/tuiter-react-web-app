import WhoToFollowItem from "./WhoToFollowListItem.js";
import whos from "./who.js";
const WhoToFollowList = () => {
    return(`
    <div class="d-none d-lg-block pt-4 pe-xl-3 pe-lg-0">
      <div class="list-group col-10 ps-3 bg-light w-100">
        <div class="pt-2 fw-bolder">
          Who to follow
        </div>
${whos.map(who => {
            return(WhoToFollowItem(who));
        }).join('')}
<div class="text-primary pt-3">
          <h6 class="fw-normal wd-font-13">Show more</h6>
        </div>
      </div>
      <div class="wd-font-10 pt-2 ps-2 text-secondary">
        <div class="row ps-3">
          <div class="col-4">
            Terms of Service
          </div>
          <div class="col-4">
            Privacy Policy
          </div>
          <div class="col-4">
            Cookie Policy
          </div>
          <div class="col-4">
            Accessibility
          </div>
          <div class="col-2 p-0">
            Ads Info
          </div>
          <div class="col-3 p-0">
            More ...
          </div>
          <div class="col-4">
            @2023 Tuiter, Inc.
          </div>
        </div>
      </div>
     </div>
`);
}
export default WhoToFollowList;