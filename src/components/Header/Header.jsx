import PropTypes from 'prop-types';

const Header = ({ className }) => {
    return (
        <div className={className}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 text-gray-700 font-bold rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="text-4xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3 ">
                    <input className='p-3 rounded-full bg-gray-100 max-sm:hidden lg:block md:block' type="search" name="" id="" placeholder='Search' />
                    <a className="text-4xl bg-[#0BE58A] rounded-full p-2 cursor-pointer"><i class="fa-regular fa-circle-user"></i></a>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
