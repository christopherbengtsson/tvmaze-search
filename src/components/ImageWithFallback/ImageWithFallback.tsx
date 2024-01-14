import placeHolderImage from '../../assets/images/image-placeholder.png';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
}

export function ImageWithFallback({ src, alt }: ImageWithFallbackProps) {
  return (
    <img alt={src ? alt : 'placeholder-image'} src={src || placeHolderImage} />
  );
}
