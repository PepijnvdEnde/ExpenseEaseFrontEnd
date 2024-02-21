import { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            link: this.props.link
        }
    }
    render() {
        return (
            <div className="p-2 mr-2 w-max border-indigo-600 border-2 rounded text-center my-2 bg-indigo-600 text-white">
                <Link to={`/${this.state.link}`}>
                    {this.state.name}
                </Link>
            </div>
        );
    }

}

export default NavbarButton;
