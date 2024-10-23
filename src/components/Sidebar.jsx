

const Sidebar = ({ resipiQueue, handalRemove, preparRacipe, calculatTimeAndCalori, totalTime, totalCalorie}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-xl">
            <h1 className="text-center text-2xl font-bold py-4">Want to cook: {resipiQueue.length}</h1>
            <hr className="max-w-[350px] mx-auto" />
            <div className="text-gray-600">
                {/* want to cock table */}
                <div className="overflow-x-auto ">
                    <table className="table md:table-xm max-md:table-xs">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                resipiQueue.map((recipe, index) =>
                                    <tr className="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time} min</td>
                                        <td>{recipe.calories} Calories</td>
                                        <button onClick={() => {
                                            handalRemove(recipe.recipe_id)
                                            calculatTimeAndCalori(recipe.preparing_time, recipe.calories)
                                        }} className="btn btn-sm bg-[#0BE58A] text-sm  rounded-full">Preparing</button>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

                {/* Currently cooking Table */}
                <h1 className="text-center text-2xl font-bold py-4">Currently cooking:{preparRacipe.length}</h1>
                <div className="divider"></div>

                <div className="overflow-x-auto ">
                    <table className="table md:table-xm max-md:table-xs">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                preparRacipe.map((recipe, index) =>
                                    <tr className="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time} min</td>
                                        <td>{recipe.calories} Calories</td>
                                    </tr>

                                )

                            }
                            <tr className="border-none">
                                <th></th>
                                <td></td>
                                <td>Time= {totalTime} min</td>
                                <td>Total Calories= {totalCalorie} Calorie</td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default Sidebar;