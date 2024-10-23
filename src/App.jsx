import { useState } from "react";
import Bannar from "./components/Bannar/Bannar";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {

  const [resipiQueue, setresipiQueue] = useState([]);
  const [preparRacipe, setpreparRacipe] = useState([]);
  const [totalTime, settotalTime] =useState(0)
  const [totalCalorie, setTotalCalorie] =useState(0)

  const handalResipi = resipi => {
    const isExits = resipiQueue.find(previousRecipe => previousRecipe.recipe_id === resipi.recipe_id)

    if (!isExits) {
      setresipiQueue([...resipiQueue, resipi])
    } else {
      alert('resipi allrady exsits in the queue')
    }
  }

  const handalRemove = id => {


    // find which recipe to remove
    const deletadRecipe = resipiQueue.find(recipe => recipe.recipe_id === id);


    //  remove frome want to cook table
    const updatedQueue = resipiQueue.filter(recipe => recipe.recipe_id !== id)
    setresipiQueue(updatedQueue)
    setpreparRacipe([...preparRacipe, deletadRecipe])

  }
const calculatTimeAndCalori = (time, Calorie) =>{
  settotalTime(totalTime + time)
  setTotalCalorie(totalCalorie + Calorie)
} 

  return (
    <div className="w-11/12 mx-auto">
      {/* header section */}
      <Header className="custom-header" />
      {/* bannar section */}
      <Bannar />
      {/* Our Recipes */}
      <Recipes />
      {/* Recipi cards section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* card section  */}
        <Recipe handalResipi={handalResipi} />
        {/* sidebar */}
        <Sidebar
         handalRemove={handalRemove} 
         resipiQueue={resipiQueue}
          preparRacipe={preparRacipe} 
          calculatTimeAndCalori={calculatTimeAndCalori}
          totalTime={totalTime}
          totalCalorie={totalCalorie}
          />
      </section>
    </div>
  );
};

export default App;
