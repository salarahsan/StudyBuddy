
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PartnerCard from './components/PartnerCard';
import { Partner, Filters } from './types';
import { MOCK_PARTNERS, INITIAL_FILTERS, SUBJECTS } from './constants';

const App: React.FC = () => {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [searchInput, setSearchInput] = useState('');

  const filteredPartners = useMemo(() => {
    return MOCK_PARTNERS.filter(partner => {
      // Search Text (name or subject or bio)
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch = !query || 
        partner.name.toLowerCase().includes(query) || 
        partner.subject.toLowerCase().includes(query) ||
        partner.bio.toLowerCase().includes(query);

      // Subject Chip
      const matchesSubjectChip = filters.selectedSubject === 'All Subjects' || 
        partner.subject === filters.selectedSubject;

      // Availability (Match any selected)
      const matchesAvailability = filters.availability.length === 0 || 
        partner.availability.some(a => filters.availability.includes(a));

      // Study Style (Match any selected)
      const matchesStudyStyle = filters.studyStyle.length === 0 || 
        partner.studyStyle.some(s => filters.studyStyle.includes(s));

      // Location
      const matchesLocation = filters.location === 'Any' || 
        partner.location === filters.location;

      return matchesSearch && matchesSubjectChip && matchesAvailability && matchesStudyStyle && matchesLocation;
    });
  }, [filters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({ ...prev, searchQuery: searchInput }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1440px] mx-auto p-6 md:p-10 gap-10">
        <Sidebar filters={filters} onFilterChange={setFilters} />
        
        <main className="flex flex-1 flex-col gap-8 min-w-0">
          {/* Header & Search Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#111518] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Find your perfect study buddy
              </h2>
              <p className="text-[#617989] dark:text-gray-400 text-base font-normal">
                Connect with students who match your schedule, subjects, and learning style.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="flex w-full items-stretch rounded-xl h-14 bg-white dark:bg-[#1a2632] shadow-sm border border-[#e5e7eb] dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                <div className="flex items-center justify-center pl-4 pr-2 text-[#617989]">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 text-[#111518] dark:text-white placeholder:text-[#617989] h-full text-base"
                  placeholder="What subject are you studying today? (e.g., Calculus, History, Biology)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-blue-600 text-white font-bold px-6 m-1 rounded-lg transition-colors active:scale-95"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Filter Chips */}
            <div className="flex gap-3 flex-wrap items-center">
              <span className="text-sm font-bold text-[#617989] dark:text-gray-400 mr-2">Popular:</span>
              {SUBJECTS.map(subject => (
                <button
                  key={subject}
                  onClick={() => setFilters(prev => ({ ...prev, selectedSubject: subject }))}
                  className={`flex h-9 items-center justify-center gap-x-2 rounded-lg px-4 transition-all ${
                    filters.selectedSubject === subject 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white dark:bg-[#1a2632] border border-[#e5e7eb] dark:border-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  <span className="text-sm font-medium">{subject}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Results Grid */}
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-[#617989] dark:text-gray-400">
              <span className="material-symbols-outlined text-6xl">person_search</span>
              <p className="text-xl font-medium">No partners found matching your criteria.</p>
              <button 
                onClick={() => {
                  setFilters(INITIAL_FILTERS);
                  setSearchInput('');
                }}
                className="text-primary hover:underline font-bold"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredPartners.length > 0 && (
            <div className="flex justify-center mt-6">
              <button className="text-[#617989] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group">
                Show more partners
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
