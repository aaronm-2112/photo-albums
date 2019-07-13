import './ImageUploader.css';
import React from 'react'; 



class ImageUploader extends React.Component {

    state = {images: []}; 

    noSubmit = (event) => {
        event.preventDefault();
        //console.log(event.target.files); 
    }

    loadImages = (event) => {
        this.setState({images: event.target.value}); 
        console.log(this.state.images); 
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
                            <input type="file" onChange={this.loadImages} value={this.state.images} multiple></input>                
                        </div>
                        <button type="submit" className="ui primary button" >Upload</button> 
                    </div>
                </form>
            </div>
        );
        
    }
}



export default ImageUploader; 