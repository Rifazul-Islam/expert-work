const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Expert Work
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              About
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <button className="inline-flex items-center justify-center p-2 rounded-md hover:opacity-80 transition-opacity">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
