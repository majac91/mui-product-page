import React from "react";
import ImageGallery from 'react-image-gallery';
import PackageIcon from '../../icons/package.svg'
import {ReactComponent as Pack} from '../../icons/package.svg'


const ProductGallery = () => {
  const images = [
    {
      original: PackageIcon,
      thumbnail: PackageIcon,
    },
    {
      original: PackageIcon,
      thumbnail: PackageIcon,
    },
    {
      original: PackageIcon,
      thumbnail: PackageIcon,
    },
  ];
  return (
    <div>
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showNav={false} thumbnailPosition={'left'}/>;
    </div>
  )
};

export default ProductGallery;
