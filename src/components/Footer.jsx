export default function Footer() {
  return (
    <footer className="border-t border-hairline px-5 sm:px-8 py-10 mb-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-paper">
          <span className="text-lime">$</span> camp.init
        </span>
        <p className="font-mono text-xs text-ash text-center sm:text-right">
          © {new Date().getFullYear()} Coding Camp. Built one commit at a time.
        </p>
      </div>
    </footer>
  );
}
