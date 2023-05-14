import AuthValidator from "./components/AuthValidator";
import Bridge from "./components/Bridge";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Steps from "./components/Steps";

function App() {
  return (
    <main className="bg-primary flex justify-center min-h-screen">
      <div className="max-w-screen-xl w-full">
      <Navbar />
      <Hero />
      <Steps />
      <Bridge />
      <Logos />
      <Dashboard />
      <AuthValidator />

      </div>
    </main>
  );
}

export default App;
