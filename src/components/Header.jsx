// Header.jsx
import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", (to) => setActiveSection(to));
    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const navItems = [
    { to: "Home-section", label: "Home", offset: -250 },
    { to: "About-section", label: "About", offset: -150 },
    { to: "Education-section", label: "Education", offset: -150 }, // ✅ New
    { to: "Project-section", label: "Projects", offset: -150 },
    { to: "Contact-section", label: "Contact", offset: 50 },
  ];

  const renderLinks = (isMobile = false) =>
    navItems.map(({ to, label, offset }) => (
      <Link
        key={to}
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        <p
          onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
          className={`${
            activeSection === to
              ? "active"
              : isMobile
              ? "text-black hover:text-gray-900"
              : "text-white hover:text-gray-900"
          }`}
        >
          {label}
        </p>
      </Link>
    ));

  const resumeButton = (
    <button
      onClick={() => window.open()}
      className="button-UI w-[120px] rounded-lg px-4 py-1.5 font-bold tracking-wider text-gray-900 shadow-xl hover:text-white"
    >
      Resume
    </button>
  );

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between text-base transition-all sm:px-4 lg:px-28 lg:pt-2 ${
        isScrolling ? "sticky" : ""
      }`}
    >
      <div className="cursor-none">
        <img
          src="https://i.postimg.cc/k5X5GkPd/49b8e3e3-7be9-4e57-9950-a8ff5aed1a0e-removebg-preview.png"
          alt="logo"
          className="h-[80px] w-[90px] bg-cover bg-no-repeat"
        />
      </div>
      <nav className="hidden lg:block">
        <div className="cursor-pointer items-center space-x-4 sm:flex sm:flex-col sm:gap-4 lg:flex lg:flex-row lg:gap-6">
          {renderLinks()}
          <div>{resumeButton}</div>
        </div>
      </nav>
      <div className="block lg:hidden">
        <button
          className="mr-5 block hover:text-gray-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <CgMenuRight size={32} />
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="absolute left-0 top-full block w-full lg:hidden">
          <div className="navbar-bg flex flex-col items-center space-y-4 py-4">
            {renderLinks(true)}
            <div>{resumeButton}</div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
