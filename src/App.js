import AuthValidator from "./components/AuthValidator";
import Bridge from "./components/Bridge";
import Cards from "./components/Cards";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";

function App() {
  return (
    <main className="bg-primary flex justify-center items-center min-h-screen flex-col">
      <div className="max-w-screen-xl w-full">
        <Navbar />
        <Hero />
        <Steps />
        <Bridge />
        <Logos />
        <Dashboard />
        <AuthValidator />
        <Cards />
      </div>
        <Footer />
    </main>
  );
}

export default App;
