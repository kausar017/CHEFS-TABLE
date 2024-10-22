
import PropTypes from 'prop-types';

const Recipes = () => {
    return (
        <div className='text-center mt-[100px] mb-[50px] space-y-6'>
            <h1 className='text-5xl font-bold'>Our Recipes</h1>
            <p className='w-[823px] mx-auto leading-[30px] font-bold text-gray-700'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
    );
};

Recipes.propTypes = {
    Recipes: PropTypes.string
};

export default Recipes;