
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-b-[#e5e7eb] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-6 md:px-10 py-3 shadow-sm transition-colors duration-200">
      <div className="flex items-center gap-4">
        <div className="size-8 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl">school</span>
        </div>
        <h1 className="text-[#111518] dark:text-white text-xl font-bold leading-tight tracking-tight">StudyBuddy</h1>
      </div>
      
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-9">
          <a className="text-primary text-sm font-bold leading-normal" href="#">Find Partners</a>
          <a className="text-[#111518] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">My Matches</a>
          <a className="text-[#111518] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Messages</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center rounded-lg size-10 bg-[#f0f3f4] dark:bg-gray-700 text-[#111518] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white dark:border-gray-800 shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUcuYcwssssf1-ZwrySNvRwlu1biFfLj8LKZKXGlVqmOllqU7zupDGaBdW1osV_n4_Ww5BtQnphj3n4sHhk-aJeGqAqBiJ7Jwp18AI1vGU6AbmhKv_qDbPMRaKLTVubQHXvjfXurTTxA4WfFjM4fidTMqt4K72kqAetMOws_lL-dZpUe1G9SeMLLrelEmkCTFfCSZHo-CNf4ndUptiTV2wGh6kJfULjwbUdbisflFwxMh0aXRMVJedR1gJag_je4sPo1_x-Xz7BLrS")' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
