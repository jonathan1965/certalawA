import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';

interface IItem {
  images: string[];
}

const resources = [
  {
    images: [
      '/assets/images/clients/aims-grey.png',
      '/assets/images/clients/aims.png',
    ],
  },
  {
    images: [
      '/assets/images/clients/equity-grey.png',
      '/assets/images/clients/Equity.png',
    ],
  },
  {
    images: [
      '/assets/images/clients/bk-grey.png',
      '/assets/images/clients/BK.png',
    ],
  },
  {
    images: [
      '/assets/images/clients/gt-grey.png',
      '/assets/images/clients/GT.png',
    ],
  },
];

const CarouselPartners = ({
  data = resources,
}: {
  data?: IItem[];
}) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >
        maxScrollWidth.current
      );
    }

    return false;
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <=
        maxScrollWidth.current
    ) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [data]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between absolute top-0 left-0 w-full h-full">
        <button
          onClick={movePrev}
          className="bg-yellow-500/70 rounded-full p-1  flex items-center text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed disabled:hidden z-10 transition-all ease-in-out duration-300"
          disabled={isDisabled('prev')}
        >
          <ChevronLeft fontSize="large" />
          <span className="sr-only">Prev</span>
        </button>
        <button
          onClick={moveNext}
          className="bg-yellow-500/70 ml-auto right-absolute rounded-full p-1  flex items-center text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed disabled:hidden z-10 transition-all ease-in-out duration-300"
          disabled={isDisabled('next')}
        >
          <ChevronRight fontSize="large" />
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div
        ref={carousel}
        className="relative flex gap-1 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {data?.map((resource, index) => {
          return (
            <div
              key={resource.images[0]}
              className="group flex shrink-0 flex-col group relative snap-start"
            >
              <div className="block group-hover:hidden">
                <Image
                  src={resource.images[0]}
                  alt=""
                  width="400"
                  height="200"
                  loading="lazy"
                  className="cursor-pointer"
                />
              </div>
              <div className="hidden group-hover:block">
                <Image
                  src={resource.images[1]}
                  alt=""
                  width="400"
                  height="200"
                  loading="lazy"
                  className="cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselPartners;
