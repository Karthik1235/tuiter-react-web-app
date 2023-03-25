import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const PostSummaryItem2 = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div>
            <div className="mt-2 pt-0 pb-5 position-realtive ">
                <img  alt="profile" className="  border-bottom border-secondary rounded "src={profile.coverPicture} height = {300} width={550}/>
                <div className=" ps-4   position-absolute top-50 h-100 ">
                    <img   alt="profile" className="float-left float-start  rounded-circle" src={profile.profilePicture} height ={90} width={90} />
                </div>

            </div>
            <div className>

                <Link to="/tuiter/editprofile" >

                    <button className="btn btn-primary rounded-pill float-end ">EditProfile</button>
                </Link>
            </div>

            <div className="pt-2">
                <div className=" fw-bold">{profile.userName} <i className="text-primary bi bi-check-circle-fill"/>
                    <div className="text-muted"> {profile.handle} </div> </div>

                <div className="">{profile.bio}</div>
                <div className="text-muted">{profile.website}</div>
                <div className="text-muted pt-1 "><i className="bi bi-geo-alt text-secondary pe-2"/> {profile.location}      <span className="text-muted p-5"><i className="bi bi-balloon text-secondary pe-2"/> {profile.dob}</span>  <span className="text-muted"> <i className="bi bi-calendar3 text-secondary pe-2"/> {profile.dateJoined}</span>   </div>
                <div className=" fw-bold pt-1 pl-2"> {profile.followers}   <span className="text-muted">Following</span>  <span className=" fw-bold p-5 p-2">{profile.following}<span className="text-muted ">Followers</span> </span>

                </div>
            </div>

        </div>
    );
};
export default PostSummaryItem2;