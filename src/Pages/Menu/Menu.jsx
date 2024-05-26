import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import Cover from "../Shared/Cover/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <DynamicTitle title="Menu" />
      <Cover img={menuImage} title='Our Menu' />
      <PopularMenu/>
    </div>
  );
}

export default Menu