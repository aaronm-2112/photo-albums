import './ImageUploader.css';
import React from 'react'; 



class ImageUploader extends React.Component {

    //I was tripped up with this process for a long time. The reason is setState is asynchronous. When I tried to 
    state = {images: []}; 

    noSubmit = (event) => {
        event.preventDefault();
        this.props.displayPictures(this.state.images); 
        
    }

    loadImages = (event) => {
        this.setState({images: event.target.files}); 
        console.log(event.target.files); 
    }

    render () {
        return (
            <div>
                <form className="ui form"  onSubmit={this.noSubmit}> 
                    <div className="inline fields" id="form-fields">
                        <div className="two wide field"> 
                            <label>Upload Your Photos</label>
                        </div>
                        <div className="five wide field">
                            <input type="file" 
                                   onChange={this.loadImages} 
                                   multiple
                            />
                        </div>
                        <button type="submit" className="ui primary button" >Upload</button> 
                    </div>
                </form>
            </div>
        );
        
    }
}



export default ImageUploader; 