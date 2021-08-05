import Header from "./Header";
import Footer from "./Footer";
import logoPhoto from "../HomePhoto.jpg";
import { title, link1, link2, link3 } from '../Info';
import { Component } from "react";
import Button from 'react-bootstrap/Button';


class HomePage extends Component{
    render(){
        return(
            <div>
                <div>
                    <Header title = {title} link1 = {link1} link2 = {link2} link3 = {link3}/>
                </div>
                <div>
                    <img src = {logoPhoto} alt = "I Swear There Was a Photo"/>
                    <br/><br/>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">
                        Basic
                    </Button>
                    <Button variant="secondary" size="lg">
                        Advanced
                    </Button>
                    <Button variant="secondary" size="lg">
                        Pro
                    </Button>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomePage;