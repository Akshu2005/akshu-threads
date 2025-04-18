const Navigation = () => {
    return (
        <nav className="container">
                <div className="logo">
                    <img 
                        src="/images/logo.png" 
                        alt="Logo" 
                        style={{ width: "60px", height: "60px" }} // Set explicit width & height
                    />
                </div>
            
            <ul>
                <li href="#">Home</li>
                <li href="#">IndianWear</li>
                <li href="#">WesternWear</li>
                <li href="#">Contact us</li>

            </ul>

            <button>login</button>
            </nav>
    );
}
export default Navigation;