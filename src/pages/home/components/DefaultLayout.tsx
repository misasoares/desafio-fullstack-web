import { useState, useRef, useEffect } from "react";

interface PropsDefaultLayout {
  children: React.ReactNode;
  handleChangeMenu: (menu: string) => void;
}

export default function DefaultLayout({
  children,
  handleChangeMenu,
}: PropsDefaultLayout) {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<string | number>("0px");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    handleChangeMenu(menu);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(
        isMobileMenuOpen ? `${menuRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <p
                    onClick={() => handleMenuClick("dashboard")}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                      selectedMenu === "dashboard"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Dashboard
                  </p>
                  <p
                    onClick={() => handleMenuClick("team")}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                      selectedMenu === "team"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Team
                  </p>
                  <p
                    onClick={() => handleMenuClick("projects")}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                      selectedMenu === "projects"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Projects
                  </p>
                  <p
                    onClick={() => handleMenuClick("calendar")}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                      selectedMenu === "calendar"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Calendar
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden transition-height duration-300 ease-in-out overflow-hidden`}
          id="mobile-menu"
          style={{ height: menuHeight }}
          ref={menuRef}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <p
              onClick={() => handleMenuClick("dashboard")}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium ${
                selectedMenu === "dashboard"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              aria-current={selectedMenu === "dashboard" ? "page" : undefined}
            >
              Dashboard
            </p>
            <p
              onClick={() => handleMenuClick("team")}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium ${
                selectedMenu === "team"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Team
            </p>
            <p
              onClick={() => handleMenuClick("projects")}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium ${
                selectedMenu === "projects"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Projects
            </p>
            <p
              onClick={() => handleMenuClick("calendar")}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium ${
                selectedMenu === "calendar"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Calendar
            </p>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
