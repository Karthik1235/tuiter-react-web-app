import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "../reducers/tuits-array-reducer";
import {useSelector} from "react-redux";

const TuitStats = (
    {
        post = { "avatarIcon": "../../../tuiter/images/elon-musk-img.jpeg", "userName": "Elon Musk", "verified": true, "handle": "elonmusk", "time": "23h", "tuit": "Amazing show about @Inspiration4x mission!", "hasImage": true, "image": "inspiration4.jpeg", "hasLink": true, "link_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site", "link_text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...", "link_url": "netflix.com", "comments": "4.2K", "retuits": "3.5K", "likes": "37.5K" }
    }
) => {
    const dispatch = useDispatch();

    const likeTuitHandler = (post) => {
        dispatch(likeTuit(post))
    }

    const unlikeTuitHandler = (post) => {
        dispatch(unlikeTuit(post))
    }


    return(
        <ul className="d-flex justify-content-between list-group list-group-horizontal">
            <li className="list-group-item text-nowrap border-0 override-lg text-secondary "> <a href="#" className="text-decoration-none text-secondary ">
                <i className="bi bi-chat text-muted pe-1"/> <span className='text-secondary '> {post.replies} </span> </a></li>

            <li className="list-group-item text-nowrap border-0 text-secondary override-lg">
                <a href="#" className="text-secondary text-decoration-none">
                    <i className="bi bi-arrow-repeat text-muted pe-1"/>
                    <span className='text-secondary '>
                        {post.retuits}
                    </span>
                </a>
            </li>

            { !post.liked &&
              <button
                  onClick={() => likeTuitHandler(post)}
                  className="list-group-item text-nowrap border-0 text-secondary override-lg">
                  <i className="bi bi-heart text-muted pe-1"/>
                  <span className='ms-1'>
                      {post.likes}
                  </span>
              </button>
            }

            {
                post.liked &&
                <button
                    onClick={() => unlikeTuitHandler(post)}
                    className="list-group-item text-nowrap border-0 text-secondary override-lg">
                    <i className="bi bi-heart text-muted pe-1"/>
                    <span className='ms-1'>
                        {post.likes}
                    </span>
                </button>
            }

            <li className="list-group-item text-nowrap border-0 text-secondary override-lg">
                <a href="#" className="text-secondary text-decoration-none">
                    <i className="bi bi-box-arrow-up text-muted"/>
                </a>
            </li>
        </ul>
    );
};
export default TuitStats;
