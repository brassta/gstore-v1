import * as React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

interface Props {
  children: any;
  showIndicators: boolean;
}

const Carousel = ({ children, showIndicators }: Props) => (
  <ResponsiveCarousel
    showThumbs={false}
    showArrows={false}
    showStatus={false}
    infiniteLoop
    autoPlay
    showIndicators={showIndicators}>
    {children}
  </ResponsiveCarousel>
);

export default Carousel;
