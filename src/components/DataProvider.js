import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: '1',
      title: 'ZNE KN PLS CVUP',
      images: [
        'https://images.pexels.com/photos/789812/pexels-photo-789812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1035685/pexels-photo-1035685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      description: "WOMEN'S ADIDAS NOT SPORTS SPECIFIC ZNE KN PLS CVUP JACKET",
      content:
        "The adidas Z.N.E. collection was designed to provide premium comfort to athletes as they go from the street to the game. This women's cover-up is made of a soft wool-blend knit that has a pattern inspired by the heartbeats of athletes.",
      price: 101,
      count: 1,
    },
    {
      _id: '2',
      title: "MEN'S ADIDAS SPORT INSPIRED LITE RACER CLN SHOES",
      images: [
        'https://images.pexels.com/photos/4211339/pexels-photo-4211339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/4723006/pexels-photo-4723006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/4233114/pexels-photo-4233114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1456738/pexels-photo-1456738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      description: "MEN'S ADIDAS SPORT INSPIRED LITE RACER CLN SHOES",
      content:
        'Designed with sleek lines for a minimalist look, these shoes have a light and breathable mesh upper. Pillowy cushioning delivers comfort that lasts all day.',
      price: 102,
      count: 1,
    },
    {
      _id: '3',
      title: 'Sweater',
      images: [
        'https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1580457/pexels-photo-1580457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1030926/pexels-photo-1030926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1097781/pexels-photo-1097781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      description: 'Drop Shoulder V Neck Oversized Sweater',
      content:
        'Care Instructions : machine wash or hand wash Occasion : party , outing , casual,festival,Manufactured/Importe, 100% quality product,easy return & exchange',
      price: 103,
      count: 1,
    },
    {
      _id: '4',
      title: ' Blue Jeans',
      images: [
        'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      description:
        'Redefine your off-duty look in these blue jeans from Peter England Jeans by Peter England and look stylish wherever you go.',
      content:
        'Redefine your off-duty look in these blue jeans from Peter England Jeans by Peter England and look stylish wherever you go.Redefine your off-duty look in these blue jeans from Peter England Jeans by Peter England and look stylish wherever you go.',
      price: 104,
      count: 1,
    },
    {
      _id: '5',
      title: "MEN'S ADIDAS VRCT JACKET",
      images: [
        'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
      description:
        "A sleek jacket that encourages personal expression. Wear it with pride. Long an athlet's jackets",
      content:
        "A sleek jacket that encourages personal expression. Wear it with pride. Long an athlete's showcase of achievement, the adidas VRCT Jacket updates the long-standing tradition of classic collegiate jackets",
      price: 105,
      count: 1,
    },
    {
      _id: '6',
      title: 'Embellished Gown Dress with Dupatta',
      images: [
        'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],

      description: 'Redefine your off-duty look in this',
      content:
        'Easy 30 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, ',
      price: 106,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert('The product has been added to cart.');
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
