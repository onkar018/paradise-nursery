import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/CartSlice.jsx';

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        price: 18,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        price: 24,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        price: 15,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        price: 32,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        price: 21,
        image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        price: 16,
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'Low Maintenance Plants',
    plants: [
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        price: 26,
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'pothos',
        name: 'Golden Pothos',
        price: 17,
        image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        price: 19,
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'ponytail-palm',
        name: 'Ponytail Palm',
        price: 29,
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'cast-iron-plant',
        name: 'Cast Iron Plant',
        price: 28,
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'haworthia',
        name: 'Haworthia',
        price: 12,
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'Colorful Statement Plants',
    plants: [
      {
        id: 'calathea',
        name: 'Calathea Medallion',
        price: 31,
        image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'croton',
        name: 'Croton Petra',
        price: 23,
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'pink-princess',
        name: 'Pink Princess Philodendron',
        price: 48,
        image: 'https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'anthurium',
        name: 'Red Anthurium',
        price: 27,
        image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'purple-oxalis',
        name: 'Purple Oxalis',
        price: 20,
        image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'fittonia',
        name: 'Nerve Plant',
        price: 14,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItemIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-shell product-page">
      <section className="page-intro">
        <p className="eyebrow">Shop the greenhouse</p>
        <h1>Houseplants for Every Home</h1>
        <p>
          Browse curated indoor plants by care style and personality. Add your
          favorites to the cart, then keep exploring.
        </p>
      </section>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = cartItemIds.has(plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-body">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-button"
                      disabled={isAdded}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
