import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from 'material-ui/GridList';
import GridTile from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResult extends Component {

    render() {
        let imageListContent;
        const {images} = this.props;
        if(images){
            imageListContent = (
            <div>
                images.map(img => {
                    <div>
                        <img src={img.tags}    />
                    </div>
                }
            </div>          
            )
        }else{
            imageListContent = null;
        }

        return (
            <div>
                {imageListContent}
            </div>
        )
    }
}

ImageResult.ProtTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResult;
