import React, { Component } from 'react'

class SearchBar extends Component 
{
    state=
    {
        term:""
    }

    onFormSubmit=(e)=>
    {
        e.preventDefault();
        this.props.onSubmit(this.state.term); 
        //When we are inside the class component we use this.props rather than props
    }

    render()
    {
    return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div>
                <label><b><i>Image Search</i></b></label>
                <hr />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onClick={this.onInputClick}
                    onChange={ (e) => { this.setState({ term:e.target.value })} } 
                    value={this.state.term}
                />

                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;