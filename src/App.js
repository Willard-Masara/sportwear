
import './App.css';
import { useState } from 'react';

function App() {
  // State to store cart items and cart summary
  const [cart, setCart] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const items = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Astro Turf Boots",
      price: 350.99,
      description: "An adidas medium sized lime green ball bender of astro turf boots. Perfect for indoor play"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Premier League Ball",
      price: 150.00,
      description: "The perfect Premier League ball, one for the turf and the urban concrete!"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/774321/pexels-photo-774321.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Pele Era Nikey",
      price: 400.10,
      description: "The Pele era Nikey, featuring the lightness of your running shoes! Perfect even for the img fields in tier 6 football!"
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/94464752/photo/soccer-shoes-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=kB7bNGuMeJEj05WgKlqamNwxMBC0GhxMMywQ1RmsJA4=",
      name: "Santana Boot",
      price: 200.00,
      description: "The perfect football barracuda! Loved by all and sundry for its mean attitude."
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/92053543/photo/soccer-ball-and-cleats.jpg?b=1&s=612x612&w=0&k=20&c=nD1ABARCX3KtVuE7JnOP1DHE7bUv-kUBeCbomPAfJYo=",
      name: "Roller Boot",
      price: 300.00,
      description: "The Sunday league marauder! This is the work tool for all money games, it intimidates the opponent while remaining innocuous in effect!"
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/16639597/pexels-photo-16639597/free-photo-of-female-soccer-player-at-the-match.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Lauren Yellow Boots",
      price: 600.00,
      description: "The meanest feminine boot ever! Defies the odds by being unisex too! Big match day kicks."
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/16639587/pexels-photo-16639587/free-photo-of-a-female-goalkeeper-during-a-match.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sacramento Boot",
      price: 450.00,
      description: "Remember the Ronaldinho top bar ad? The perfect boot for the job, tight fitting and yet with enough circulation for those hard tackles!"
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/18256104/pexels-photo-18256104/free-photo-of-man-holding-a-sports-t-shirt-on-a-clothes-hanger.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Chelsea T-Shirt",
      price: 15.00,
      description: "The T-shirt for the Stamford bridge losers! Perfect for the day we beat them as Man Utd as nightwear! Very cheap."
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/4005312/pexels-photo-4005312.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Gold Boot",
      price: 300.00,
      description: "The perfect undented workhorse for the perfect grass cutter pass!"
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/13422993/pexels-photo-13422993.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Bender Boot",
      price: 900.00,
      description: "These air benders are the coolest you can get for this price! Spark that Messi magic with these and history will not forget you."
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/10923060/pexels-photo-10923060.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Scavenger Boot",
      price: 600.00,
      description: "The coldest kicks! For the perfect banana kick, the trivela!"
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/19882423/pexels-photo-19882423/free-photo-of-orange-and-gray-soccer-shoes.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "AnkleCover Boot",
      price: 1000.00,
      description: "The gripper! The master grass cutter, the pivot master! None beats these."
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/102448/pexels-photo-102448.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Mitre Ball",
      price: 200.00,
      description: "The perfect globe of dreams and for dreamers! This is the best buy."
    }
  ];

  // Function to add item to the cart
  const addToCart = (item) => {
    if (cart.length < 5) {
      setCart([...cart, item]);
      setErrorMessage('');
    } else {
      setErrorMessage("You cannot purchase more than 5 items, try TakeAlot. We are not wholesaling here!");
    }
  };

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.pexels.com/photos/3225889/pexels-photo-3225889.jpeg?auto=compress&cs=tinysrgb&w=600"  className="Home-Image" alt="girl"/>
        <p>Your home of sportswear! Buy till you drop.</p>
      </header>

      <div className="products">
        {items.map((item) => (
          <div key={item.id} className="product">
            <img src={item.img} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p>Price: R {item.price}</p>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: R {totalPrice}</p>
      </div>

      <div className="Footer">
        <footer>&reg; MASARA DEVS @ SPORTWEAR ONLINE SHOP 2024. Thank you for shopping with Us! Please Call Again.</footer>
      </div>
    </div>
  );
}

export default App;
