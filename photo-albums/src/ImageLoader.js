    //create a list of images from the props.pictures list we pass into the functional component 
    //For each file, create a source url that can be used in an <img> tag 
    //use the FileReader object and the readAsDataURL function to do so 
    //would use a map, but the FileReader object is not an array 

function getSource(pictures, sourceResults, filesObject) {
    return new Promise(resolve => {
        //approach doesn't handle corrupt files.....figure that out 
        Array.from(pictures).forEach((picture) => {
            var reader = new FileReader() 
            reader.onload = function(e) {
                 // The file's text will be printed here
                 //console.log(e.target.result)
                 sourceResults.push(e.target.result) 
                 filesObject.pictureNameArray.push(picture.name)
                 filesObject.pictureSourceArray.push(e.target.result)
                 console.log("Test" + filesObject.fileName)
                 if(filesObject.pictureSourceArray.length === pictures.length) {
                     resolve(filesObject); 
                 }
             };
             reader.readAsDataURL(picture);      
          
     }); 
    });
}


export default async function loadImages (pictures) {    
        let fileSourceResults = []; 
        let filesObject = {
            pictureSourceArray: [] , 
            pictureNameArray: []
        }; 

        const sourceResults = await getSource(pictures, fileSourceResults, filesObject);  
        return sourceResults; 
}