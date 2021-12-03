import React, {Component} from "react";
import "./SearchBar.css";
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
            <div classname="search">
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Search..." onChange={this.handleChange}/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        )
    }
}

export default SearchBar;