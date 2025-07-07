import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      <header className="bg-blue-900 text-white text-center py-6">
        <h1 className="text-3xl font-bold">EV Future</h1>
        <p className="text-lg">Smart Peer-to-Peer Charging & Green Mobility</p>
      </header>

      <nav className="bg-blue-700 text-white text-center py-3">
        <a href="#problem" className="mx-2 hover:underline">Problem</a>
        <a href="#solution" className="mx-2 hover:underline">Solution</a>
        <a href="#features" className="mx-2 hover:underline">Features</a>
        <a href="#audience" className="mx-2 hover:underline">Target Audience</a>
        <a href="#contact" className="mx-2 hover:underline">Contact</a>
      </nav>

      <section className="text-center bg-blue-100 py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Drive Clean. Charge Smart. Anywhere.</h2>
        <p className="max-w-2xl mx-auto">
          Revolutionizing EV infrastructure with solar-powered portable chargers,
          route optimization, and community charging pods.
        </p>
      </section>

      <section id="problem" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
        <p>
          Air pollution from traditional vehicles is a growing crisis. Over 51% of
          Delhi’s pollution comes from vehicular emissions. Urban populations are
          suffering from respiratory illnesses and energy insecurity due to
          overdependence on fossil fuels.
        </p>
      </section>

      <section id="solution" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
        <p>
          We offer a peer-to-peer EV charging platform, portable solar chargers,
          and an AI-powered green route navigation app. Our goal: build a
          reliable, decentralized, and eco-friendly EV infrastructure across India.
        </p>
      </section>

      <section id="features" className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Portable Solar EV Charger</h3>
            <p>
              Patent-pending foldable and lightweight solar charger for off-grid
              mobility.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Green Route Navigation</h3>
            <p>
              AI-powered route planner that reduces emissions and saves battery
              power.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Community Charging Pods</h3>
            <p>
              Modular, scalable, shared charging stations for local communities
              and fleets.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Smart EV Dashboard</h3>
            <p>
              Real-time battery insights, charger location, and seamless mobile
              integration.
            </p>
          </div>
        </div>
      </section>

      <section id="audience" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
        <ul className="list-disc list-inside">
          <li>Urban professionals (age 25–45), eco-conscious EV adopters</li>
          <li>Ride-sharing companies & corporate EV fleets</li>
          <li>Green living communities & climate advocates</li>
        </ul>
      </section>

      <section id="contact" className="py-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>Email: support@evfuture.in</p>
        <p>Phone: +91-98765-43210</p>
        <p>Location: Reva University, Bengaluru, India</p>
      </section>

      <footer className="bg-blue-900 text-white text-center py-4 mt-10">
        <p>© 2025 EV Future. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
