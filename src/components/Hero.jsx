const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>Where Elegance Meets Everyday Fashion.</h1>
                <p>Fashion is an extension of your individuality, reflecting your mood, culture, and creativity. The right ensemble can make a lasting impression, turning everyday moments into stylish statements. Whether bold or minimalistic, your fashion choices speak volumes about your personality.</p>
                
                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for products..." />
                    <button>Search</button>
                </div>
            </div>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img className="b1" src="/images/m.png" alt="myntra-logo" />
                    <img className="b2" src="/images/N.png" alt="nykaa-logo" />
                </div>
            </div>

            <div className="hero-image">
                <img 
                    src="/images/front.png" 
                    alt="Hero-image"  
                    style={{ width: "500px", height: "500px", position: "absolute", top: "100px", right: "0" }} 
                />
            </div>
        </main>
    );
}
export default HeroSection;
