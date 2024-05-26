import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import Cover from "../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from "../../assets/menu/salad-bg.jpg";


const Menu = () => {
  const {menu,isLoading} = useMenu();

    const desserts = menu?.filter((item) => item?.category === "dessert");
    const soup = menu?.filter((item) => item?.category === "soup");
    const salad = menu?.filter((item) => item?.category === "salad");
    const pizza = menu?.filter((item) => item?.category === "pizza");
    const offered = menu?.filter((item) => item?.category === "offered");


    if (isLoading) {
      return <p>Loading.................</p>
    }

  return (
    <div className="space-y-20">
      <DynamicTitle title="Menu" />
      <Cover img={menuImage} title="Our Menu" />
      <SectionTitle heading="Today's Offer" subHeading="Don't Miss" />

      {/* offered menu items */}
      <MenuCategory items={offered} />

      {/* dessert menu items */}
      <MenuCategory items={desserts} title="Desserts" coverImg={dessertImg} />

      {/* pizza menu items */}
      <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg} />

      {/* soup menu items */}
      <MenuCategory items={soup} title="Soup" coverImg={soupImg} />

      {/* salad menu items */}
      <MenuCategory items={salad} title="Salad" coverImg={saladImg} />
    </div>
  );
}

export default Menu