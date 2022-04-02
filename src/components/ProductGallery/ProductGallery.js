import React, {useState, useRef} from "react";

import ImageGallery from 'react-image-gallery';
import {ZoomBtnWrapper} from './style'

import PackageIcon from '../../icons/package.svg'
import {ReactComponent as ZoomIn} from '../../icons/zoom-in.svg'
import {ReactComponent as ZoomOut} from '../../icons/zoom-out.svg'


const ProductGallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  let galleryRef = useRef();

  const handleFullScreen = e => {
    galleryRef.current.toggleFullScreen();
    setIsFullscreen((prev) => !prev);
  }

  const renderCustomControls = () => {
    return <ZoomBtnWrapper onClick={handleFullScreen}>
            {isFullscreen ? <ZoomOut/> : <ZoomIn />}
          </ZoomBtnWrapper>
  }

  const images = [
    {
      original: PackageIcon,
      thumbnail: PackageIcon,
    },
    {
      original: PackageIcon,
      thumbnail: PackageIcon,
    }
  ];

  return (
    <div>
      <ImageGallery ref={galleryRef} items={images} renderFullscreenButton={renderCustomControls} showPlayButton={false} showNav={false} thumbnailPosition={'left'}/>;
    </div>
  )
};

export default ProductGallery;
