
import Button from '../../../Components/Button/Button';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import useMenu from '../../../Hooks/useMenu'
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const {menu,refetch,isLoading} = useMenu();

  const popularItems = menu?.filter((item) => item?.category === "popular");


  if (isLoading) {
    return <p>loading..........</p>
  }
  return (
    <section className="px-4">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {popularItems?.length > 0 &&
          popularItems?.map((item) => <MenuItem key={item?._id} item={item} />)}
      </div>
      <Button text="View Full Menu" />
    </section>
  );
}



export default PopularMenu