const PostSummaryItem = (post) => {
    return(`
    <div class="wd-font-serif pt-2">
        <div class="ps-3 pt-2 pb-2 bg-opacity-75">
          ${PostImage(post.image)}
          ${PostTopic(post.topic)}
          
          <div>
            ${PostUserName(post.userName)}
            ${PostTime(post.time)}
          </div>
          
          ${PostTitle(post.title)}
          ${PostTuits(post.tweets)}
        </div>
      </div>`

    );
}

function PostImage(image) {
    if(image !== "") {
        return(`
        <div class="wd-img-parent pe-2">
            <img class="float-end pe-1 rounded-3" src=${image} width="20%" height="100%">
        </div>`
        );
    }
    else{
        return '';
    }
}

function PostTopic(topic) {
    if(topic !== "") {
        return(`
        <div class="pb-0 pt-0 text-secondary">
            <small>${topic}</small>
          </div>`
        );
    }
    else{
        return '';
    }
}

function PostUserName(name) {
    if(name !== "") {
        return(`
        <small class="fw-bolder">
              ${name}
              <i class="fas fa-check-circle"></i>
            </small>`
        );
    }
    else{
        return '<i class="fas fa-check-circle"></i>';
    }
}

function PostTime(time) {
    if(time !== "") {
        return(`
        <small class="pb-0 pt-0 text-secondary">-${time}</small>`
        );
    }
    else{
        return '';
    }
}


function PostTitle(title) {
    if(title !== "") {
        return(`
        <small class="fw-bolder">
            ${title}
          </small>`
        );
    }
    else{
        return '';
    }
}

function PostTuits(tuits) {
    if(tuits !== undefined && tuits !== "") {
        return(`
        <div class="pb-0 pt-0 text-secondary">
            <small>${tuits}</small>
          </div>`
        );
    }
    else{
        return '';
    }
}


export default PostSummaryItem;