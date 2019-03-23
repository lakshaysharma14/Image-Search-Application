import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        { 
            images:[] 
        }
    }
            
    onSearchSubmit = async (term) =>
    {
        const res = await Unsplash.get('/search/photos',{
        params:{query:term},
        })
        this.setState({images:res.data.results})
    }
//---------------------------------------------------------------------------------
    render()
    {
        // console.log(this.state.images);

        return (
            <div className="ui container" style={{marginTop:'40px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;
