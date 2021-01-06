import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./TopNav.css";
import {closeMenu, openMenu} from "../../redux/actions";


class TopNav extends React.Component {

    constructor(props) {
        super(props);
        this.menuRef = React.createRef();
        this.checkboxRef = React.createRef();
        this.state = {isMenuOpen: false};
    }

    openMenu = () => {
        // this.checkboxRef.current.checked = true;
        // this.setState({isMenuOpen: true});
        this.props.openMenu();
        this.menuRef.current.classList.add("open");
    }
    closeMenu = () => {
        // this.checkboxRef.current.checked = false;
        // this.setState({isMenuOpen: false});
        this.props.closeMenu();
        this.menuRef.current.classList.remove("open");
    }
    onMenuItemClick = () => {
        this.closeMenu();
    }

    onHamburgerMenuClicked = () => {
        const {isMenuOpen} = this.props;

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
                    <input type="checkbox" onChange={this.onHamburgerMenuClicked}
                           ref={this.checkboxRef} checked={this.props.isMenuOpen}/>
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
                    <li><Link onClick={this.closeMenu} to="/my-devices">My devices</Link></li>
                    <li><Link onClick={this.closeMenu} to="/map">Devices map</Link></li>
                    <li><Link onClick={this.closeMenu} to="/sign-in">Sign in</Link></li>
                </ul>

            </header>
        );
    }
}

const mapStateToProps = state => {
    return {isMenuOpen: state.menuStatus.isMenuOpen};
}
export default connect(mapStateToProps, {openMenu, closeMenu})(TopNav);