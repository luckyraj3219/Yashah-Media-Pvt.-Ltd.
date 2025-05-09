import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
       
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_20px_white] flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Yashah Media. All rights reserved.</p>
        </div>

       
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/yashahmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/yashahmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/yashah-media/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
