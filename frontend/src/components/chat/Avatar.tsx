import Image from 'next/image';

interface IAvatarProps {
  src: string;
  size: number;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({ src, size }) => {
  return (
    <Image
      src={src}
      alt='profile picture'
      width={size}
      height={size}
      className='rounded-full'
    />
  );
};

export default Avatar;
