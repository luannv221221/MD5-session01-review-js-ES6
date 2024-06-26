import MainContent from "./MainContent";
import SiderBar from "./SiderBar";
import './Content.css'
function Content() {
    return (<>
        <div className="container">
            <SiderBar />
            <MainContent />
        </div>
    </>)
}
export default Content;