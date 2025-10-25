import React from "react";
import {
  Search,
  Moon,
  Bell,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Edit,
  TextAlignStart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import img2 from "./img/owner.webp";
import HeaderComponent from "@/components/Header/HeaderComponent";
import HeaderCard from "@/components/CardComponent/HeaderCard";
import PersonalInformationCard from "@/components/CardComponent/PersonalInformationCard";
import FooterCard from "@/components/CardComponent/FooterCard";
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderComponent />

      {/* Main Content */}
      <main className="pt-9 pb-10 bg-gray-100 lg:px-10 dark:bg-gray-900">
        <div className="container mx-auto border border-gray-200 rounded-2xl dark:border-gray-800 bg-white dark:bg-[#171F2E] p-6">
          <h3 className="mb-5  text-[20px] font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
            Profile
          </h3>

          {/* Profile Header Card */}
          <HeaderCard />

          {/*  */}

          {/* Personal Information Card */}
          <PersonalInformationCard />
          {/* Address Card */}
        <FooterCard/>
        </div>
      </main>
    </div>
  );
}
