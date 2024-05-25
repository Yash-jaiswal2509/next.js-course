import RecipeItemDetails from "@/components/recipe-details";

async function RecipeDetailsFetch(currentRecipeId: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const result = await response.json();
    console.log(result);
    
    return result;
  } catch (error) {
    console.error(error);
  }
}

const RecipeDetails = async ({ params }: { params: { details: string } }) => {
  const getRecipeDetails = await RecipeDetailsFetch(params?.details);
  return <RecipeItemDetails getRecipeDetails={getRecipeDetails} />;
};

export default RecipeDetails;
