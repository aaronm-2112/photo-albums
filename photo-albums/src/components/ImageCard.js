import React from 'react'; 

class ImageCard extends React.Component {
    constructor(props) {
        super(props); 

        this.state={vertical: undefined} 

        this.imageRef = React.createRef(); 

    }

    componentDidMount() {
        console.log(this.imageRef.current);
        //this.imageRef.current.addEventListener('load', this.set); 
    }

    render() {
        return (
            <div>
                <img ref={this.imageRef} alt="User Value" src={this.props.src}  />
            </div> 
        );
    }
}

export default ImageCard; 