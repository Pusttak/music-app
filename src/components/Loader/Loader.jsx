import Lottie from 'lottie-react';
import astronaut from 'animationIcon/astronautMusic.json';
import vinyl from 'animationIcon/vinyl.json';
import skeleton from 'animationIcon/skeleton.json';

export const Astronaut = ({ size = 100, style }) => {
  return <Lottie animationData={astronaut} style={{ width: `${size}px`, ...style }} />;
};

export const Vinyl = ({ size = 100 }) => {
  return <Lottie animationData={vinyl} style={{ width: `${size}px` }} />;
};

export const Skeleton = ({ size = 100 }) => {
  return <Lottie animationData={skeleton} style={{ width: `${size}px` }} />;
};
