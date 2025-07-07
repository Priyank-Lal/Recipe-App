import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-2 tracking-tight">Tastivo</h2>
        <p className="max-w-xl mx-auto text-emerald-100 mb-8">
          Explore a curated collection of global recipes. Crafted with passion,
          served with taste — only at Tastivo.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          {/* Twitter */}
          <a
            href="#"
            className="group bg-white/10 p-3 rounded-full hover:bg-[#1DA1F2] transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter
              size={24}
              className="text-white group-hover:text-white transition-colors duration-300"
            />
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="group bg-white/10 p-3 rounded-full hover:bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F56040] transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram
              size={24}
              className="text-white group-hover:text-white transition-colors duration-300"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group bg-white/10 p-3 rounded-full hover:bg-[#0077B5] transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn
              size={24}
              className="text-white group-hover:text-white transition-colors duration-300"
            />
          </a>
        </div>

        <div className="border-t border-emerald-700 pt-6">
          <p className="text-sm text-emerald-200">
            © {new Date().getFullYear()} Tastivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
