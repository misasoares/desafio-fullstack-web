import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { logout, selectUser } from "../../auth/store/userSlice";
import { useNavigate } from "react-router-dom";
import LosSantosBG from "../../../assets/los_santos.png";

interface PropsDefaultLayout {
  children: React.ReactNode;
  handleChangeMenu: (menu: string) => void;
}

export default function DefaultLayout({
  children,
  handleChangeMenu,
}: PropsDefaultLayout) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectUser);

  const [selectedMenu, setSelectedMenu] = useState("emblems");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<string | number>("0px");
  const menuRef = useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    handleChangeMenu(menu);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    handleClose();
    dispatch(logout());
    navigate("/auth");
  }

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(
        isMobileMenuOpen ? `${menuRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-gray-800 ">
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
                    onClick={() => handleMenuClick("emblems")}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                      selectedMenu === "emblems"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Meus emblemas
                  </p>
                  <p
                    onClick={() => handleMenuClick("all-emblems")}
                    className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                      selectedMenu === "all-emblems"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Todos emblemas
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div className="flex items-center">
                  <Typography fontWeight="bold" className="text-white">
                    {user.name}
                  </Typography>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>C</Avatar>
                    </IconButton>
                  </Tooltip>
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
              onClick={() => handleMenuClick("emblems")}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium ${
                selectedMenu === "emblems"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              aria-current={selectedMenu === "emblems" ? "page" : undefined}
            >
              Meus emblemas
            </p>
            <p
              onClick={() => handleMenuClick("all-emblems")}
              className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
                selectedMenu === "all-emblems"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Todos emblemas
            </p>
          </div>
        </div>
      </nav>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Minha conta</MenuItem>

        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>

      <div className="relative p-10 bg-black min-h-screen">
        <div
          className="  absolute inset-0 bg-cover bg-center  opacity-35"
          style={{ backgroundImage: `url(${LosSantosBG})` }}
        ></div>
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
