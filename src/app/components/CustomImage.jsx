import Image from 'next/image';

function CustomImage({ src, alt, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-lg shadow-md ${className}`}
    />
  );
}

export default CustomImage;