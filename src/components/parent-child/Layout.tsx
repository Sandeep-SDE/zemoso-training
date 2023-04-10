import Body from "./Body";
import Fotter from "./FooterBar";
import Navbar from "./Navbar";


export default function Layout(){
    return(
        <div className="layout">
            <Navbar />
            <Body/>
            <Fotter/>
        </div>
    );
}