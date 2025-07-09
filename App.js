import React from "react";
import "./App.css";

const flavors = [
  {
    name: "Vanilla",
    image:
      "https://media.istockphoto.com/id/1326143969/photo/bowl-with-vanilla-ice-cream-balls.jpg?s=612x612&w=0&k=20&c=WxEriNEK7yW7F4AWImLQRrpco-R_bdDYEQoyhigu9fc=",
  },
  {
    name: "Chocolate",
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2022/05/ice-cream-flavors-chocolate.jpg.webp",
  },
  {
    name: "Strawberry",
    image:
      "https://5.imimg.com/data5/KO/MX/MY-9134447/strawberry-ice-cream-500x500.jpg",
  },
  {
    name: "Mango",
    image:
      "https://www.milkmaid.in/sites/default/files/2022-12/Mango-Ice-Cream-335x300.jpg",
  },
];

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🍦 IceCream Delight</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#order">Order</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>

      <div className="content">
        {/* Home Section */}
        <section id="home" className="home">
          <h1>🍨 Welcome to IceCream Delight</h1>
          <p>Enjoy handcrafted scoops of happiness!</p>
          <img
            className="home-img"
            src="https://www.pngitem.com/pimgs/m/2-21224_food-frozen-ice-cream-ice-ice-ice-cream.png"
            alt="Ice Cream"
          />
        </section>

        {/* Menu Section */}
        <section id="menu" className="menu">
          <h2>Explore Our Flavors</h2>
          <div className="menu-grid">
            {flavors.map((flavor, idx) => (
              <div className="card" key={idx}>
                <img src={flavor.image} alt={flavor.name} />
                <h3>{flavor.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section id="order" className="order">
  <h2>Order Your Favourite Ice Cream 🍧</h2>
  <form
    className="order-form"
    onSubmit={(e) => {
      e.preventDefault(); // Prevent actual page reload
      alert("✅ Your order has been placed successfully!");
      e.target.reset(); // Optional: clears the form
    }}
  >
    <input type="text" placeholder="Full Name" required />
    <input type="email" placeholder="Email Address" required />
    <select required>
      <option value="">Select Flavor</option>
      {flavors.map((flavor, idx) => (
        <option key={idx} value={flavor.name}>{flavor.name}</option>
      ))}
    </select>
    <input type="number" placeholder="Quantity" min="1" required />
    <textarea placeholder="Delivery Address" required></textarea>
    
    <button type="submit">Place Order</button>
    
  </form>
</section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact Us 📞</h2>
          <form className="contact-form"
          onSubmit={(e) => {
      e.preventDefault(); // Prevent actual page reload
      alert("✅ Your message has been sent!");
      e.target.reset(); // Optional: clears the form
    }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>


      </div>

      <footer className="footer">
        © 2025 IceCream Delight. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
