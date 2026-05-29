import React from "react";

interface SomeProps {
  title: string;
  description?: string;
}

const UnderServicesThingCheckbox: React.FC<SomeProps> = ({ title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <img src="/checkbox.svg" alt="" className="w-6 h-6 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-medium text-sm sm:text-base">{title}</p>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default UnderServicesThingCheckbox;
