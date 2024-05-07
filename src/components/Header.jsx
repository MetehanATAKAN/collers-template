import { useState } from "react";

const menu = ["Products", "Solutions", "Pricing", "Resources", "Log In"];

const listItems = menu.map((person, index) => (
  <li key={index} className="px-3 py-2 cursor-pointer rounded hover:bg-sky-100">
    {person}
  </li>
));

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative m-auto bg-white md:bg-amber-50 px-6 lg:px-20 py-6 flex justify-between items-center text-amber-900">
      <h1 className="text-3xl font-bold">Collers</h1>
      <nav className={isOpen ? "flex" : " hidden md:flex"}>
        <ul className="flex text-base items-center font-medium absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-16 left-0 md:top-0 md:flex bg-amber-100 md:bg-transparent py-4 md:py-0">
          {listItems}
          <button className="section1-button border-amber-900">
            Sign up now
          </button>
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          className="flex justify-center items-center"
          onClick={toggleNavbar}
        >
          <img 
          src={'/images/menu.png'} 
          alt="menu-icon" 
          className={isOpen ? "hidden" : "flex"}
          />
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "flex" : "hidden"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Header;
