import React from "react";
import postsArray from './homeposts.json';
import PostSummaryItem1 from "./home-summary-item.js";

const PostSummaryList1 = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post => <PostSummaryItem1 key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList1;

