const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/30 dark:bg-white/5 text-gray-700 dark:text-blue-400 shadow-inner border-t border-gray-200 dark:border-gray-700 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
        <p className="text-sm tracking-wide font-light">
          Made for{" "}
          <span className="font-semibold text-orange-400 dark:text-indigo-400">
            Credex Internship
          </span>
        </p>

        <div className="flex gap-6 mt-2">
          {[
            {
              href: "https://www.linkedin.com/",
              src: "/logos/linkedin.png",
              alt: "LinkedIn",
            },
            {
              href: "https://github.com/",
              src: "/logos/github.png",
              alt: "GitHub",
            },
            {
              href: "https://twitter.com/",
              src: "/logos/x.png",
              alt: "Twitter",
            },
          ].map(({ href, src, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative"
            >
              <div className="p-2 rounded-full bg-white/40 dark:bg-white/10 border border-gray-300 dark:border-gray-600 backdrop-blur-sm shadow-md transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <img
                  src={src}
                  alt={alt}
                  className="h-5 w-5 dark:invert group-hover:animate-bounce"
                />
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          © {new Date().getFullYear()} SoftSell • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
