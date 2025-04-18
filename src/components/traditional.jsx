// import React from "react";
const TraditionalCollection = () => {
  const collections = [
    { id: 1, name: "Regal Wedding Attire", img: "/images/f1.jpg" },
    { id: 2, name: "Timeless Festive Wear", img: "/images/f2.jpg" },
    { id: 3, name: "Royal Heritage Silk", img: "/images/f3.jpg" },
    { id: 4, name: "Elegant Embroidered Drapes", img: "/images/f4.jpg" },
  ];

  return (
    <div className="traditional-collection">
      <h2 className="section-title">Unveiling Elegance: A Timeless Collection</h2>
      <div className="collection-grid">
        {collections.map((item) => (
          <div key={item.id} className="collection-item">
            <img src={item.img} alt={item.name} />
            <div className="overlay">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraditionalCollection;
