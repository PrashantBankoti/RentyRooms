import React from "react";
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container-fluid my-3">
                <Link className="navbar-brand mx-3 mr-5" to="/">RentyRooms</Link>
                <div className="collapse navbar-collapse">
                    <form className="form-inline mr-auto d-block w-50">
                        <div className="input-group">
                            <input className="form-control form-control-lg" type="search" placeholder="Enter location to search for rooms near you..." aria-label="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button"><i class="fas fa-search-location fa-lg"></i></button>
                            </div>
                        </div>
                    </form>
                    <div className="input-group mr-3 w-25">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-primary" type="button" disabled><i class="fas fa-globe fa-lg"></i></button>
                        </div>
                        <select class="custom-select custom-select-lg" id="languageselect">
                            <option selected>English</option>
                            <option value="hindi">Hindi</option>
                            <option value="urdu">Urdu</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-lg btn-outline-success px-3">Login</button>
                    <Link type="button" className="btn btn-lg btn-danger mx-3 px-3" to="/add-rooms">Add Rooms</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;