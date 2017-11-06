import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {terms: ''};
    }

    render() {
        return (
            <div className="search-bar">
		<div className="logo fl"><img className="youtube-logo"src="/images/YTLogo_old_new_animation.0.gif"/></div>
                <input value={this.state.terms} onChange={event=> this.onInputChange(event.target.value)}/>
            </div>
        )

    }

    onInputChange(terms) {
        this.setState({terms});
        this.props.onSearchTermChange(terms);
    }
}

export default SearchBar;
