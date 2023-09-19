import Link from "next/link";


import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              {/* <Link href="/" className="d-block">
                <img src="" alt="" width={95} />
              </Link> */}
            </div>
          </li>

          <li className="nav-item">
            <Link href="/" className="nav-link nav-item">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/pages-menu/about-us-v1" className="nav-link nav-item">
              <span>About</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/pages-menu/faq" className="nav-link nav-item">
              <span>FAQ</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/blog/blog-v3" className="nav-link nav-item">
              <span>Blog</span>
            </Link>
          </li>
          <li className="nav-item" >
            <Link href="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
          <li className="nav-item" >
            <Link href="/pages-menu/pricing" className="nav-link">
              Top-tier
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default MainMenu;
