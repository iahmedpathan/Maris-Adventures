import logo from './assets/logo.png';
import tshirtwhite from './assets/tshirtwhite.png';
import { useState, useEffect } from 'react';
import { Menu, X, Waves, Anchor, MapPin, Clock, Star, Camera, Fish, Ship, ChevronDown, ShoppingBag, Ruler, Check, Plus, Minus, Phone, Mail } from 'lucide-react';

// Tour data
const tours = [
  {
    id: 1,
    name: "Morning Sail Adventure",
    duration: "4 Hours",
    price: 89,
    image: "https://thumbs.dreamstime.com/b/sailboat-sailing-sunrise-4041488.jpg",
    highlights: ["Breakfast on board", "Swimming in hidden coves", "Marine life spotting", "Professional guide"],
    description: "Start your day with a serene morning sail across crystal-clear waters."
  },
  {
    id: 2,
    name: "Sunset Cruise Experience",
    duration: "3 Hours",
    price: 109,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    highlights: ["Golden hour photography", "Wine & cheese tasting", "Dolphin watching", "Sunset views"],
    description: "Witness the most breathtaking sunset over the horizon on our premium cruise."
  },
  {
    id: 3,
    name: "Full Adventure Package",
    duration: "8 Hours",
    price: 199,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    highlights: ["Snorkeling adventure", "Island hopping", "Lunch included", "Underwater photos", "Whale watching season"],
    description: "The ultimate sea exploration with everything included for a full day."
  }
];

