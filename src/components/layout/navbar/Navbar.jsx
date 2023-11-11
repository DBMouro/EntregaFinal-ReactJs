import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/de6vdxrs6/image/upload/v1695675045/Logo_ez7syb.png"
            width={100}
            alt={"Logo"}
          />
        </Link>
        <ul className="categories">
          <Link to={"/"}>
            <li>Todas</li>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} to={category.path}>
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
