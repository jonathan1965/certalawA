import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const InsightItem = () => {
  const { push } = useRouter();
  return (
    <div className="group relative flex flex-col min-h-[70px]">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src="/assets/images/building.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="top-0 absolute z-0"
          />
        </div>
        {/* Content Container */}
        <div className="p-5">
          <h5 className=" font-semibold text-gray-900 mb-2">
            ADJUDICATION: RWANDA’S DELAYED POTENTIAL IN CONSTRUCTION
            DISPUTES
          </h5>
          <p className="text-gray-500 text-sm mb-4">
            Disputes in contracts are an inevitability that cannot be
            avoided. The construction industry is no exception to the
            susceptibility to disputes, and its very distinctive
            nature.
          </p>
          <button
            type="button"
            onClick={() => {
              push('/insights/1');
            }}
            className="mt-4 text-sm font-semibold text-primary"
          >
            Read more.
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightItem;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// export const InsightItem = () => {
//   const navigate = useNavigate();
//   return (

//   );
// };