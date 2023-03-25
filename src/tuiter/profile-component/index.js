import React from "react";
import postsArray from './profileposts.json';
import PostSummaryItem2 from "./profile-summary";

const PostSummaryList2 = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem2
                                       key={post._id} post={post}/> )

            }
        </ul>
    );
};
export default PostSummaryList2;

