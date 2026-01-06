
import React from 'react';
import { Filters } from '../types';

interface SidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
  const toggleArrayFilter = (key: 'availability' | 'studyStyle', value: string) => {
    const current = [...filters[key]];
    const index = current.indexOf(value);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(value);
    }
    onFilterChange({ ...filters, [key]: current });
  };

  const setLocation = (value: string) => {
    onFilterChange({ ...filters, location: value });
  };

  return (
    <aside className="hidden lg:flex w-72 flex-col gap-8 shrink-0">
      <div className="flex items-center gap-2 pb-2 border-b border-[#e5e7eb] dark:border-gray-800">
        <span className="material-symbols-outlined text-primary">filter_list</span>
        <h3 className="text-lg font-bold">Filters</h3>
      </div>

      {/* Availability Filter */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-bold text-[#617989] dark:text-gray-400 uppercase tracking-wider">Availability</h4>
        <div className="flex flex-col gap-3">
          {['Weekdays', 'Weekends', 'Evenings'].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox"
                checked={filters.availability.includes(option)}
                onChange={() => toggleArrayFilter('availability', option)}
                className="size-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
              />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Study Style Filter */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-bold text-[#617989] dark:text-gray-400 uppercase tracking-wider">Study Style</h4>
        <div className="flex flex-col gap-3">
          {['Quiet Focus', 'Collaborative', 'Pomodoro'].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox"
                checked={filters.studyStyle.includes(option)}
                onChange={() => toggleArrayFilter('studyStyle', option)}
                className="size-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
              />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-bold text-[#617989] dark:text-gray-400 uppercase tracking-wider">Location</h4>
        <div className="flex flex-col gap-3">
          {[
            { label: 'Any', value: 'Any' },
            { label: 'Remote (Zoom/Discord)', value: 'Remote' },
            { label: 'In-Person (Campus)', value: 'In-Person' }
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio"
                name="location"
                checked={filters.location === option.value}
                onChange={() => setLocation(option.value)}
                className="size-5 border-gray-300 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
              />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
