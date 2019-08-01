import React from 'react'; 
import ImageUploader from './ImageUploader'; 
import ImageDisplay from './ImageDisplay'; 
import ImageLoader from '../ImageLoader'; 
import VerticalNavigation from './VerticalNavigation';
import SearchBar from './SearchBar'; 
import Account from './Account';
import './App.css'; 


/* 
Timeline:
1. CSS of files os they display prettily + non-functional UI elements
2. Profile system, and persistent storage of pics. 
3. Image previews 

*/

class App extends React.Component {

    state = { pictureData: {pictureSourceArray: [], pictureNameArray: []}, page: 'photos'}; 

    displayPictures = (pictureFiles) => {
        let picturesSourcePromise = ImageLoader(pictureFiles)
        picturesSourcePromise.then( elements  => {
            this.setState({pictureData: elements})
            console.log(elements)
        })  
    }

    displayPage = (pageValue) => {
        this.setState({page: pageValue})
    }

    render() {

        switch(this.state.page){
            case 'photos':
                return (
                        <div className="layoutContainer">
                            <div className="logo">
                                <i className="camera icon"> </i>
                                <p>Corner Pictures</p>    
                            </div>
                            <div className="ImageUploader"> 
                                <ImageUploader  displayPictures={this.displayPictures}/> 
                            </div>
                            <div className="DropDownMenu">
                                <SearchBar />  
                            </div>
                            <div className="UserActions">
                                <div className="test"> <VerticalNavigation pageSelectionFunction={this.displayPage}/></div>
                            </div>
                            <div className="ImageGrid"> 
                                <ImageDisplay pictureSource={this.state.pictureData} />
                            </div>
                        </div>
                );
                
            case 'albums': 
                return (
                    <div className="layoutContainer">
                        <div className="logo">
                            <i className="camera icon"> </i>
                            <p>Corner Pictures</p>    
                        </div>
                        <div className="ImageUploader"> 
                            <ImageUploader  displayPictures={this.displayPictures}/> 
                        </div>
                        <div className="DropDownMenu">
                            <SearchBar />  
                        </div>
                        <div className="UserActions">
                            <div className="test"> <VerticalNavigation pageSelectionFunction={this.displayPage}/></div>
                        </div>
                        <div className="ImageGrid"> 
                            <ImageDisplay pictureSource={this.state.pictureData} />
                        </div>
                    </div>
                );
        
            case 'account':
                return (
                    <div className="layoutContainer">
                        <div className="logo">
                            <i className="camera icon"> </i>
                            <p>Corner Pictures</p>    
                        </div>
                        <div className="ImageUploader"> 
                            <ImageUploader  displayPictures={this.displayPictures}/> 
                        </div>
                        <div className="DropDownMenu">
                            <SearchBar />  
                        </div>
                        <div className="UserActions">
                            <div className="test"> <VerticalNavigation pageSelectionFunction={this.displayPage}/></div>
                        </div>
                        <div className="AccountGrid"> 
                            <Account />
                        </div>
                    </div>
                );

        }
    }; 
}

export default App; 