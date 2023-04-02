import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "../reducers/tuits-array-reducer";
import {useSelector} from "react-redux";
import { updateTuitThunk } from '../../services/tuits-thunks';

const TuitStats = (
    {
        post = { "avatarIcon": "../../../tuiter/images/elon-musk-img.jpeg", "userName": "Elon Musk", "verified": true, "handle": "elonmusk", "time": "23h", "tuit": "Amazing show about @Inspiration4x mission!", "hasImage": true, "image": "inspiration4.jpeg", "hasLink": true, "link_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site", "link_text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...", "link_url": "netflix.com", "comments": "4.2K", "retuits": "3.5K", "likes": "37.5K" }
    }
) => {
    const dispatch = useDispatch();

    return(
        <ul className=" list-group justify-content-between list-group-horizontal d-flex">
            <li className="override-lg text-nowrap border-0  text-secondary list-group-item">
                <a href="#" className="text-decoration-none text-secondary ">
                    <i className="bi bi-chat text-muted pe-1"/>
                    <span className='text-secondary '>
                        {post.replies}
                    </span>
                </a>
            </li>

            <li className="list-group-item text-nowrap border-0 text-secondary override-lg">
                <a href="#" className="text-secondary text-decoration-none">
                    <i className="bi bi-arrow-repeat text-muted pe-1"/>
                    <span className='text-secondary '>
                        {post.retuits}
                    </span>
                </a>
            </li>

            {<div className='pt-2'>
                <i onClick={() => dispatch(updateTuitThunk({...post, likes: post.likes + 1}))}
                   className="bi bi-heart-fill me-2 text-danger"></i>
                {post.likes}
            </div>}

            {<div className='pt-2'>
                <i onClick={() => dispatch(updateTuitThunk({...post, dislikes: post.dislikes + 1}))}
                   className="bi bi-hand-thumbs-down me-2 text-secondary"></i>
                    {post.dislikes}
                </div>
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
