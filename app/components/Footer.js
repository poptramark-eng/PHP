export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto shadow-sm">
      <div className="container text-center">
        {/* Personal Info */}
        <h6 className="fw-bold">Mark Machukhu</h6>
        <p className="mb-1">
          Software Engineering Student @ Kisii University | Web Development & Scalable Apps
        </p>
        <p className="small text-muted mb-2">
          Skilled in PHP, MySQL, React, Next.js, Bootstrap, API Design,Flutter & DevOps
        </p>

        {/* Divider */}
        <hr className="border-secondary my-3" />

        {/* Legal / Copyright */}
        <p className="small mb-0">
          © {new Date().getFullYear()} NewsPortal. Built by Mark Machukhu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
