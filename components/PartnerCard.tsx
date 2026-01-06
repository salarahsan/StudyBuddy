
import React from 'react';
import { Partner } from '../types';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const matchColorClass = partner.matchPercentage >= 90 
    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
    : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400";

  return (
    <div className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-5 shadow-sm border border-[#e5e7eb] dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 shrink-0 shadow-inner"
          style={{ backgroundImage: `url("${partner.imageUrl}")` }}
        />
        <div className="flex flex-col min-w-0">
          <h3 className="text-[#111518] dark:text-white text-lg font-bold truncate">{partner.name}</h3>
          <p className="text-primary text-sm font-medium truncate">{partner.major}</p>
        </div>
        <div className={`ml-auto flex shrink-0 items-center gap-1 rounded-full px-2 py-1 ${matchColorClass}`}>
          <span className="material-symbols-outlined text-sm">bolt</span>
          <span className="text-xs font-bold">{partner.matchPercentage}% Match</span>
        </div>
      </div>
      
      <p className="text-[#617989] dark:text-gray-300 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
        {partner.bio}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {partner.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 rounded-md bg-[#f0f3f4] dark:bg-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>
      
      <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 px-4 py-2.5 text-white font-bold text-sm transition-colors active:scale-95">
        <span className="material-symbols-outlined text-[18px]">person_add</span>
        Connect
      </button>
    </div>
  );
};

export default PartnerCard;
