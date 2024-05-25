import RecipeList from "@/components/recipe-list";

async function fetchRecipeList() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const result = await response.json();
    return result?.recipes;
  } catch (error) {
    console.error(error);
  }
}

const page = async() => {
  const recipeList = await fetchRecipeList();
  return <RecipeList recipeList={recipeList} />;
};

export default page;
