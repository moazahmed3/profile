Profile Page — Next.js + TypeScript + Tailwind + Shadcn UI
📌 Overview

This is a Profile Page UI built with modern frontend technologies like Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
It provides a clean, responsive, and theme-adaptive (dark/light mode) user interface with reusable components such as Header, Profile Info Cards, and Footer.

🚀 Tech Stack
Technology	Description
Next.js (App Router)	React framework for optimized and server-side rendered applications
TypeScript	Adds type safety and improved developer experience
Tailwind CSS	Utility-first CSS framework for fast styling
shadcn/ui	Prebuilt and customizable components built on top of Radix UI
Lucide React	Icon library for modern React projects
🧱 Project Structure
📦 project-root
 ┣ 📂 app/
 ┃ ┣ 📜 page.tsx                # Main Profile Page
 ┃ ┣ 📂 img/                    # Profile & logo images
 ┃ ┗ 📂 components/
 ┃    ┣ 📂 Header/
 ┃    ┃ ┗ 📜 HeaderComponent.tsx     # Navbar with search, dark mode toggle, and user dropdown
 ┃    ┣ 📂 CardComponent/
 ┃    ┃ ┣ 📜 HeaderCard.tsx          # User avatar, name, role, and social links
 ┃    ┃ ┣ 📜 PersonalInformationCard.tsx  # Personal info fields with edit button
 ┃    ┃ ┗ 📜 FooterCard.tsx          # Footer or additional details section
 ┃    ┗ 📂 ui/                       # shadcn/ui components (Card, Button, Avatar, etc.)
 ┣ 📜 tailwind.config.ts             # Tailwind configuration
 ┣ 📜 tsconfig.json                  # TypeScript configuration
 ┣ 📜 package.json                   # Dependencies
 ┗ 📜 README.md                      # Project documentation

💡 Features

✅ Dark / Light Mode Toggle

Uses localStorage to persist theme preference

Toggles theme by adding/removing the dark class on document.documentElement

✅ Responsive Header

Includes search input, notification bell, user dropdown, and logo

Collapses into a mobile-friendly layout with a dropdown menu

✅ Profile Cards

HeaderCard: Displays profile avatar, name, role, and social links

PersonalInformationCard: Shows personal details (name, email, phone, etc.) with edit option

FooterCard: Contains any additional information or links (customizable)

✅ Clean Design with Shadcn UI

Reuses consistent UI patterns using Card, Button, Avatar, and DropdownMenu components

⚙️ Installation & Setup
# Clone the repo
git clone https://github.com/your-username/profile-page.git

# Navigate to the project directory
cd profile-page

# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
http://localhost:3000
