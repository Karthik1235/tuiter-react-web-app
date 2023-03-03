import Asd from "./Asd"
import Rew from "./Rew"
import {BrowserRouter, Link, Routes, Route} from "react-router"

function App() {
    return(
        <BrowserRouter>
            <Link to="/qwe/21/14/wer">LINK A</Link>
            <Routes>
                <Route path="/qwe/:qwe/:wer/wer" element={<Asd/>}/>
                <Route path="/asd/:zxc/:xcv" element={<Rew/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App