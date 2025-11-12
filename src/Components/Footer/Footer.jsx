import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Book Haven</h3>
          <p className="text-sm">
            Discover, add, and manage your favorite books in our digital
            library.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/books" className="hover:text-indigo-400">
                All Books
              </a>
            </li>
            <li>
              <a href="/add-book" className="hover:text-indigo-400">
                Add Book
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-indigo-400">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-indigo-400">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Connect with Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400">
              🌐
            </a>
            <a href="#" className="hover:text-indigo-400">
              📧
            </a>
            <a href="#" className="hover:text-indigo-400">
              🐙
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
       © 2025 Book Haven | Developed by Minhajur Rahman | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
