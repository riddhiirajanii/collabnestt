"use client";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRoute, setActiveRoute] = useState("/My_Projects");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { href: "/My_Projects", label: "My Projects" },
    { href: "/discover", label: "Discover" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/profile", label: "Profile" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <nav className='flex items-center justify-between w-full p-4 border-b border-purple-500 bg-white dark:bg-gray-900 dark:border-purple-700'>
        {/* Logo Section */}
        <div className='flex items-center space-x-2'>
          <img
            src='/untitled.png'
            alt='CollabNest'
            className='w-8 h-8 rounded-sm'
          />
          <span className='text-lg font-bold text-gray-800 dark:text-white'>
            CollabNest
          </span>
        </div>

        {/* Navigation Links */}
        <div className='flex items-center space-x-6'>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveRoute(href)}
              className={`
                text-sm font-medium transition-colors 
                ${
                  activeRoute === href
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-gray-500 dark:text-gray-300 hover:text-purple-400"
                }
              `}>
              {label}
            </a>
          ))}
        </div>

        {/* Right Section: Search, Theme Toggle, and Profile */}
        <div className='flex items-center space-x-4'>
          {/* Search Input */}
          <Input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-52 dark:bg-gray-800 dark:text-white dark:border-gray-700'
          />

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
            {isDarkMode ? (
              <Sun className='text-yellow-500' size={24} />
            ) : (
              <Moon className='text-purple-600' size={24} />
            )}
          </button>

          {/* User Avatar */}
          <Avatar>
            <AvatarImage
              src='/profile.jpg'
              alt='User profile'
              className='object-cover'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };

