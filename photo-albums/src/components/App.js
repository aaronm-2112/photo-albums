import React from 'react'; 
import ImageUploader from './ImageUploader'; 
import ImageDisplay from './ImageDisplay'; 
import ImageLoader from '../ImageLoader'; 
import VerticalNavigation from './VerticalNavigation';
import './App.css'; 

/* 
Timeline:
1. CSS of files os they display prettily + non-functional UI elements
2. Profile syste, and persistent storage of pics. 
3. Image previews 

*/

class App extends React.Component {

    state = { pictureFileAsData: []}; 

    displayPictures = (pictureFiles) => {
        let picturesSourcePromise = ImageLoader(pictureFiles)
        picturesSourcePromise.then( elements  => {
            this.setState({pictureFileAsData: elements})
        })
    }

    render() {
        return (
                <div className="layoutContainer">
                    <div className="ImageUploader"> 
                        <ImageUploader  displayPictures={this.displayPictures}/> 
                    </div>
                    <div className="UserActions">
                        <div className="test"> <VerticalNavigation /></div>
                    </div>
                    <div className="ImageGrid"> 
                        <ImageDisplay  pictureSource={this.state.pictureFileAsData} />
                    </div>
                </div>
        );
    }; 
}

export default App; 