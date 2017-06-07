import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <form ref='uploadForm' 
          id='uploadForm' 
          action='/images/upload' 
          method='post' 
          encType="multipart/form-data">
            <input type="file" name="imageToUpload" />
            <input type='submit' value='Upload!' />
        </form>   
      </div>
    );
  }
}

export default ImageUpload;