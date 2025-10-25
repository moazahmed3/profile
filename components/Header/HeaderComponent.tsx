"use client";
import React, { useState } from "react";
import {
  Search,
  Moon,
  Bell,
  Ellipsis,
  X,
  ChevronDown,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Sun,
  TextAlignStart,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import img1 from "../../app/img/owner.png";
import imgHeader from "../../app/img/logo.svg";
import imgHeaderDark from "../../app/img/logo-dark.svg";

export default function HeaderComponent() {
  const [mobile, setMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode from localStorage on mount
  React.useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* left navbar */}
        <div className="flex items-center gap-6">
          <button
            className="flex items-center justify-center  cursor-pointer text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 rounded-lg h-11 w-14 xl:border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Sidebar"
          >
            <TextAlignStart size={25}  />{" "}
          </button>

          <div className="relative w-full max-w-md hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <Input
              placeholder="Search or type command..."
              className="pl-10 pr-20 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 h-11"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs bg-white dark:bg-gray-700 dark:text-gray-300 border dark:border-gray-600 rounded">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* header navbar */}
        <div className="lg:hidden">

        {darkMode  ? <img src={imgHeaderDark.src} alt="" /> : <img src={imgHeader.src} alt="" />}

        </div>

        {/* Desktop Right Side */}
        <div className="lg:flex hidden items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="rounded-4xl hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center h-11 w-11 cursor-pointer text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="rounded-4xl relative hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center h-11 w-11 cursor-pointer text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          </button>

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={img1.src} />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm dark:text-gray-200">
                  Musharof
                </span>
                <ChevronDown
                  size={16}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 p-2 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="px-3 py-3 mb-2">
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                  Musharof Chowdhury
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  randomuser@pimjo.com
                </p>
              </div>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem className="cursor-pointer py-2.5 dark:hover:bg-gray-700 dark:text-gray-200">
                <User
                  size={18}
                  className="mr-3 text-gray-600 dark:text-gray-400"
                />
                <span className="text-sm font-medium">Edit profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-2.5 dark:hover:bg-gray-700 dark:text-gray-200">
                <Settings
                  size={18}
                  className="mr-3 text-gray-600 dark:text-gray-400"
                />
                <span className="text-sm font-medium">Account settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-2.5 dark:hover:bg-gray-700 dark:text-gray-200">
                <HelpCircle
                  size={18}
                  className="mr-3 text-gray-600 dark:text-gray-400"
                />
                <span className="text-sm font-medium">Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem className="cursor-pointer py-2.5 text-red-600 focus:text-red-600 dark:hover:bg-gray-700">
                <LogOut size={18} className="mr-3" />
                <span className="text-sm font-medium">Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Ellipsis Button */}
        <div className="lg:hidden hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer duration-300 rounded-lg p-2">
          {mobile ? (
            <X
              onClick={() => setMobile(false)}
              className="text-gray-900 dark:text-gray-200"
              strokeWidth={1.5}
              size={24}
            />
          ) : (
            <Ellipsis
              onClick={() => setMobile(true)}
              className="text-gray-900 dark:text-gray-200"
              strokeWidth={1.5}
              size={24}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {mobile && (
          <div className="flex lg:hidden absolute bg-white dark:bg-gray-900 justify-between -bottom-16 p-3 z-50 shadow-lg border-b dark:border-gray-800 left-0 right-0 items-center gap-4">
            <div className="btns flex gap-3">
              <button
                onClick={toggleDarkMode}
                className="rounded-4xl hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center h-12 w-12 cursor-pointer text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="rounded-4xl relative hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center h-12 w-12 cursor-pointer text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              </button>
            </div>

            {/* Mobile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-2 py-1.5 rounded-lg transition-colors">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={img1.src} />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm dark:text-gray-200">
                    Musharof
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-gray-500 dark:text-gray-400"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 p-2 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="px-3 py-3 mb-2">
                  <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    Musharof Chowdhury
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    randomuser@pimjo.com
                  </p>
                </div>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem className="cursor-pointer py-2.5 dark:hover:bg-gray-700 dark:text-gray-200">
                  <User
                    size={18}
                    className="mr-3 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-sm font-medium">Edit profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-2.5 dark:hover:bg-gray-700 dark:text-gray-200">
                  <Settings
                    size={18}
                    className="mr-3 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-sm font-medium">Account settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-2.5 dark:hover:bg-gray-700 dark:text-gray-200">
                  <HelpCircle
                    size={18}
                    className="mr-3 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-sm font-medium">Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem className="cursor-pointer py-2.5 text-red-600 focus:text-red-600 dark:hover:bg-gray-700">
                  <LogOut size={18} className="mr-3" />
                  <span className="text-sm font-medium">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </nav>
    </header>
  );
}
