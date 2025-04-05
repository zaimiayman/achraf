import { FaSearch, FaShoppingCart, FaStar, FaFilter, FaTimes } from 'react-icons/fa';
import { useState, useMemo, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img from '../assets/bg3.gif';

const PRODUCTS = [
  {
    id: 1,
    name: 'Écran iPhone 13 Pro',
    category: 'Écrans',
    price: 129.99,
    rating: 4.8,
    image: 'https://m.media-amazon.com/images/I/71KAZL6g9HL.jpg',
    stock: 15,
    isNew: true,
    description: 'Écran OLED original avec assemblage complet pour iPhone 13 Pro'
  },
  {
    id: 2,
    name: 'Batterie Samsung S21 Ultra',
    category: 'Batteries',
    price: 59.99,
    rating: 4.5,
    image: 'https://ae01.alicdn.com/kf/S0031670d41504dd6b90a0de536af105ab.jpg',
    stock: 8,
    isNew: false,
    description: 'Batterie originale de remplacement pour Samsung Galaxy S21 Ultra'
  },
  {
    id: 3,
    name: 'Kit Outils de Réparation',
    category: 'Accessoires',
    price: 39.99,
    rating: 4.9,
    image: 'https://m.media-amazon.com/images/I/91yKHhaKm2L._AC_SL1500_.jpg',
    stock: 22,
    isNew: true,
    description: 'Kit complet avec 56 outils pour réparations électroniques'
  },
  {
    id: 4,
    name: 'Câble USB-C Original',
    category: 'Câbles',
    price: 19.99,
    rating: 4.3,
    image: 'https://m.media-amazon.com/images/I/51y-THHETrL._AC_UF894,1000_QL80_.jpg',
    stock: 30,
    isNew: false,
    description: 'Câble USB-C 2m certifié avec charge rapide'
  },
  {
    id: 5,
    name: 'Écran iPad Pro 12.9"',
    category: 'Écrans',
    price: 249.99,
    rating: 4.7,
    image: 'https://www.zoneaffaire.com/wp-content/uploads/2022/04/Protecteur-decran-JETech-pour-iPad-Pro-129-Pouces-2021-2020-2018-5eme-4eme-3eme-Modele-Ecran-Retina-Liquide-Bord-a-Bord-Compatible-Face-ID-Film-en-Verre-Trempe.jpg',
    stock: 5,
    isNew: true,
    description: 'Écran Retina pour iPad Pro 12.9" avec vitre trempée'
  },
  {
    id: 6,
    name: 'Batterie MacBook Pro 15"',
    category: 'Batteries',
    price: 149.99,
    rating: 4.6,
    image: 'https://res.cloudinary.com/subtel/image/upload/h_600/q_auto:low,f_auto/lgsyif5iswizgmoqluxx.jpg',
    stock: 3,
    isNew: false,
    description: 'Batterie originale pour MacBook Pro 15" (2015-2019)'
  },
  {
    id: 7,
    name: 'Ventilateur MacBook Air M1',
    category: 'Composants',
    price: 79.99,
    rating: 4.4,
    image: 'https://cdn.mgig.fr/2020/11/mg-77697727-w4096.jpg',
    stock: 4,
    isNew: false,
    description: 'Système de refroidissement complet pour MacBook Air M1'
  },
  {
    id: 8,
    name: 'Webcam 4K pour PC/Mac',
    category: 'Accessoires',
    price: 89.99,
    rating: 4.5,
    image: 'https://www.cdiscount.com/pdt2/2/9/6/1/700x700/1230732742590296/rw/webcam-hd-1080p-avec-eclairage-annulaire-camera-p.jpg',
    stock: 10,
    isNew: true,
    description: 'Webcam Ultra HD avec micro intégré et éclairage LED'
  },
  {
    id: 9,
    name: 'Écran Samsung Galaxy S22 Ultra',
    category: 'Écrans',
    price: 179.99,
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/71l8DuznGYL.jpg',
    stock: 10,
    isNew: true,
    description: 'Écran AMOLED original pour Samsung Galaxy S22 Ultra'
  },
  {
    id: 10,
    name: 'Batterie iPhone 12 Pro Max',
    category: 'Batteries',
    price: 49.99,
    rating: 4.4,
    image: 'https://cdn.tout-pour-phone.com/44930-large_default/batterie-iphone-12-12-pro-haute-capacite-3240-mah.jpg',
    stock: 12,
    isNew: false,
    description: 'Batterie de remplacement haute capacité pour iPhone 12 Pro Max'
  },
  {
    id: 11,
    name: 'Chargeur Sans Fil Qi',
    category: 'Accessoires',
    price: 29.99,
    rating: 4.2,
    image: 'https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_1_5_6_1_700x700_SDL0682601032156_1.jpg',
    stock: 25,
    isNew: true,
    description: 'Chargeur sans fil 15W compatible avec tous les appareils Qi'
  },
  {
    id: 12,
    name: 'Câble Lightning Original',
    category: 'Câbles',
    price: 24.99,
    rating: 4.5,
    image: 'https://www.marjanemall.ma/media/catalog/product/cache/30e3cd03e34ce9a3177a297ef581b503/_/p/_pdt2_7_0_1_1_700x700_aut7233222322701_rw_lot-de-2-cable-usb-c-vers-lightning-certifie-apple.jpg',
    stock: 18,
    isNew: false,
    description: 'Câble Lightning Apple original 1m avec certification MFi'
  },
  {
    id: 13,
    name: 'Écran Huawei P40 Pro',
    category: 'Écrans',
    price: 159.99,
    rating: 4.6,
    image: 'https://img.myipadbox.com/upload/store/product_l/SPS0476S.jpg',
    stock: 7,
    isNew: false,
    description: 'Écran OLED complet pour Huawei P40 Pro avec cadre'
  },
  {
    id: 14,
    name: 'Batterie Dell XPS 15',
    category: 'Batteries',
    price: 119.99,
    rating: 4.3,
    image: 'https://www.ipc-computer.fr/largeimage/Batterie-97Wh-original-6-cellules--GPM03-6GTPY--pour-Dell-XPS-15--9570--pId-32964679_2.jpg',
    stock: 4,
    isNew: true,
    description: 'Batterie originale 97Wh pour Dell XPS 15 9500'
  },
  {
    id: 15,
    name: 'Kit Nettoyage Électronique',
    category: 'Accessoires',
    price: 19.99,
    rating: 4.8,
    image: 'https://photocom.ma/wp-content/uploads/2022/05/1.jpg.webp',
    stock: 30,
    isNew: true,
    description: 'Kit de nettoyage professionnel pour appareils électroniques'
  },
  {
    id: 16,
    name: 'Câble HDMI 4K 2m',
    category: 'Câbles',
    price: 14.99,
    rating: 4.6,
    image: 'https://www.cdiscount.com/pdt2/3/0/4/1/700x700/sss1707551874304/rw/cable-hdmi-4k-5m-haute-vitesse-60hz-18gbps-nylon.jpg',
    stock: 22,
    isNew: false,
    description: 'Câble HDMI haute vitesse 18Gbps support 4K@60Hz'
  },
  {
    id: 17,
    name: 'Écran OnePlus 9 Pro',
    category: 'Écrans',
    price: 169.99,
    rating: 4.5,
    image: 'https://ae01.alicdn.com/kf/S99825a7ed1ed43e29f279aa6917b3d352.jpg_640x640q90.jpg',
    stock: 6,
    isNew: true,
    description: 'Écran Fluid AMOLED 120Hz complet pour OnePlus 9 Pro'
  },
  {
    id: 18,
    name: 'Batterie ASUS ROG Zephyrus',
    category: 'Batteries',
    price: 139.99,
    rating: 4.4,
    image: 'https://www.ipc-computer.fr/largeimage/Batterie-76Wh-original-pour-Asus-ROG-Zephyrus-S-GX502GW-pId-45909488.jpg',
    stock: 3,
    isNew: false,
    description: 'Batterie 76Wh pour ASUS ROG Zephyrus G14'
  },
  {
    id: 19,
    name: 'Station de Soudage',
    category: 'Accessoires',
    price: 89.99,
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/71bftLf00jL._AC_UF1000,1000_QL80_.jpg',
    stock: 9,
    isNew: true,
    description: 'Station de soudage numérique 60W avec contrôle de température'
  },
  {
    id: 20,
    name: 'Câble Thunderbolt 3',
    category: 'Câbles',
    price: 34.99,
    rating: 4.8,
    image: 'https://images-cdn.ubuy.co.in/64e67ca25ee71726522a8684-cable-matters-thunderbolt-4-cable-3-3.jpg',
    stock: 15,
    isNew: true,
    description: 'Câble Thunderbolt 3 certifié Intel 40Gbps 1m'
  },
  {
    id: 21,
    name: 'Écran Google Pixel 6 Pro',
    category: 'Écrans',
    price: 149.99,
    rating: 4.6,
    image: 'https://www.ubuy.ma/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjE5VGhHbDJRWkwuX1NTNDAwXy5qcGc.jpg',
    stock: 8,
    isNew: true,
    description: 'Écran LTPO OLED 120Hz pour Google Pixel 6 Pro'
  },
  {
    id: 22,
    name: 'Batterie Lenovo ThinkPad X1',
    category: 'Batteries',
    price: 109.99,
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61SuiH-bWmL.jpg',
    stock: 5,
    isNew: false,
    description: 'Batterie originale 57Wh pour Lenovo ThinkPad X1 Carbon'
  },
  {
    id: 23,
    name: 'Pince à Epiler de Précision',
    category: 'Accessoires',
    price: 12.99,
    rating: 4.9,
    image: 'https://www.cdiscount.com/pdt2/3/5/7/1/700x700/auc1701871968357/rw/anti-statique-9-pcs-pincettes-de-precision-outils.jpg',
    stock: 40,
    isNew: false,
    description: 'Pince à épiler anti-statique pour réparation électronique'
  },
  {
    id: 24,
    name: 'Adaptateur USB-C vers HDMI',
    category: 'Câbles',
    price: 22.99,
    rating: 4.3,
    image: 'https://m.media-amazon.com/images/I/51v8KLgYTmL._AC_UF894,1000_QL80_.jpg',
    stock: 20,
    isNew: true,
    description: 'Adaptateur 4K 60Hz pour MacBook, iPad Pro et appareils USB-C'
  },
  {
    id: 25,
    name: 'Écran Xiaomi Mi 11 Ultra',
    category: 'Écrans',
    price: 189.99,
    rating: 4.7,
    image: 'https://i01.appmifile.com/webfile/globalimg/gaobiyun/cellphone_800/k1-Black-800.png',
    stock: 4,
    isNew: true,
    description: 'Écran AMOLED WQHD+ 120Hz pour Xiaomi Mi 11 Ultra'
  },
  {
    id: 26,
    name: 'Batterie HP Spectre x360',
    category: 'Batteries',
    price: 129.99,
    rating: 4.4,
    image: 'https://i.ebayimg.com/images/g/Z0gAAOSwO3tkmAn3/s-l1200.jpg',
    stock: 6,
    isNew: false,
    description: 'Batterie originale 72Wh pour HP Spectre x360 15'
  },
  {
    id: 27,
    name: 'Microscope Numérique USB',
    category: 'Accessoires',
    price: 59.99,
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/715LQolix1L._AC_SL1500_.jpg',
    stock: 12,
    isNew: true,
    description: 'Microscope 1000x avec caméra pour inspection électronique'
  },
  {
    id: 28,
    name: 'Câble Ethernet CAT8',
    category: 'Câbles',
    price: 29.99,
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/71SGbe-YBTL.jpg',
    stock: 18,
    isNew: true,
    description: 'Câble réseau CAT8 40Gbps 2m blindé pour gaming et data centers'
  }

];

const CATEGORIES = ['Tous', 'Écrans', 'Batteries', 'Accessoires', 'Câbles'];

const SORT_OPTIONS = [
  { value: 'popularité', label: 'Popularité' },
  { value: 'note', label: 'Meilleures notes' },
  { value: 'prix-croissant', label: 'Prix croissant' },
  { value: 'prix-decroissant', label: 'Prix décroissant' }
];

const StorePage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('popularité');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = useMemo(() => {
    return PRODUCTS
      .filter(product => 
        activeCategory === 'Tous' || product.category === activeCategory
      )
      .filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
      )
      .filter(product => 
        !inStockOnly || product.stock > 0
      )
      .filter(product =>
        !newOnly || product.isNew
      )
      .filter(product =>
        ratingFilter.length === 0 || ratingFilter.some(r => Math.floor(product.rating) >= r)
      )
      .sort((a, b) => {
        if (sortBy === 'prix-croissant') return a.price - b.price;
        if (sortBy === 'prix-decroissant') return b.price - a.price;
        if (sortBy === 'note') return b.rating - a.rating;
        return b.rating - a.rating;
      });
  }, [activeCategory, searchTerm, priceRange, sortBy, inStockOnly, newOnly, ratingFilter]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handlePriceRangeChange = useCallback((index, value) => {
    const newValue = Math.max(0, Math.min(1000, Number(value) || 0));
    const newPriceRange = [...priceRange];
    newPriceRange[index] = newValue;
    
    if (index === 0 && newValue > priceRange[1]) {
      newPriceRange[1] = newValue;
    } else if (index === 1 && newValue < priceRange[0]) {
      newPriceRange[0] = newValue;
    }
    
    setPriceRange(newPriceRange);
  }, [priceRange]);

  const toggleRatingFilter = useCallback((rating) => {
    setRatingFilter(prev => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating) 
        : [...prev, rating]
    );
  }, []);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  const openProductModal = useCallback((product) => {
    setSelectedProduct(product);
    setQuantity(1);
  }, []);

  const closeProductModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const resetFilters = useCallback(() => {
    setActiveCategory('Tous');
    setSearchTerm('');
    setPriceRange([0, 1000]);
    setInStockOnly(false);
    setNewOnly(false);
    setRatingFilter([]);
  }, []);

  const addToCart = useCallback((product, qty = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: qty }];
      }
    });
    
    toast.success(`${product.name} ajouté au panier`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.info('Produit retiré du panier');
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" id='stor'>
      <ToastContainer />
      
      <header 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setShowCart(true)}
              className="relative p-2 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Voir le panier"
            >
              <FaShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Boutique de Pièces Détachées</h1>
          <p className="text-lg md:text-xl mb-8">Pièces originales et accessoires de qualité pour toutes vos réparations</p>
          
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Rechercher des produits..."
              className="w-full py-3 px-5 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Rechercher des produits"
            />
            <FaSearch className="absolute right-5 top-3.5 text-gray-500 text-lg" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section aria-labelledby="filter-heading" className="mb-8">
          <h2 id="filter-heading" className="sr-only">Filtres et catégories</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div role="tablist" className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50"
                onClick={toggleFilters}
                aria-expanded={showFilters}
                aria-controls="mobile-filters"
              >
                <FaFilter /> Filtres
              </button>

              <div className="flex items-center gap-2">
                <label htmlFor="sort-select" className="text-gray-600 sr-only md:not-sr-only">
                  Trier par :
                </label>
                <select 
                  id="sort-select"
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Options de tri"
                >
                  {SORT_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {showFilters && (
            <div 
              id="mobile-filters"
              className="bg-white p-6 rounded-lg shadow-md mt-4 md:hidden"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filtres</h3>
                <button 
                  onClick={toggleFilters}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Fermer les filtres"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Fourchette de prix</label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="number" 
                      min="0"
                      max="1000"
                      value={priceRange[0]} 
                      onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                      className="w-24 px-3 py-2 border border-gray-300 rounded shadow-sm"
                      aria-label="Prix minimum"
                    />
                    <span className="text-gray-500">à</span>
                    <input 
                      type="number" 
                      min={priceRange[0]}
                      max="1000"
                      value={priceRange[1]} 
                      onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                      className="w-24 px-3 py-2 border border-gray-300 rounded shadow-sm"
                      aria-label="Prix maximum"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Disponibilité</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-blue-600 focus:ring-blue-500" 
                        checked={inStockOnly}
                        onChange={() => setInStockOnly(!inStockOnly)}
                      />
                      En stock seulement
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-blue-600 focus:ring-blue-500" 
                        checked={newOnly}
                        onChange={() => setNewOnly(!newOnly)}
                      />
                      Nouveautés seulement
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Notes minimum</label>
                  <div className="space-y-2">
                    {[5, 4, 3].map(rating => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-blue-600 focus:ring-blue-500"
                          checked={ratingFilter.includes(rating)}
                          onChange={() => toggleRatingFilter(rating)}
                        />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-1">{rating}+</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">Produits</h2>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <article 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {product.isNew && (
                      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        Nouveau
                      </span>
                    )}
                    <div className="absolute bottom-2 left-2 bg-yellow-400 text-gray-900 text-sm font-bold px-2 py-1 rounded flex items-center shadow-sm">
                      <FaStar className="mr-1" /> {product.rating}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                    <div className="mt-auto">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-blue-600 text-xl">
                          {product.price.toFixed(2)}€
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          product.stock < 5 
                            ? 'bg-red-100 text-red-800' 
                            : product.stock < 10 
                              ? 'bg-orange-100 text-orange-800' 
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {product.stock < 5 
                            ? `Stock critique (${product.stock})` 
                            : product.stock < 10 
                              ? `Stock limité (${product.stock})` 
                              : 'En stock'}
                        </span>
                      </div>
                      <button 
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                        onClick={() => addToCart(product)}
                        aria-label={`Ajouter ${product.name} au panier`}
                      >
                        <FaShoppingCart /> Ajouter au panier
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-700 mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-500 mb-4">Essayez de modifier vos critères de recherche</p>
                <button 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  onClick={resetFilters}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      {showFilters && (
        <aside 
          className={`hidden md:block fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 transition-transform duration-300 z-10 ${
            showFilters ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Filtres de produits"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Filtres</h3>
            <button 
              onClick={toggleFilters}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fermer les filtres"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Fourchette de prix</h4>
              <div className="flex items-center gap-3 mb-2">
                <input 
                  type="number" 
                  min="0"
                  max="1000"
                  value={priceRange[0]} 
                  onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded shadow-sm"
                  aria-label="Prix minimum"
                />
                <span className="text-gray-500">à</span>
                <input 
                  type="number" 
                  min={priceRange[0]}
                  max="1000"
                  value={priceRange[1]} 
                  onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded shadow-sm"
                  aria-label="Prix maximum"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Disponibilité</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="rounded text-blue-600 focus:ring-blue-500" 
                    checked={inStockOnly}
                    onChange={() => setInStockOnly(!inStockOnly)}
                  />
                  En stock seulement
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="rounded text-blue-600 focus:ring-blue-500" 
                    checked={newOnly}
                    onChange={() => setNewOnly(!newOnly)}
                  />
                  Nouveautés seulement
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Notes minimum</h4>
              <div className="space-y-2">
                {[5, 4, 3].map(rating => (
                  <label key={rating} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded text-blue-600 focus:ring-blue-500"
                      checked={ratingFilter.includes(rating)}
                      onChange={() => toggleRatingFilter(rating)}
                    />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">{rating}+</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button 
                  onClick={closeProductModal}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Fermer"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">{selectedProduct.rating}/5</span>
                  </div>
                  
                  <p className="text-gray-800 mb-4">{selectedProduct.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {selectedProduct.price.toFixed(2)}€
                      </span>
                      <span className={`text-sm font-medium px-2 py-1 rounded ${
                        selectedProduct.stock < 5 
                          ? 'bg-red-100 text-red-800' 
                          : selectedProduct.stock < 10 
                            ? 'bg-orange-100 text-orange-800' 
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {selectedProduct.stock < 5 
                          ? `Stock critique (${selectedProduct.stock})` 
                          : selectedProduct.stock < 10 
                            ? `Stock limité (${selectedProduct.stock})` 
                            : 'En stock'}
                      </span>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button 
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          aria-label="Réduire la quantité"
                        >
                          -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button 
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          onClick={() => setQuantity(quantity + 1)}
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="flex-grow bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                        onClick={() => {
                          addToCart(selectedProduct, quantity);
                          closeProductModal();
                        }}
                        aria-label="Ajouter au panier"
                      >
                        <FaShoppingCart /> Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Votre Panier</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Fermer le panier"
                >
                  <FaTimes />
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Votre panier est vide</p>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Continuer vos achats
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-4 divide-y">
                    {cart.map(item => (
                      <div key={item.id} className="pt-4 first:pt-0">
                        <div className="flex gap-4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-grow">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-gray-600 text-sm">{item.price.toFixed(2)}€</p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                <button 
                                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  aria-label="Réduire la quantité"
                                >
                                  -
                                </button>
                                <span className="px-3">{item.quantity}</span>
                                <button 
                                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  aria-label="Augmenter la quantité"
                                >
                                  +
                                </button>
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                                aria-label="Supprimer du panier"
                              >
                                Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg mb-6">
                      <span>Total</span>
                      <span>{cartTotal.toFixed(2)}€</span>
                    </div>
                    
                    <button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm"
                      onClick={() => {
                        toast.success('Commande passée avec succès!');
                        setCart([]);
                        setShowCart(false);
                      }}
                    >
                      Passer la commande
                    </button>
                    
                    <button 
                      onClick={() => setShowCart(false)}
                      className="w-full mt-2 text-blue-600 hover:text-blue-800 font-medium py-2"
                    >
                      Continuer vos achats
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;