import React from 'react';

const TopBar = () => {
    return (
        <nav className="bg-gray-800 fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <span className="text-white text-lg font-bold">Pokemon</span>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
