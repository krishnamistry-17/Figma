import logo from "../../assets/svg/applogo.svg";
import dropdown from "../../assets/svg/dropdown.svg";
import cart from "../../assets/svg/cart.svg";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);

  const handleOption = () => setIsOpen(!isopen);
  const handleNewOption = () => setIsNewOpen(!isNewOpen);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedMenu, setSelectedMenu] = useState("Customers");
  const [newSelect, setNewSelect] = useState("Products");

  const handleHome = () => {
    navigate("/");
  };

  const handleFaqClick = () => {
    if (location.pathname.startsWith("/riders")) {
      navigate("/riders#faqs");
    } else if (location.pathname.startsWith("/vendores")) {
      navigate("/vendores#faqs");
    } else if (location.pathname.startsWith("/company")) {
      navigate("/company#faqs");
    } else if (location.pathname.startsWith("/blog")) {
      navigate("/blog#faqs");
    } else if (location.pathname.startsWith("/contact")) {
      navigate("/contact#faqs");
    } else if (location.pathname.startsWith("/chowpass")) {
      navigate("/chowpass#faqs");
    } else if (location.pathname.startsWith("/relay")) {
      navigate("/relay#faqs");
    } else {
      navigate("/#faqs");
    }
  };

  const handleVendores = () => {
    setSelectedMenu("Vendores");
    navigate("/vendores");
    setIsOpen(false);
  };

  const handleRiders = () => {
    setSelectedMenu("Riders");
    navigate("/riders");
    setIsOpen(false);
  };

  const handleCustomres = () => {
    setSelectedMenu("Customers");
    navigate("/");
    setIsOpen(false);
  };

  const handleChowPass = () => {
    setNewSelect("ChowPass");
    navigate("/chowpass");
    setIsNewOpen(false);
  };

  const handleRelay = () => {
    setNewSelect("Relay");
    navigate("/relay");
    setIsNewOpen(false);
  };

  const handleProducts = () => {
    setNewSelect("Products");
    navigate("/");
    setIsNewOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 sm:px-10 sm:py-5  sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="App Logo"
            className="h-8 sm:h-10"
            onClick={handleHome}
          />
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
          <div className=" relative flex items-center">
            <button
              onClick={handleNewOption}
              className="text-black text-[16px] sm:pl-0 pl-[5px] flex font-semibold"
            >
              {newSelect}
              <img src={dropdown} alt="dropdown" className="pl-[5px]" />
            </button>
            {isNewOpen && (
              <div className="absolute top-12 right-0 bg-white rounded-lg shadow-md mt-1.5 flex flex-col z-50">
                {newSelect !== "ChowPass" && (
                  <button
                    onClick={handleChowPass}
                    className="px-6 py-4 hover:bg-gray-100 text-left"
                  >
                    ChowPass
                  </button>
                )}
                {newSelect !== "Relay" && (
                  <button
                    onClick={handleRelay}
                    className="px-6 py-4 hover:bg-gray-100 text-left"
                  >
                    Relay
                  </button>
                )}
                {newSelect !== "Products" && (
                  <button
                    onClick={handleProducts}
                    className="px-6 py-4 hover:bg-gray-100 text-left"
                  >
                    Products
                  </button>
                )}
              </div>
            )}
          </div>
          <Link
            to="/company"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            Company
          </Link>
          <a
            className="text-black text-[16px] font-medium hover:text-green-bg transition cursor-pointer"
            onClick={handleFaqClick}
          >
            FAQs
          </a>
          <Link
            to="/blog"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-black text-[16px] font-medium hover:text-green-bg transition"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="relative flex items-center">
          <button
            onClick={handleOption}
            className="text-black text-[16px] sm:pl-0 pl-[5px] flex font-semibold"
          >
            {selectedMenu}
            <img src={dropdown} alt="dropdown" className="pl-[5px]" />
          </button>

          {isopen && (
            <div className="absolute top-12 right-0 bg-white rounded-lg shadow-md mt-2 flex flex-col z-50">
              {selectedMenu !== "Vendores" && (
                <button
                  onClick={handleVendores}
                  className="px-6 py-4 hover:bg-gray-100 text-left"
                >
                  Vendores
                </button>
              )}
              {selectedMenu !== "Riders" && (
                <button
                  onClick={handleRiders}
                  className="px-6 py-4 hover:bg-gray-100 text-left"
                >
                  Riders
                </button>
              )}
              {selectedMenu !== "Customers" && (
                <button
                  onClick={handleCustomres}
                  className="px-6 py-4 hover:bg-gray-100 text-left"
                >
                  Customers
                </button>
              )}
            </div>
          )}
        </div>

        {/* <div className="md:hidden relative flex items-center">
          <button
            onClick={handleNewOption}
            className="text-black text-[16px] sm:pl-0 pl-[5px] flex font-semibold"
          >
            {newSelect}
            <img src={dropdown} alt="dropdown" className="pl-[5px]" />
          </button>
          {isNewOpen && (
            <div className="absolute top-12 right-0 bg-white rounded-lg shadow-md mt-1.5 flex flex-col z-50">
              {newSelect !== "ChowPass" && (
                <button
                  onClick={handleChowPass}
                  className="px-6 py-4 hover:bg-gray-100 text-left"
                >
                  ChowPass
                </button>
              )}
              {newSelect !== "Relay" && (
                <button
                  onClick={handleRelay}
                  className="px-6 py-4 hover:bg-gray-100 text-left"
                >
                  Relay
                </button>
              )}
              {newSelect !== "Products" && (
                <button
                  onClick={handleProducts}
                  className="px-6 py-4 hover:bg-gray-100 text-left"
                >
                  Products
                </button>
              )}
            </div>
          )}
        </div> */}

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
        <div
          className="mt-4 bg-white border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-3 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav>
            <Link
              to="/company"
              className="text-black text-sm font-medium hover:text-green-bg block p-2"
            >
              Company
            </Link>
            <a
              className="text-black text-sm font-medium hover:text-green-bg block p-2"
              onClick={handleFaqClick}
            >
              FAQs
            </a>
            <Link
              to="/blog/"
              className="text-black text-sm font-medium hover:text-green-bg block p-2"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-black text-sm font-medium hover:text-green-bg block p-2"
            >
              Contact
            </Link>
            <Link
              to="/chowpass"
              className="text-black text-sm font-medium hover:text-green-bg block p-2"
            >
              ChowPass
            </Link>
            <Link
              to="/relay"
              className="text-black text-sm font-medium hover:text-green-bg block p-2"
            >
              Relay
            </Link>
          </nav>
          {/* {["Company", "Blog", "Contact", "ChowPass", "Relay"].map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)} // closes menu
              className="text-black text-sm font-medium hover:text-green-bg"
            >
              {label}
            </a>
          ))} */}
        </div>
      )}
    </header>
  );
};

export default Header;
