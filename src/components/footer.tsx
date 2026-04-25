const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-600 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-20">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5 group cursor-pointer">
            <span className="text-xl font-extrabold text-white tracking-tight">Shiriix</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Company</h4>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-2">Connect</h4>
            <a href="https://www.linkedin.com/company/shiriix/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/MadhuMishra663/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#161616] flex items-center justify-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Shiriix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
