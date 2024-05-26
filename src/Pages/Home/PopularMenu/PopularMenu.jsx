import PropTypes from 'prop-types'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import useMenu from '../../../Hooks/useMenu'

const PopularMenu = () => {
  const {menu,refetch,isLoading} = useMenu();
  console.log(menu);
  return (
    <div>
        <SectionTitle heading='From Our Menu' subHeading='Popular Items' />
    </div>
  )
}

PopularMenu.propTypes = {}

export default PopularMenu