// Products data
const products = [
  {
    id: 1,
    name: "Maris Adventures T-Shirt",
    price: 35,
    images: {
      "Ocean Blue": "/assets/tshirtblue.png",
      "White": "/assets/tshirtwhite.png"
    },
    colors: ["Ocean Blue", "White"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: 2,
    name: "Button Down Polo Shirt",
    price: 55,
    images: {
      "White": "/assets/polowhite.png",
      "Navy Blue": "/assets/poloblue.png"
    },
    colors: ["White", "Navy Blue"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: 3,
    name: "Sea Shed Cap",
    price: 28,
    images: {
      "White": "/assets/capwhite.png",
      "Navy": "/assets/capblue.png"
    },
    colors: ["White", "Navy"],
    sizes: ["One Size"]
  },
  {
    id: 4,
    name: "Antarctic Hood",
    price: 65,
    images: {
      "Ocean Blue": "/assets/hoodieblue.png",
      "Ice White": "/assets/hoodiewhite.png"
    },
    colors: ["Ocean Blue", "Ice White"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: 5,
    name: "Windbreaker Jacket",
    price: 95,
    images: {
      "White": "/assets/jacketblue.png",
      "Blue": "/assets/jacketwhite.png"
    },
    colors: ["White", "Blue"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: 6,
    name: "Beach Towel",
    price: 40,
    image: "/assets/towel.png",
    colors: ["Multi-wave pattern"],
    sizes: ["One Size"]
  }
];

// Size chart data
const sizeChartData = {
  inches: {
    headers: ["Size", "Chest", "Waist", "Length"],
    sizes: [
      ["S", "36-38", "30-32", "28"],
      ["M", "39-41", "33-35", "29"],
      ["L", "42-44", "36-38", "30"],
      ["XL", "45-48", "39-42", "31"],
      ["2XL", "49-52", "43-46", "32"],
      ["3XL", "53-56", "47-50", "33"]
    ]
  },
  cm: {
    headers: ["Size", "Chest", "Waist", "Length"],
    sizes: [
      ["S", "91-97", "76-81", "71"],
      ["M", "99-104", "84-89", "74"],
      ["L", "107-112", "91-97", "76"],
      ["XL", "114-122", "99-107", "79"],
      ["2XL", "124-132", "109-117", "81"],
      ["3XL", "135-142", "119-127", "84"]
    ]
  }
};

// Navbar Component
function Navbar({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = ['tours', 'merchandise', 'about', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#00B4D8] rounded-full flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
            </div>
            <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-[#001B3D]' : 'text-white'}`}>
              Maris Adventures
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors ${
                  isScrolled 
                    ? activeSection === item ? 'text-[#0066CC]' : 'text-[#1A2B3C] hover:text-[#0066CC]'
                    : activeSection === item ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('book')}
              className="bg-[#0066CC] hover:bg-[#004999] text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-[#001B3D]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[#001B3D]' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl p-4 absolute top-20 left-4 right-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 px-4 capitalize text-[#1A2B3C] hover:bg-[#E6F3FF] rounded-lg font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('book')}
              className="w-full mt-4 bg-[#0066CC] text-white py-3 rounded-lg font-semibold"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B3D]/60 via-[#0066CC]/40 to-[#001B3D]/80" />
      </div>

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 45C120 30 240 0 360 15C480 30 600 75 720 90C840 105 960 90 1080 75C1200 60 1320 45 1380 37.5L1440 30V120H0V60Z" fill="white" fillOpacity="0.1"/>
          <path d="M0 80L60 65C120 50 240 20 360 35C480 50 600 95 720 110C840 125 960 110 1080 95C1200 80 1320 65 1380 57.5L1440 50V120H0V80Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo placeholder */}
        
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 mt-20 drop-shadow-lg">
          Maris Adventures
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          Explore the Ocean's Hidden Treasures
        </p>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Premium sea tours offering unforgettable experiences from sunrise to sunset. 
          Dive into adventure with our expert crew.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0066CC] hover:bg-[#004999] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Ship className="w-5 h-5" />
            Explore Tours
          </button>
          <button 
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Anchor className="w-5 h-5" />
            Book Your Trip
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mt-16">
          {[
            { value: '300+', label: 'Happy Guests' },
            { value: '30+', label: 'Trips Completed' },
            { value: '4.5★', label: 'Rating' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}

// Tour Card Component
function TourCard({ tour }: { tour: typeof tours[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${isHovered ? 'shadow-2xl -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#0066CC]" />
          <span className="text-sm font-medium text-[#1A2B3C]">{tour.duration}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-[#001B3D] mb-2">{tour.name}</h3>
        <p className="text-[#5A6B7C] mb-4">{tour.description}</p>
        
        <ul className="space-y-2 mb-6">
          {tour.highlights.map((highlight, i) => (
            <li key={i} className="flex items-center gap-2 text-[#1A2B3C]">
              <Check className="w-4 h-4 text-[#00B4D8]" />
              <span className="text-sm">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-3xl font-bold text-[#0066CC]">${tour.price}</span>
            <span className="text-[#5A6B7C] text-sm">/person</span>
          </div>
          <button 
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0066CC] hover:bg-[#004999] text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Tours Section
function ToursSection() {
  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-[#E6F3FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B4D8] font-semibold uppercase tracking-wider">Our Experiences</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001B3D] mt-2 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-[#5A6B7C] text-lg max-w-2xl mx-auto">
            From peaceful morning sails to action-packed full-day adventures, 
            we have the perfect sea experience waiting for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({
  product,
  onOpenSizeChart
}: {
  product: typeof products[0];
  onOpenSizeChart: () => void;
}) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product.sizes[0] !== 'One Size' && !selectedSize) {
      alert('Please select a size');
      return;
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        
        {/* IMAGE */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={product.images ? product.images[selectedColor] : product.image}
            alt={product.name}
            onClick={() => {
              setShowGallery(true);
              setCurrentIndex(0);
            }}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
          />

          <div className="absolute top-4 left-4 bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${product.price}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-[#001B3D] mb-2">
            {product.name}
          </h3>

          {/* COLOR */}
          <div className="mb-4">
            <span className="text-sm text-[#5A6B7C]">
              Color: {selectedColor}
            </span>

            <div className="flex gap-2 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded-full text-sm border-2 transition-all ${
                    selectedColor === color
                      ? 'border-[#0066CC] bg-[#E6F3FF] text-[#0066CC]'
                      : 'border-gray-200 text-[#5A6B7C] hover:border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#5A6B7C]">Size</span>

              {!([3, 6].includes(product.id)) && (
                <button
                  onClick={onOpenSizeChart}
                  className="text-sm text-[#0066CC] hover:underline flex items-center gap-1"
                >
                  <Ruler className="w-4 h-4" />
                  Size Chart
                </button>
              )}
            </div>

            {product.sizes[0] === 'One Size' ? (
              <button
                onClick={() => setSelectedSize('Standard')}
                className={`px-4 py-2 mt-2 rounded-lg border-2 text-sm font-semibold ${
                  selectedSize === 'Standard'
                    ? 'border-[#0066CC] bg-[#0066CC] text-white'
                    : 'border-gray-200 text-[#5A6B7C]'
                }`}
              >
                Standard
              </button>
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 rounded-lg border-2 text-sm font-semibold ${
                      selectedSize === size
                        ? 'border-[#0066CC] bg-[#0066CC] text-white'
                        : 'border-gray-200 text-[#5A6B7C]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* QUANTITY */}
          <div className="mb-6 flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 border rounded-lg flex items-center justify-center"
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="w-8 text-center font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 border rounded-lg flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-[#0066CC] text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-5 h-5" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* IMAGE GALLERY MODAL */}
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          <img
            src={
              product.images
                ? product.images[selectedColor]
                : product.image
              }
              alt={product.name}
              className="max-h-[80%] max-w-[90%] object-contain rounded-lg"

          />
        </div>
      )}
    </>
  );
}

// Merchandise Section
function MerchandiseSection({ onOpenSizeChart }: { onOpenSizeChart: () => void }) {
  return (
    <section id="merchandise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B4D8] font-semibold uppercase tracking-wider">Merchandise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001B3D] mt-2 mb-4">
            Wear the Adventure
          </h2>
          <p className="text-[#5A6B7C] text-lg max-w-2xl mx-auto">
            Rep your favorite sea tours with our premium apparel collection. 
            Quality gear for true ocean enthusiasts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onOpenSizeChart={onOpenSizeChart} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Size Chart Modal
function SizeChartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  if (!isOpen) return null;

  const data = sizeChartData[unit];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#E6F3FF] rounded-full flex items-center justify-center">
            <Ruler className="w-6 h-6 text-[#0066CC]" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#001B3D]">Size Chart</h3>
            <p className="text-[#5A6B7C] text-sm">Find your perfect fit</p>
          </div>
        </div>

        {/* Unit Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setUnit('inches')}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              unit === 'inches' 
                ? 'bg-[#0066CC] text-white' 
                : 'bg-gray-100 text-[#5A6B7C] hover:bg-gray-200'
            }`}
          >
            Inches
          </button>
          <button
            onClick={() => setUnit('cm')}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              unit === 'cm' 
                ? 'bg-[#0066CC] text-white' 
                : 'bg-gray-100 text-[#5A6B7C] hover:bg-gray-200'
            }`}
          >
            Centimeters
          </button>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E6F3FF]">
                {data.headers.map((header, i) => (
                  <th key={i} className="py-3 px-4 text-left text-sm font-semibold text-[#001B3D]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.sizes.map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 px-4 text-[#5A6B7C]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-[#5A6B7C] text-center">
          * Measurements may vary slightly. When in doubt, size up.
        </p>
      </div>
    </div>
  );
}

// Booking Section
function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    guests: 1,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-[#001B3D] to-[#0066CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-[#00B4D8] font-semibold uppercase tracking-wider">Book Your Trip</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Ready for Adventure?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Fill out the form and our team will get back to you within 24 hours 
              to confirm your booking and answer any questions.
            </p>

            <div className="space-y-4">
              {[
                { icon: Star, text: 'Free cancellation up to 48 hours before' },
                { icon: MapPin, text: 'Pickup from multiple locations' },
                { icon: Camera, text: 'Professional photos included' },
                { icon: Fish, text: 'Marine life guaranteed or money back' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00B4D8]" />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#001B3D] mb-2">Booking Received!</h3>
                <p className="text-[#5A6B7C]">We'll contact you shortly to confirm your adventure.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                      placeholder="Ahmed Ali"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                      placeholder="+92 311 3580199"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Tour</label>
                    <select
                      required
                      value={formData.tour}
                      onChange={(e) => setFormData({...formData, tour: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a tour</option>
                      <option value="morning">Morning Sail Adventure</option>
                      <option value="sunset">Sunset Cruise Experience</option>
                      <option value="full">Full Adventure Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Number of Guests</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A2B3C] mb-2">Special Requests</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all resize-none"
                    placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0066CC] hover:bg-[#004999] text-white py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Anchor className="w-5 h-5" />
                  Book My Adventure
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#E6F3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80"
              alt="Maris Adventures boat"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                
                <div>
                  <div className="font-semibold text-[#001B3D]">200+ Reviews</div>
                  <div className="flex text-yellow-400 text-sm">★★★★★ (4.5)</div>
                </div>
              </div>
              <p className="text-sm text-[#5A6B7C]">"Best ocean experience ever! The crew was amazing."</p>
            </div>
          </div>

          <div>
            <span className="text-[#00B4D8] font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001B3D] mt-2 mb-6">
              Our Story
            </h2>
            <p className="text-[#5A6B7C] text-lg mb-6">
              Founded in 2020 by a group of marine enthusiasts, Maris Adventures was born 
              from a simple dream: to share the magic of the ocean with the world.
            </p>
            <p className="text-[#5A6B7C] mb-8">
              With over 5 years of experience sailing these waters, our expert crew 
              knows every hidden cove, every dolphin route, every perfect sunset spot. 
              We're not just tour operators, we're stewards of the sea, committed to 
              sustainable tourism and marine conservation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '300+', label: 'Happy Guests' },
                { number: '100%', label: 'Safety Record' },
                { number: 'Eco', label: 'Certified' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#0066CC]">{stat.number}</div>
                  <div className="text-sm text-[#5A6B7C]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact/Footer Section
function Footer() {
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Tours', id: 'tours' },
    { name: 'Merchandise', id: 'merchandise' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <section id="contact" className="bg-[#001B3D] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#00B4D8] rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">Maris Adventures</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Your premier sea adventure partner. We create unforgettable ocean experiences 
              that combine thrill, beauty, and authentic marine encounters.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/70 hover:text-[#00B4D8] transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Jat Muhalla, Jacobabad, 79000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00B4D8]" />
                <span className="text-white/70">+92 (311) 3580199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00B4D8]" />
                <span className="text-white/70">@marisadventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 Maris Adventures. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'tours', 'merchandise', 'about', 'book', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar activeSection={activeSection} />
      <Hero />
      <ToursSection />
      <MerchandiseSection onOpenSizeChart={() => setIsSizeChartOpen(true)} />
      <AboutSection />
      <BookingSection />
      <Footer />
      <SizeChartModal isOpen={isSizeChartOpen} onClose={() => setIsSizeChartOpen(false)} />
    </div>
  );
}