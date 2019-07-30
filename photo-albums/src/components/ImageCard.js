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
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img ref={this.imageRef} alt="User Value" src={this.props.src}  />
                        </div>
                        <div className="content">
                            <div className="header">{this.props.name}</div>
                        </div>
                    </div>
                </div>   
        );
    }
}

export default ImageCard; 