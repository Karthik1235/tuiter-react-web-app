import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`<div class="text-white pt-3">
      <form class="border-1 p-0">
        <input class="wd-nosubmit h-75 bg-light" type="search" placeholder="Search Tuiter">
        <i class="fas fa-cog fa-2x text-primary ps-5 pt-1"></i>
      </form>

      <ul class="nav nav-tabs pt-2">
        <li class="nav-item">
          <a class="nav-link active border-4 border-primary border-bottom fw-bolder" href="#">For You</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link fw-bolder inactive" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder inactive" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder inactive" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder inactive d-none d-md-block" href="#">Entertainment</a>
        </li>
      </ul>

      <div class="position-relative mt-0">
        <img src="../images/spacex-starship.jpeg" width="100%">
        <div class="ps-3 pt-3 pb-2 position-absolute bottom-0 left-0 text-white">
          <h3 class="fw-bolder text-black">SpaceX's Starship</h3>
        </div>
      </div>
      ${PostSummaryList()}
      </div>
`);
}
export default ExploreComponent;