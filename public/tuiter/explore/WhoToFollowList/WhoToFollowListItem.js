const WhoToFollowListItem = (who) => {
    return(`
    <div class="row pt-2">
        <div class="col-2">
            <img class="float-start rounded-circle" src=${who.avatarIcon} height="32px" width="36px">
          </div>
          <div class="col-7 wd-font-13 p-0">
            <div class="fw-bolder">${who.userName}
              <img class="wd-search-button" src="../images/icons8-verified-badge-48.png">
            </div>
            <div class="text-secondary">@${who.handle}</div>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-primary btn-sm float-end rounded-pill fw-bolder">Follow</button>
          </div>
        </div>`

    );
}
export default WhoToFollowListItem;