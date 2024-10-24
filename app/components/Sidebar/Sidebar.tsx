import React, { useEffect } from 'react';
import Link from 'next/link';

interface SidebarProps {
  toggleSidebar: () => void;
  isOpen: boolean; // Agregar prop para saber si el sidebar está abierto
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Evitar desplazamiento
    } else {
      document.body.style.overflow = 'auto'; // Permitir desplazamiento
    }

    // Limpiar efecto al desmontar
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="space-y-6">
          <li>
            <Link href="/dashboard" onClick={toggleSidebar}>
              <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Data Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link href="/stem-with-us" onClick={toggleSidebar}>
              <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Stem With Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/sponsors" onClick={toggleSidebar}>
              <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Become a Sponsor
              </span>
            </Link>
          </li>
          <li>
            <Link href="/social-media" onClick={toggleSidebar}>
              <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Social Media
              </span>
            </Link>
          </li>
          <li>
            <Link href="/marketplace" onClick={toggleSidebar}>
              <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                Marketplace
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
