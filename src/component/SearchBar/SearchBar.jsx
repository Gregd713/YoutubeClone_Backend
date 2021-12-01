import React, {Component} from "react";

class SearchBar extends Component {
   state = {
       searchTerm: '',
   }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Search..." onChange={this.handleChange}/>
            </form>
        )
    }
}

export default SearchBar;