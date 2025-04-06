import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-light border-t h-full overflow-y-auto flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info - Takes 6 columns */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="text-4xl font-semibold text-body">
              AkquaintX
            </Link>
            <div className="flex space-x-4">
              <span className="text-body hover:text-body/50 cursor-pointer">
                LinkedIn
              </span>
              <span className="text-body hover:text-body/50 cursor-pointer">
                Twitter
              </span>
            </div>
          </div>

          {/* Right side links - Each takes 2 columns */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                {/* <Link to="/about" className="text-body hover:text-body/50 cursor-pointer"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  About Us
                </span>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/careers" className="text-body hover:text-body/50 cursor-pointer"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  Careers
                </span>
                {/* </Link> */}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                {/* <Link to="/services/client" className="text-body hover:text-body/50 cursor-pointer"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  For Clients
                </span>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/services/experts" className="text-body hover:text-body/50 cursor-pointer"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  For Experts
                </span>
                {/* </Link> */}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                {/* <Link to="/resources/blogs" className="text-body hover:text-body/50"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  Blog
                </span>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/faq" className="text-body hover:text-body/50"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  FAQ
                </span>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link to="/resources/help" className="text-body hover:text-body/50"> */}
                <span className="text-body hover:text-body/50 cursor-pointer">
                  Help Center
                </span>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-center items-center">
          <p className="text-body text-sm">
            © {new Date().getFullYear()} AkquaintX. All rights reserved.
          </p>
          {/* <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/services/client">
              <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                Get a Quote
              </button>
            </Link>
            <Link to="/auth?mode=signup">
              <button className="px-6 py-2 bg-accent text-primary rounded-full hover:bg-accent/90 transition-colors">
                Join Us
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;