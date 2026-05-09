export default function Footer() {
  return (
    <footer data-theme="dark" className="py-6 px-6 md:px-10 bg-darker">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <p className="text-[0.55rem] tracking-[0.15em] uppercase text-white/30">
          &copy; 2024 Mercer Studio
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-[0.55rem] tracking-[0.12em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
