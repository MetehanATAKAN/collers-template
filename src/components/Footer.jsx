
const sections = [
  {
    title: "Product",
    items: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    title: "Solutions",
    items: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
  },
  {
    title: "Support",
    items: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  },
];

const items = [
  { name: "Youtube", icon: '/images/youtube.png', link: "https://www.youtube.com/" },
  { name: "Facebook", icon: '/images/facebook.png', link: "https://www.facebook.com/" },
  { name: "Twitter", icon: '/images/x.png', link: "https://twitter.com/" },
  { name: "Instagram", icon: '/images/instagram.png', link: "https://www.instagram.com/" },
  { name: "Linkedin", icon: '/images/linkedin.png', link: "https://www.linkedin.com/" },
];

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 md:px-20">
      <div className="max-w-[1240px] mx-auto grid text-center md:text-start  md:grid-cols-4 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index} className="mb-8 md:m-0">
            <h6 className="font-bold py-3 text-white">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-3 text-slate-200 hover:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="pt-8 md:pt-2">
          <p className="font-bold mb-3 text-white">Get the App</p>
          <div className="flex flex-col gap-12 items-center md:items-baseline">
            <div className="flex flex-col gap-3">
              <img
                src={"/images/app.png"}
                alt="app store"
                className="w-40 h-12 mt-3"
              />
              <img
                src={"/images/google.png"}
                alt="google"
                className="w-40 h-12"
              />
            </div>
            <div>
              <p className="font-bold mb-3 text-white">Follow Us</p>
              <div className="flex gap-4 pt-4">
                {items.map((x, index) => (
                  <img
                    key={index}
                    src={x.icon}
                    alt={x.name}
                    className="w-6 h-6"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] items-center py-4 mx-auto justify-between md:flex-row md:items-baseline text-center text-gray-500">
        <p className="py-4 text-slate-200">
          Collers @ 2023. All rights reserved
        </p>
        <ul className="flex gap-9 text-slate-200 pt-4 ">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Contact</li>
          <li className="flex items-center gap-1">
           <div> <img src={"/images/world.png"} alt="world" className="w-4 h-4" /></div>
            <span>EN</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;