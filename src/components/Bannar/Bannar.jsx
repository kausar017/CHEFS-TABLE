import PropTypes from 'prop-types';

const Bannar = (props) => {
    return (
        <div>
            <div
                className="hero min-h-screen w-full  object-cover rounded-2xl"
                style={{ backgroundImage: "url(https://img.freepik.com/free-photo/close-up-person-cooking_23-2150980284.jpg?t=st=1729627669~exp=1729631269~hmac=7611609d152fe414946be14d2fe2abca70160cd2165b38a2cfc9a53ec04dbe9b&w=1380)" }}
            >
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-5xl ">
                        <h1 className="mb-5 text-5xl font-bold leading-[76px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 leading-[30px]">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className='space-x-3'>
                            <button className="btn rounded-full bg-[#0BE58A] border-none text-xl font-semibold px-4">Explore Now</button>
                            <button className="btn rounded-full text-xl bg-transparent text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// If you want to add props, you can modify PropTypes accordingly
Bannar.propTypes = {
    // Example of adding a prop if needed
    // imageUrl: PropTypes.string,
};

export default Bannar;
