import React, {useState} from "react";
interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = 400,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div>
      <p>{isExpanded ? text : `${text?.slice(0, maxLength)}...`}</p>
      {text?.length > maxLength && (
        <a style={linkStyle} onClick={handleToggle}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </a>
      )}
    </div>
  );
};

 const linkStyle = {
   textDecoration: 'underline',
   color: '#771114',
   borderRadius: '4px',
   display: 'inline-block',
 };

export default ExpandableText;