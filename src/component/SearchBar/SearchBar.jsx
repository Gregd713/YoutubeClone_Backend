import React, {Component} from "react";

class VideoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-floating mb-3">
                    <label htmlFor="floatingInput">Search</label>
                    <input name="title" type="title" className="form-control" id="floatingInput" placeHolder="Insert Text"
                        onChange={this.handleChange} value={this.state.title}/>
                </div>
            </form>
        )
    }
}

export default VideoSearch;