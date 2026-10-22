export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-sand-dim">
          © {year} {name}. Crafted with care in Kerala.
        </p>
        <a href="#" className="text-sm text-sand-dim transition hover:text-sand">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
