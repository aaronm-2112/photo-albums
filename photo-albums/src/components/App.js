import React from 'react'; 
import ImageUploader from './ImageUploader'; 
import ImageDisplay from './ImageDisplay'; 
import ImageLoader from '../ImageLoader'; 

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
                <div>
                    <ImageUploader displayPictures={this.displayPictures}/> 
                    <ImageDisplay  pictureSource={this.state.pictureFileAsData} />
                    
                </div>
        );
    }; 
}

export default App; 