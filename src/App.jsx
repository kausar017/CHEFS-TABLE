import Bannar from "./components/Bannar/Bannar";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  return (
    <div className="w-11/12 mx-auto">
        <Header className="custom-header" />
        <Bannar />
        <Recipes></Recipes>
    </div>
  );
};

export default App;
