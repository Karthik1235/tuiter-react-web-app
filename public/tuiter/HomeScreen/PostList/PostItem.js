const PostItem = (post) => {
    return(`
    <div class="row text-white border-secondary border pt-3">
      <div class="col-1 pe-0">
        <img class="float-end w-100 rounded-circle" src=${post.image} >
      </div>
      <div class="col-11">
        <div class="fw-bolder">
            ${post.userName}
            <i class="fas fa-check-circle"></i>
          <small class="text-secondary">
            ${post.handle}
            - ${post.time}
          </small>
        </div>
        <div class="pb-2">
          <small>
            ${post.title}
          </small>
        </div>
        <div class="mt-0">
          <img class="rounded-top border-secondary border" src=${post.postImage} width="100%">
          ${PostImageText(post)}
          <div class="row pt-2 ps-2 pb-2">
            <div class="col-3">
              <a class="nav-link text-muted" href="#">
                <i class="fas fa-comment"></i> &nbsp; ${post.replies}
              </a>
            </div>
            <div class="col-3">
              <a class="nav-link text-muted" href="#">
                <i class="fas fa-retweet"></i> &nbsp; ${post.retweets}
              </a>
            </div>
            <div class="col-3">
              <a class="nav-link text-muted" href="#">
                <i class="fas fa-heart"></i> &nbsp;${post.likes}
              </a>
            </div>
            <div class="col-3">
              <a class="nav-link text-muted " href="#">
                <i class="fas fa-arrow-up"></i>&nbsp;
              </a>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>`

    );
}

function PostImageText(post) {
    if(post.postImageTitle.length !==0 && post.postImageContent.length !== 0) {
        return(`
        <div class="ps-2 pt-2 pb-2 bottom-0 left-0 text-white border-secondary border-start border-bottom border-end rounded-bottom">
            <div>
            ${post.postImageTitle}
            </div>
            <small class="text-secondary">
              ${post.postImageContent}
            </small>
          </div>`
        );
    }
    else{
        return '';
    }
}

export default PostItem;