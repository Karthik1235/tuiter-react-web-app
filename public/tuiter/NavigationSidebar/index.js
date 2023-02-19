import ButtonList from "./ButtonList.js";

const NavigationSidebar = (active) => {
    return(`
        <div class="mt-5">
      <div class="row">
        <div class="list-group col-8 pb-5 p-0">
          <a href="#" class="list-group-item list-group-item-action ">
            <i class="fab fa-tumblr fa-2x"></i>
          </a>
          
          ${ButtonList(active)}
          
          <div class="d-grid mt-2">
            <a href="tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
           </div>
        </div>
      </div>
    </div>
`);
}

export default NavigationSidebar;