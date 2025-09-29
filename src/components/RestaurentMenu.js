import { useEffect, useState } from 'react';

const RestaurentMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=11091");
    const json = await data.json();
    console.log(json);
    setMenu(json);
  };

  const menuItems = menu?.data?.cards?.find(card => card.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div>
      <h1>Restaurant Menu</h1>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <h2>{item?.card?.info?.name}</h2>
              <p>Price: {item?.card?.info?.price / 100}</p>
              <p>Description: {item?.card?.info?.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestaurentMenu;

