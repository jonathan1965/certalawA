import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface PracticeAreaCardProps {
  title: string;
  Icon: string;
  InActiveIcon: string
}

const PracticeAreaCard = ({ title, Icon }: PracticeAreaCardProps) => {
  return (
    <div className="w-[280px] h-[200px] bg-white rounded-lg border border-gray-100 flex flex-col items-center justify-center p-6 cursor-pointer group hover:bg-primary hover:border-primary transition-all duration-300">
        <Image src={Icon} width={100} height={100} className="w-10 invert group-hover:invert-0 object-cover h-10 text-burgundy group-hover:text-white transition-colors" />
      <h3 className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors text-center max-w-[200px]">
        {title}
      </h3>
    </div>
  );
};

export default PracticeAreaCard;
