import logo from "../../assets/svg/applogo.svg";
import dropdown from "../../assets/svg/dropdown.svg";
import cart from "../../assets/svg/cart.svg";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);

  const handleOption = () => setIsOpen(!isopen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();

  const handleRiders = () => {
    navigate("/riders");
  };
  const handleVendores = () => {
    navigate("/vendores");
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 sm:px-10 sm:py-5 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="App Logo" className="h-8 sm:h-10" />
        </div>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-6">
          {["Company", "FAQs", "Blog", "Contact"].map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-black text-[16px] font-medium hover:text-green-bg transition"
            >
              {label}
            </a>
          ))}
        </nav> */}

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/caompany"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            Company
          </a>
          <a
            href="/faqs"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            FAQs
          </a>
          <a
            href="/blog"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <button
              onClick={handleOption}
              className="text-black text-[16px] sm:pl-0 pl-[5px] flex font-semibold"
            >
              Customers
              <img src={dropdown} alt="dropdown" className="pl-[5px]" />
            </button>
            {isopen && (
              <div className="mt-5  absolute top-18   flex flex-col gap-3">
                <button
                  onClick={handleVendores}
                  className="bg-white rounded-r-4xl rounded-l-4xl shadow-md px-6  py-4"
                >
                  Vendores
                </button>
                <button
                  onClick={handleRiders}
                  className="bg-white rounded-r-4xl rounded-l-4xl shadow-md px-2  py-3"
                >
                  Riders
                </button>
              </div>
            )}
          </div>
          <img src={cart} alt="cart" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <SlOptionsVertical />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 bg-white border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-3 md:hidden">
          {["Company", "FAQs", "Blog", "Contact"].map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-black text-sm font-medium hover:text-green-bg"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
