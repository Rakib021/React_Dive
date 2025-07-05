// import Logo from "./logo";
import { navItems } from "../constants";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="fixed w-full">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            
            {/* <Logo /> */}
            <div className="flex items-center lg:order-2">
              <Button to="#" type="primary">
                Download
              </Button>
            </div>
            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
                {/* added navItems */}
              <ul className="text-white hidden lg:flex ml-14 space-x-12">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.label === "Home" ? (
                      /* “Home” link */
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      /* All other links */
                      <a
                        href={item.href}
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
