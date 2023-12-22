import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="border-[#02a388] border p-2"
            href="https://github.com/tuhinhossain123"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            className="border-[#02a388] border p-2"
            href="https://www.facebook.com/"
          >
            <FaFacebookF className="text-3xl" />
          </a>
          <a
            className="border-[#02a388] border p-2"
            href="https://twitter.com/_Tuhin_Hossain"
          >
            <FaTwitter className="text-3xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
