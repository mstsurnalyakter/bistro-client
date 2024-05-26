
import PropTypes from 'prop-types'

const Button = ({text}) => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <button className="btn border-0 border-b-4 border-[#9505fc]">
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
    text:PropTypes.string.isRequired
}

export default Button