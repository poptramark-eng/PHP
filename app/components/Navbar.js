import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-uppercase" href="/">
          NewsPortal
        </Link>

        {/* Categories (always visible, no JS collapse) */}
        <div className="navbar-nav ms-auto ">
          <Link className="nav-link text-light" href="/">GENERAL</Link>
          <Link className="nav-link text-light" href="/business">BUSINESS</Link>
          <Link className="nav-link text-light" href="/entertainment">ENTERTAINMENT</Link>
          <Link className="nav-link text-light" href="/health">HEALTH</Link>
          <Link className="nav-link text-light" href="/science">SCIENCE</Link>
          <Link className="nav-link text-light" href="/sports">SPORTS</Link>
          <Link className="nav-link text-light" href="/technology">TECHNOLOGY</Link>
        </div>
      </div>
    </nav>
  );
}
