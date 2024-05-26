import PropTypes from 'prop-types'
import Button from '../Button/Button';

const FoodCard = ({item}) => {
       const { name, image, price, recipe } = item || {};
  return (
    <div className="card border-2 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="bg-[#9505fc] absolute right-0 px-4 py-1 mt-4 mr-4 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        {/* <div className="mt-10 flex items-center justify-center">
          <button className="btn border-0 border-b-4 border-[#9505fc]">
            Add to Cart
          </button>
        </div> */}
        <Button text="Add to Cart" />
      </div>
    </div>
  );
}


FoodCard.propTypes = {
    item:PropTypes.object.isRequired
};

export default FoodCard
