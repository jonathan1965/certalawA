/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect, useCallback } from 'react';

interface IItem {
  imageUrl: string;
  link: string;
  title: string;
  about: string;
  secondLine: string;
  btnText: string;
  lexLogo: string;
}

const data = [
  {
    title: 'INSIGHTS',
    imageUrl: '/assets/images/Volcanos.jpg',
    link: '/insights/1',
    about: 'Rwanda Delayed Potential in',
    secondLine: 'Construction Disputes.',
    btnText: 'Read More',
  },
  {
    title: 'About certa',
    imageUrl: '/assets/images/lady.jpg',
    link: '/about-2',
    about: 'We are the fastest growing',
    secondLine: 'Law firm in Rwanda.',
    btnText: 'Learn More',
    lexLogo: '/assets/images/lex1.png',
  },
  {
    imageUrl: '/assets/images/foundation.png',
    link: 'https://certafoundation.rw/',
    title: 'Certa Foundation',
    about: "Certa Foundation's Impact",
    secondLine:'on the Legal Profession.',
    btnText: 'Learn More',
  },
];


const HomeSlides = ({
  setIndex,
}: {
  setIndex: (n: number) => void;
}) => {
  const { push } = useRouter();
  const lastIndex = data?.length - 1;
  const [hovered, setHovered] = useState(false);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    } else {
      setCurrentIndex(prevState => prevState + lastIndex);
    }
  };

  const moveNext = useCallback(() => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <=
        maxScrollWidth.current
    ) {
      setCurrentIndex(prevState => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      moveNext();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [moveNext, data]);

  useEffect(() => {
    setIndex(2);
  }, [currentIndex]);

  return (
    <div
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      className="flex flex-grow w-full h-full bg-primary p-4 pt-0 md:px-8"
    >
      <div className="flex h-full flex-grow relative overflow-hidden w-full">
        {currentIndex === 1 && (
          <img
            src="/assets/images/lex.png"
            alt=""
            className="h-20 w-40 right-6 bottom-10 absolute z-50"
          />
        )}

        {currentIndex >= 2 ? (
          <div className="pointer-events-none p-4 md:p-8 flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 justify-between bottom-0 w-full z-50 absolute">
            <div className="flex items-start flex-col md:max-w-[40%] ml-auto">
              <img
                src="/assets/images/whiteflogo.png"
                alt="Certa"
                height={12}
                className="h-20"
              />
            </div>
          </div>
        ) : null}

        <div className="right-2 z-10 justify-center absolute flex flex-col items-center space-y-2 h-full">
          {data.map((resource, index) => (
            <div
              role="button"
              tabIndex={index}
              onClick={() => setCurrentIndex(index)}
              key={resource.imageUrl}
              className={`w-1 h-24 z-20 rounded ${
                currentIndex === index
                  ? 'bg-brand-yellow'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div
          ref={carousel}
          className="h-full flex-grow relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={resource.imageUrl}
                role="button"
                tabIndex={index}
                onClick={() => {
                  push(resource.link);
                }}
                className="group flex flex-col justify-center flex-grow h-full text-center w-full relative snap-start"
              >
                <div
                  className={`h-[300px] p-4 md:px-8 flex items-center justify-between w-screen aspect-square bg-origin-padding z-0`}
                >
                  <Image
                    src={resource.imageUrl || ''}
                    alt=""
                    layout="fill"
                    loading="lazy"
                    className="cursor-pointer w-full aspect-square"
                    objectFit="cover"
                    objectPosition="center"
                  />

                  <div className="z-10 flex flex-col items-start my-auto">
                    <h5 className="uppercase text-xl md:text-2xl landingTexts text-brand-yellow">
                      {resource.title}
                    </h5>
                    <div className="mt-3 flex flex-col items-start text-2xl md:text-6xl text-white landingTexts">
                      <h2 className="mt-1 landingTexts md:text-5xl">
                        {resource.about}
                      </h2>
                      <h2 className="mt-1 landingTexts md:text-5xl">
                        {resource.secondLine}
                      </h2>
                      <button
                        type="button"
                        onClick={() => {
                          push(resource.link);
                        }}
                        className="mt-2 md:text-xl font-medium group-hover:font-bold group-hover:text-sm text-brand-gray"
                      >
                        {resource.btnText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSlides;
