const ButtonItem = (button, active) => {
    return(`
           ${Active(button, active)}
            <div class="row">
              <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <i class="${button.iconClass}" aria-hidden="true">
                    </i>
                </i>
              </div>
              <div class="col-1 d-none d-xl-block">
                <span class="ps-1 fw-bolder">${button.title}</span>
              </div>
            </div>
          </a>
    `
    );
}

const Active = (button, active) => {
    return(`${button.title === active ? 
              `<a href="${button.link}" id="${button.title}" class="list-group-item list-group-item-action clickable active">` :
              `<a href="${button.link}" id="${button.title}" class="list-group-item list-group-item-action clickable">`}`
    );
}

export default ButtonItem;