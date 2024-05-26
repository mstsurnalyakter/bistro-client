import PropTypes from 'prop-types'
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items?.length > 0 &&
        items?.map((item) => <FoodCard item={item} key={item?._id} />)}
    </div>
  );
}

OrderTab.propTypes = {
  items:PropTypes.array.isRequired
};

export default OrderTab