import React, {useState, useRef} from "react";
import data from '../../data/data.json'

import ImageGallery from 'react-image-gallery';
import {ZoomBtnWrapper} from './style'

import PackageIcon from '../../icons/package.svg'
import {ReactComponent as ZoomIn} from '../../icons/zoom-in.svg'
import {ReactComponent as ZoomOut} from '../../icons/zoom-out.svg'

const ProductGallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  let galleryRef = useRef();

  const handleFullScreen = e => {
    galleryRef.current.toggleFullScreen(); //native plugin method
    setIsFullscreen((prev) => !prev);
  }

  const renderCustomControls = () => {
    //replace the default plugin zoom in button and render different icons based on state
    return <ZoomBtnWrapper disableRipple onClick={handleFullScreen} aria-label={isFullscreen ? "zoom out" : "zoom in"}>
            {isFullscreen ? <ZoomOut/> : <ZoomIn />}
          </ZoomBtnWrapper>
  }

  const getImages = () =>  {
    const images = [];
    data.article.images.forEach(imgUrl => {
      images.push(
          {
            original: imgUrl && imgUrl.status === 200 ? imgUrl : PackageIcon, //show icon in case the image is not valid
            thumbnail: imgUrl && imgUrl.status === 200 ? imgUrl : PackageIcon,
          }
      )
    });

    return images;
  }

  const images = getImages();

  return (
    <div>
      <ImageGallery ref={galleryRef} items={images} renderFullscreenButton={renderCustomControls} showPlayButton={false} showNav={false} thumbnailPosition={'left'}/>;
    </div>
  )
};

export default ProductGallery;
