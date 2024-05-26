import PropTypes from 'prop-types'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='md:w-4/12 mx-auto text-center mb-8'>
        <p className='text-yellow-500'>--- {subHeading} ---</p>
        <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
    </div>
  )
}

SectionTitle.propTypes = {
    heading:PropTypes.string.isRequired,
   subHeading:PropTypes.string.isRequired,
}

export default SectionTitle