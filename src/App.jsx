import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from './components/navigation';
import CircularBar  from "./components/circularBar";
import Traditional from "./components/traditional";
import Footer from "./components/footer";
import ContactUs  from "./components/contactus";
const App = () => {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <CircularBar />
            <Traditional />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default App;
 