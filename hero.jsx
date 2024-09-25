const HeroSection = () => {
    return (
      <main className="hero">
        <div className="hero-content">
          <h1>OUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST, AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className="Shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="Amazon logo" />
              <img src="/images/flipkart.png" alt="Flipkart logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="hero-logo"/>
        </div>
      </main>
    );
  };
  
  export default HeroSection;
  