import React, {Component} from "react";
import "./Dashboard.css";

class Dashboard extends Component {



    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <nav className="navbar navbar-expand-lg">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">Filter</li>
                                <li className="nav-item active">Filter</li>
                                <li className="nav-item active">Filter</li>
                                <li className="nav-item active">Filter</li>
                            </ul>
                        </nav>
                        <div className="gallery">
                            <div className="image">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <nav className="navbar navbar-expand-lg">

                    </nav>
                        <div className="tags">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard;
