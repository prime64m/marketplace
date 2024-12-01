import React, { useState } from 'react';
import { ShoppingBasket, Leaf, Gavel, House } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const isActive = (page) => {
    return currentPage === page ? "bg-green-700" : "";
  };

  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('marketplace')}>
            <Leaf className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">Krishi Bazaar</span>
          </div>
          <div className="flex space-x-4">
            {/* Home Button */}
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center px-3 py-2 rounded-md text-white hover:bg-green-700 transition ${isActive('home')}`}
            >
              <House className="h-5 w-5 mr-1" />
              Home
            </button>
            <button
              onClick={() => setCurrentPage('marketplace')}
              className={`flex items-center px-3 py-2 rounded-md text-white hover:bg-green-700 transition ${isActive('marketplace')}`}
            >
              <ShoppingBasket className="h-5 w-5 mr-1" />
              Marketplace
            </button>
            <button
              onClick={() => setCurrentPage('soil-test')}
              className={`flex items-center px-3 py-2 rounded-md text-white hover:bg-green-700 transition ${isActive('soil-test')}`}
            >
              <Leaf className="h-5 w-5 mr-1" />
              Soil Test
            </button>
            <button
              onClick={() => setCurrentPage('bidding')}
              className={`flex items-center px-3 py-2 rounded-md text-white hover:bg-green-700 transition ${isActive('bidding')}`}
            >
              <Gavel className="h-5 w-5 mr-1" />
              Bidding
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Welcome Banner */}
      <div className="bg-green-100 p-4 rounded-md mb-4 text-center">
        <h2 className="text-lg font-semibold">Welcome to Krishi' Bazaar🌾</h2>
        <p className="text-gray-700">Connect with buyers and manage your products easily.</p>
      </div>

      {/* Main Content */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Transform Your Farming Business</h1>
        <p className="text-gray-700">Connect directly with buyers and get the best value for your produce</p>
        <div className="mt-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md mr-2">Explore Products</button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Upload Your Products</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex justify-around mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg">Direct Sales</h3>
          <p className="text-gray-700">Sell directly to customers and keep more of your profits.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg">Easy Upload</h3>
          <p className="text-gray-700">Quickly upload your products with our simple interface.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="font-semibold text-lg">Secure Payments</h3>
          <p className="text-gray-700">Receive payments securely and promptly.</p>
        </div>
      </div>

      {/* About Us and Contact Us Section */}
      <div className="flex justify-between space-x-6">
        {/* About Us Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Krishi' Bazaar is dedicated to bridging the gap between farmers and consumers by providing a platform for direct sales, efficient product uploads, and secure payments. We aim to support farmers by helping them reach a wider audience and maximizing their profits.
          </p>
          <p className="text-gray-700">
            Our mission is to empower farmers and enhance agricultural commerce with transparency and ease. Join us in building a sustainable future for agriculture.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-md" rows="4" placeholder="Your Message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


// Marketplace Component
const Marketplace = ({ products, setProducts }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addProduct = () => {
    if (!productName || !productPrice) return;
    const newProduct = { name: productName, price: Number(productPrice) };
    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>List Your Product</CardTitle>
          <CardDescription>Add your vegetables and fruits to the Bazaar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="flex-1"
            />
            <Input
              type="number"
              placeholder="Price (₹)"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-32"
            />

            <Button onClick={addProduct} className="bg-green-600 hover:bg-green-700">
              Add Product
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>₹{product.price}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Soil Test Component

const SoilTest = () => {
  const [phLevel, setPhLevel] = useState('');
  const [soilType, setSoilType] = useState('');
  const [irrigation, setIrrigation] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [humidity, setHumidity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [airQuality, setAirQuality] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleTest = () => {
    if (!phLevel || !soilType || !irrigation || !rainfall || !humidity || !temperature || !nitrogen || !phosphorus || !airQuality) {
      setRecommendation('Please fill in all fields to get a recommendation.');
      return;
    }

    const ph = parseFloat(phLevel);
    const rain = parseFloat(rainfall);
    const humid = parseFloat(humidity);
    const temp = parseFloat(temperature);
    const nitrogenIndex = parseFloat(nitrogen);
    const phosphorusIndex = parseFloat(phosphorus);

    // Rice
    if (ph >= 5.5 && ph <= 6.5 && (soilType === 'clay' || soilType === 'loamy') && irrigation === 'high' && rain >= 1500 && rain <= 2000 && humid >= 60 && humid <= 80 && temp >= 20 && temp <= 38 && nitrogenIndex >= 2 && phosphorusIndex === 2 && (airQuality === 'good' || airQuality === 'moderate')) {
      setRecommendation('Rice is suitable for the given conditions.');
      return;
    }

    // Wheat
    if (ph >= 6.0 && ph <= 7.5 && soilType === 'loam' && irrigation === 'moderate' && rain >= 750 && rain <= 1000 && humid >= 50 && humid <= 70 && temp >= 15 && temp <= 25 && nitrogenIndex >= 2 && phosphorusIndex === 2 && airQuality === 'good') {
      setRecommendation('Wheat is suitable for the given conditions.');
      return;
    }

    // Maize (Corn)
    if (ph >= 5.5 && ph <= 7.5 && soilType === 'sandy loam' && irrigation === 'moderate' && rain >= 600 && rain <= 800 && humid >= 50 && humid <= 60 && temp >= 18 && temp <= 27 && nitrogenIndex === 3 && phosphorusIndex === 2 && (airQuality === 'good' || airQuality === 'moderate')) {
      setRecommendation('Maize (Corn) is suitable for the given conditions.');
      return;
    }

    // Millets
    if (ph >= 5.0 && ph <= 7.5 && (soilType === 'sandy' || soilType === 'loamy') && irrigation === 'low' && rain >= 500 && rain <= 700 && humid >= 40 && humid <= 50 && temp >= 25 && temp <= 30 && nitrogenIndex <= 2 && phosphorusIndex <= 2 && (airQuality === 'good' || airQuality === 'moderate')) {
      setRecommendation('Millets are suitable for the given conditions.');
      return;
    }

    // Barley
    if (ph >= 6.0 && ph <= 7.5 && (soilType === 'loamy' || soilType === 'sandy loam') && (irrigation === 'low' || irrigation === 'moderate') && rain >= 500 && rain <= 600 && humid >= 50 && humid <= 60 && temp >= 12 && temp <= 25 && nitrogenIndex === 2 && phosphorusIndex === 2 && airQuality === 'good') {
      setRecommendation('Barley is suitable for the given conditions.');
      return;
    }

    // Pulses (Lentils)
    if (ph >= 6.0 && ph <= 7.0 && (soilType === 'loamy' || soilType === 'clay loam') && irrigation === 'low' && rain >= 600 && rain <= 800 && humid >= 60 && humid <= 80 && temp >= 20 && temp <= 30 && nitrogenIndex === 2 && phosphorusIndex === 2 && airQuality === 'good') {
      setRecommendation('Pulses (Lentils) are suitable for the given conditions.');
      return;
    }

    // Sugarcane
    if (ph >= 6.0 && ph <= 7.5 && (soilType === 'clayey' || soilType === 'loamy') && irrigation === 'very high' && rain >= 1500 && rain <= 2000 && humid >= 70 && humid <= 80 && temp >= 20 && temp <= 38 && nitrogenIndex === 3 && phosphorusIndex === 3 && airQuality === 'moderate') {
      setRecommendation('Sugarcane is suitable for the given conditions.');
      return;
    }

    // Potato
    if (ph >= 4.8 && ph <= 5.8 && (soilType === 'sandy loam' || soilType === 'loamy') && irrigation === 'moderate' && rain >= 500 && rain <= 700 && humid >= 60 && humid <= 80 && temp >= 15 && temp <= 25 && nitrogenIndex === 2 && phosphorusIndex === 2 && (airQuality === 'good' || airQuality === 'moderate')) {
      setRecommendation('Potato is suitable for the given conditions.');
      return;
    }

    // Add similar conditions for other crops...

    // If no match is found
    setRecommendation('No specific crop recommendation found for the given conditions. Please consult with a local expert.');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Soil and Environmental Test</CardTitle>
          <CardDescription>Input soil and environmental data to get planting recommendations specific to India.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="number" placeholder="Soil pH Level" value={phLevel} onChange={(e) => setPhLevel(e.target.value)} className="w-full" />
              <Input type="text" placeholder="Soil Type (e.g., clay, loamy, sandy)" value={soilType} onChange={(e) => setSoilType(e.target.value)} className="w-full" />
              <Input type="text" placeholder="Irrigation Level (low, medium, high, very high)" value={irrigation} onChange={(e) => setIrrigation(e.target.value)} className="w-full" />
              <Input type="number" placeholder="Rainfall (mm)" value={rainfall} onChange={(e) => setRainfall(e.target.value)} className="w-full" />
              <Input type="number" placeholder="Humidity (%)" value={humidity} onChange={(e) => setHumidity(e.target.value)} className="w-full" />
              <Input type="number" placeholder="Temperature (°C)" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="w-full" />
              <Input type="number" placeholder="Nitrogen Index" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} className="w-full" />
              <Input type="number" placeholder="Phosphorus Index" value={phosphorus} onChange={(e) => setPhosphorus(e.target.value)} className="w-full" />
              <Input type="text" placeholder="Air Quality (good, moderate, poor)" value={airQuality} onChange={(e) => setAirQuality(e.target.value)} className="w-full" />
            </div>

            {/* Button to get recommendation */}
            <div className="text-center mt-4">
              <Button onClick={handleTest} className="bg-green-600 hover:bg-green-700">
                Get Recommendation
              </Button>
            </div>

            {/* Recommendation Display */}
            {recommendation && (
              <Card className="bg-green-50 mt-6">
                <CardContent className="pt-6">
                  <p>{recommendation}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// Bidding Component
const Bidding = ({ products, bids, setBids }) => {
  const [bidAmounts, setBidAmounts] = useState({});

  const placeBid = (productName) => {
    const bidAmount = bidAmounts[productName];
    if (!bidAmount) return;
    
    setBids((prevBids) => ({
      ...prevBids,
      [productName]: Math.max(Number(bidAmount), prevBids[productName] || 0),
    }));
    setBidAmounts(prev => ({ ...prev, [productName]: '' }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Card key={product.name}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>Starting Bid: ₹{product.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Enter your bid"
                    value={bidAmounts[product.name] || ''}
                    onChange={(e) => setBidAmounts(prev => ({
                      ...prev,
                      [product.name]: e.target.value
                    }))}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => placeBid(product.name)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Place Bid
                  </Button>
                </div>
                <p className="text-sm font-medium">
                  Highest Bid: ₹{bids[product.name] || product.price}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-green-600 mt-auto">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <p className="text-center text-white">
        &copy; {new Date().getFullYear()} Farmers' Marketplace. All rights reserved.
      </p>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Default to home page
  const [products, setProducts] = useState([]);
  const [bids, setBids] = useState({});

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'marketplace':
        return <Marketplace products={products} setProducts={setProducts} />;
      case 'soil-test':
        return <SoilTest />;
      case 'bidding':
        return <Bidding products={products} bids={bids} setBids={setBids} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
