import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/hasan.png";
import Container from "../ui/Container";
import { Github, Linkedin, Mail, Twitter, Calendar } from "lucide-react";
import ReButton from "../Button/ReButton";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] border-t border-gray-800 text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Info & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Hasan"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold tracking-tight">Hasan</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern web experiences and digital products with attention to detail.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/hasanali112"
                target="_blank"
                className="p-2 bg-gray-900 rounded-full hover:bg-[#057cc5] transition-colors duration-300"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://x.com/mdali401932"
                target="_blank"
                className="p-2 bg-gray-900 rounded-full hover:bg-[#057cc5] transition-colors duration-300"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/md-hasan-ali-khan"
                target="_blank"
                className="p-2 bg-gray-900 rounded-full hover:bg-[#057cc5] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#home" className="hover:text-[#057cc5] transition-colors">Home</Link></li>
              <li><Link href="#skills" className="hover:text-[#057cc5] transition-colors">Skills</Link></li>
              <li><Link href="#services" className="hover:text-[#057cc5] transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-[#057cc5] transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-[#057cc5] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Web Development</li>
              <li>MERN Stack Development</li>
              <li>CMS Integration</li>
              <li>Full-Stack Web App</li>
              <li>API Integration</li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={18} className="text-[#057cc5]" />
              <span>mdhasan.alikhan67@gmail.com</span>
            </div>
            <Link href="/schedule" className="inline-block">
              <ReButton
                title="Book a Call"
                icon={<Calendar size={18} />}
                className="rounded-xl h-[45px] px-6 text-sm"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Hasan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
