import React from "react";
import {Link} from "react-router-dom";
import "./TopNav.css";


class TopNav extends React.Component {

    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
        this.checkboxRef = React.createRef();
        this.state = {isMenuOpen: false};
    }

    openMenu = () => {
        this.checkboxRef.current.checked = true;
        this.setState({isMenuOpen: true});
        this.menuRef.current.classList.add("open");
    }
    closeMenu = () => {
        this.checkboxRef.current.checked = false;
        this.setState({isMenuOpen: false});
        this.menuRef.current.classList.remove("open");
    }
    onMenuItemClick = () => {
        this.closeMenu();
    }

    onHamburgerMenuClicked = () => {
        const {isMenuOpen} = this.state;

        console.log(this.menuRef.current);

        if (isMenuOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }

    }

    render() {
        return (
            <header>
                <div id="menuToggle">
                    <input type="checkbox" onChange={this.onHamburgerMenuClicked} ref={this.checkboxRef}/>
                    <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <nav role="navigation" className="navigation">
                    <p className="app-name"><Link to="/">MeteoPipe</Link></p>
                </nav>
                <ul ref={this.menuRef} id="menu">
                    <p className="user-info"></p>
                    <li><Link onClick={this.closeMenu} to="/home">Home</Link></li>
                    <li><Link onClick={this.closeMenu} to="#">My devices</Link></li>
                    <li><Link onClick={this.closeMenu} to="/map">Map</Link></li>
                    <li><Link onClick={this.closeMenu} to="#">Sign in</Link></li>
                </ul>

            </header>
        );
    }
}

export default TopNav;