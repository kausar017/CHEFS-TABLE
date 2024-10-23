import Bannar from "./components/Bannar/Bannar";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
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
        <Recipe />
        {/* sidebar */}
        <Sidebar />
      </section>
    </div>
  );
};

export default App;
