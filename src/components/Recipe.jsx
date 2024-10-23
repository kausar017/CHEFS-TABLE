import { useEffect } from "react";
import { useState } from "react";



const Recipe = ({ handalResipi }) => {

    const [resipe, setresipe] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setresipe(data))
        // .catch(error => console.log(error))

    }, []);
    // console.log(resipe);


    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    resipe.map((resipe, index) =>
                        <div key={index} className=" rounded-xl bg-base-100 p-3 border-2">
                            <figure>
                                <img className="rounded-xl md:h-80 w-full object-cover"
                                    src={resipe.image}
                                    alt="resipe_image" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{resipe.recipe_name}</h2>
                                <p>{resipe.short_description}</p>
                                <div className="divider"></div>
                                <h2 className="text-xl font-semibold">Ingredients: {resipe.ingredients.length}</h2>
                                <ul className="text-gray-500 list-disc ml-5 mb-4">
                                    {
                                        resipe.ingredients.map((items, index) => <li key={index}>{items}</li>)
                                    }
                                </ul>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <i className="fa-regular fa-clock"></i>
                                        <p>{resipe.preparing_time}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-fire-flame-curved"></i>
                                        <p>{resipe.calories}</p>
                                    </div>

                                </div>
                                <div className="card-actions">
                                    <button onClick={() => handalResipi(resipe)} className="btn bg-[#0BE58A] px-[24px] rounded-full text-lg text-gray-800">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Recipe;