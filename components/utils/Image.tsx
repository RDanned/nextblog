import {default as NextImage} from "next/image";
import {useEffect, useState} from "react";


function Image({src, ...rest}){
  const {width=300, height=300, alt} = rest
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [imageFallbackSrc, setImageFallbackSrc] = useState<string>(`http://via.placeholder.com/${width}x${height}.png`)
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    setImageSrc(src)
    setImageFallbackSrc(`http://via.placeholder.com/${width}x${height}.png`)
  }, [src])

  return (
    <NextImage
      {...rest}
      src={imageError || !imageSrc.length ? imageFallbackSrc : imageSrc }
      alt={alt}
      width={width}
      height={height}
      unoptimized={true}
      onError={() => setImageError(true)}
    />
  )
}

export default Image