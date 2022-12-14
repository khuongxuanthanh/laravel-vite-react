import FeatProd from './FeatProd'

const data = {
  products: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 5,
      imageUrl:
        "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=1024&wid=1024&qlt=95",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 6,
      imageUrl:
        "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=1024&wid=1024&qlt=95",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 7,
      imageUrl:
        "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=1024&wid=1024&qlt=95",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 8,
      imageUrl:
        "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=1024&wid=1024&qlt=95",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 9,
      imageUrl:
        "https://www.helikon-tex.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 10,
      imageUrl:
        "https://www.helikon-tex.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 11,
      imageUrl:
        "https://www.helikon-tex.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
    {
      id: 12,
      imageUrl:
        "https://www.helikon-tex.com/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
      name: "limited edition sports trainer",
      price: 189.99,
      description: "",
      colors: ["blue", "red", "green", "gray", "white"],
      status: "NEW",
      category: "trainers",
    },
  ],
  greeting: "hello",
};

const categories = ["trainers"];

const FeatProdList = () => {
  return (
    <>
      {categories.map((category) => {
        const productsByCategory = data.products.filter(
          (product) => product.category === category
        );

        return (
          <FeatProd
            key={category}
            category={category}
            products={productsByCategory}
          />
        );
      })}
    </>
  );
};

export default FeatProdList;