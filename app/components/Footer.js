export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto shadow-sm">
      <div className="container text-center">
        

        {/* Divider */}
        <hr className="border-secondary my-3" />

        {/* Legal / Copyright */}
        <p className="small mb-0">
          © {new Date().getFullYear()} NewsPortal.  by Mark Machukhu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
