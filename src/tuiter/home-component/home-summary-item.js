import React from "react";
const PostSummaryItem1 = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row ps-1 pt-1">
                <div className="col-1 ps-0">
                    <img alt="profile" className="float-left float-start rounded-circle" src={`../../../tuiter/images/${post.profileImage}`} height ={45} width={45}/>
                </div>
                <div className="col-11">
                    <div className ="text-muted">
                        <PostImageText retweet = {post.retweet}/>
                    </div>
                    <div className="fw-bold">
                        {post.userName}
                        <i className="ps-1 text-primary bi bi-check-circle-fill"/>
                        <span className="text-muted">
                            {post.handle} - {post.time}
                        </span>
                    </div>
                    <div className="">{post.postText}</div>
                    <div className="border border-secondary rounded mt-2">
                        <img alt="profile" className=" w-100 border-bottom border-secondary rounded" src={`../../../tuiter/images/${post.postImage}`} height = "340"/>
                    </div>
                    <ul className="nav align-items-center nav-justified mt-2 p-0">
                        <li className="nav-item">
                            <a className="nav-link text-muted ps-0" href="#">
                                <i className="bi bi-chat text-muted pe-1"></i>
                                {post.replies}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">
                                <i className="bi bi-arrow-repeat text-muted pe-1"></i>
                                {post.retuits}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted"href="#">
                                <i className="bi bi-heart text-muted pe-1"></i>
                                {post.likes}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted"href="#">
                                <i className="bi bi-box-arrow-up text-muted"></i>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <a className="fw-bold text-primary text-decoration-none" href="#">
                            {post.show} </a>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem1;

const PostImageText = ({retweet}) => {
    if(retweet !== "") {
        return(
        <small>
            <i className="bi bi-arrow-repeat text-muted pe-1"></i>
            {retweet}
        </small>
        );
    }
    else{
        return '';
    }
}