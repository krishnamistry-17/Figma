export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignin, setIsSignIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSignIn = () => {
    router.push("/signin");
  };
  const handleSignUp = () => {
    router.push("/signup");
  };
  return (
    <nav
      className="w-full  bg-gray-400 shadow-sm text-black
    px-4 py-3 flex justify-between items-center relative"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={38}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>

        {isSignin ? (
          <div>
            <Link
              href="/user-profile"
              className="px-4 py-1 mr-[8px] rounded border border-black"
            >
              User Profile
            </Link>
            <button className="px-4 py-1 rounded border border-black">
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleSignIn}
              className="px-4 py-1 mr-[8px] rounded border border-black"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="px-4 py-1 rounded border border-black"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Mobile Auth Buttons (outside toggle) */}
      <div className="md:hidden flex items-center gap-2">
        {isSignin ? (
          <div>
            {" "}
            <Link
              href="/user-profile"
              className="text-sm px-3 py-1 rounded border border-black"
            >
              Profile
            </Link>
            <button className="text-sm px-3 py-1 rounded border border-black">
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            {" "}
            <button
              onClick={handleSignIn}
              className="text-sm px-3 py-1 rounded border border-black"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="text-sm px-3 py-1 rounded border border-black"
            >
              Sign Up
            </button>
          </div>
        )}

        <button onClick={toggleMenu} aria-label="Menu">
          <SlOptionsVertical size={22} />
        </button>
      </div>

      {/* Mobile Dropdown Menu (page links only) */}
      {isMenuOpen && (
        <div
          className="absolute top-[60px] right-4 w-56
         bg-white border border-gray-200 
         rounded-md shadow-md p-4 z-50 md:hidden"
        >
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
}
