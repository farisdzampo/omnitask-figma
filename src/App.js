import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-primary flex justify-center min-h-screen">
      <div className="max-w-screen-xl w-full">
      <Navbar />
      <Hero />

      </div>
    </main>
  );
}

export default App;
