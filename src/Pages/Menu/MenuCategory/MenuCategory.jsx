import PropTypes from 'prop-types'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div className='space-y-10'>
     {title && <Cover img={coverImg} title={title} />}
      <div className="grid grid-cols-1 gap-7 px-4 lg:px-0 md:grid-cols-2">
        {items?.length > 0 &&
          items?.map((item) => <MenuItem key={item?._id} item={item} />)}
      </div>
    </div>
  );
}

MenuCategory.propTypes = {
    items:PropTypes.array.isRequired,
    title:PropTypes.string.isRequired,
    coverImg:PropTypes.string.isRequired,
}

export default MenuCategory