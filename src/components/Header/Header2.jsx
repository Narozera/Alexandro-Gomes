import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import styles from "../../styles";
import "./Header.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isPageScrolled = scrollPosition > 80;
      setIsScrolled(isPageScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`z-50 fixed w-full top-0 left-0 py-[2rem] pr-[1rem] ${
          isOpen || isScrolled
            ? "bg-primary transition-all"
            : "bg-transparent transition-all"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex h-[40px] items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" aria-label="Logo">
                  {isOpen || isScrolled ? (
                    <img
                      className="w-[200px] sm:w-auto"
                      src="/logo-footer.svg"
                      alt="Logo"
                    />
                  ) : (
                    <img
                      className="w-[200px] sm:w-auto"
                      src="/logo-header2.svg"
                      alt="Logo"
                    />
                  )}
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="mx-10 flex items-center w-full">
                  <ul className="font-geom uppercase flex gap-[2.5rem] mb-4 mt-2 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li as="li">
                      <a
                        href="/"
                        className={isOpen || isScrolled ? `${styles.navbarLink} link pb-2 text-[1rem] hover:text-[#FFF082] ease-linear transform delay-50` : `${styles.navbarLink} link pb-2 text-[1rem] hover:text-terciary ease-linear transform delay-50`}
                      >
                        home
                      </a>
                    </li>
                    <li as="li" className={styles.navbarLink}>
                      <a
                        href="/#sobre-nós"
                        className={isOpen || isScrolled ? `${styles.navbarLink} link pb-2 text-[1rem] hover:text-[#FFF082] ease-linear transform delay-50` : `${styles.navbarLink} link pb-2 text-[1rem] hover:text-terciary ease-linear transform delay-50`}
                      >
                        Sobre
                      </a>
                    </li>

                    <li as="li" className={styles.navbarLink}>
                      <a
                        href="/#contato"
                        className={isOpen || isScrolled ? `${styles.navbarLink} link pb-2 text-[1rem] hover:text-[#FFF082] ease-linear transform delay-50` : `${styles.navbarLink} link pb-2 text-[1rem] hover:text-terciary ease-linear transform delay-50`}
                      >
                        contato
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={isScrolled ? "#fff" : "#fff"}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="z-[999]"
        >
          {(ref) => (
            <div className="lg:hidden z-[999] bg-tertiary" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="ml-2 flex flex-col items-baseline space-x-4">
                  <div className="font-geom uppercase flex gap-[2.5rem] mb-4 mt-2 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li as="li" className={`${styles.navbarLink}`}>
                      <a
                        href="/"
                        className={`${styles.navbarLink} link link-underline pb-2 text-[1rem]`}
                      >
                        home
                      </a>
                    </li>
                    <li as="li" className={styles.navbarLink}>
                      <a
                        href="/#sobre-nós"
                        className={`${styles.navbarLink} link link-underline pb-2 text-[1rem]`}
                      >
                        Sobre
                      </a>
                    </li>
                    <li as="li" className={styles.navbarLink}>
                      <a
                        href="/#contato"
                        className={`${styles.navbarLink} link link-underline pb-2 text-[1rem]`}
                      >
                        contato
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
