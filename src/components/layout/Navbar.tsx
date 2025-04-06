import { useState } from "react";
import { Menu, X, LogIn, UserPlus, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              AkquaintX
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-primary transition-colors font-medium inline-flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/services/client" className="w-full">
                    For Clients
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/services/experts" className="w-full">
                    For Experts
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-primary transition-colors font-medium inline-flex items-center">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/resources/blogs" className="w-full">
                    Blogs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources/help" className="w-full">
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/faq" className="w-full">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-4">
              <Link to="/auth?mode=login">
                <Button
                  variant="ghost"
                  className="text-sm font-medium flex items-center gap-2 hover:text-primary"
                >
                  <LogIn className="w-4 h-4" />
                  Log in
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button className="text-base flex items-center gap-2 bg-primary hover:bg-primary-light">
                  <UserPlus className="w-4 h-4" />
                  Sign up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <Link to="/services/client" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              Services (Client)
            </Link>
            <Link to="/services/experts" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              Services (Experts)
            </Link>
            <Link to="/resources/blogs" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              Blogs
            </Link>
            <Link to="/resources/help" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              Help Center
            </Link>
            <Link to="/faq" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50">
              FAQ
            </Link>
            <div className="flex flex-col gap-2 px-3 pt-2">
              <Link to="/auth?mode=login">
                <Button
                  variant="ghost"
                  className="text-sm font-medium flex items-center justify-center gap-2 w-full hover:text-primary"
                >
                  <LogIn className="w-4 h-4" />
                  Log in
                </Button>
              </Link>
              <Link to="/auth?mode=signup">
                <Button className="text-base flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-light">
                  <UserPlus className="w-4 h-4" />
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-primary transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
  >
    {children}
  </a>
);

export default Navbar;