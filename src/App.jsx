import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import CartItem from './components/CartItem.jsx';
import ProductList from './components/ProductList.jsx';
import { selectCartTotalItems } from './redux/CartSlice.jsx';

function Navbar() {
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" to="/">
          <span className="brand-mark">PN</span>
          <span>Paradise Nursery</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink className="cart-link" to="/cart" aria-label={`Cart with ${totalItems} items`}>
            <span className="cart-icon" aria-hidden="true">Cart</span>
            <span className="cart-count">{totalItems}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Fresh indoor greenery</p>
          <h1>Paradise Nursery</h1>
          <p>
            Bring calm, texture, and cleaner air into your home with carefully
            selected houseplants for every room and care style.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/plants">
              Get Started
            </Link>
            <Link className="secondary-button" to="/about">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
