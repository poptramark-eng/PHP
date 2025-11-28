import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-uppercase text-white" href="/">
          NewsPortal
        </Link>

        {/* Hamburger toggler (shows only on mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-white" href="/">GENERAL</Link>
            <Link className="nav-link text-white" href="/business">BUSINESS</Link>
            <Link className="nav-link text-white" href="/entertainment">ENTERTAINMENT</Link>
            <Link className="nav-link text-white" href="/health">HEALTH</Link>
            <Link className="nav-link text-white" href="/science">SCIENCE</Link>
            <Link className="nav-link text-white" href="/sports">SPORTS</Link>
            <Link className="nav-link text-white" href="/technology">TECHNOLOGY</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
