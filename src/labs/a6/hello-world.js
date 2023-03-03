import {Link} from "react-router-dom";
import Nav from "../../nav";

function HelloWorld() {
    return(
        <div>
            <Nav/>
            <h1>Hello World!</h1>
            <img src={"../../tuiter/images/cover.jpg"}/>
        </div>
    );
};
export default HelloWorld;