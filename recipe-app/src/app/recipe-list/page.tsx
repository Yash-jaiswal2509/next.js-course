import RecipeList from "@/components/recipe-list";

async function fetchRecipeLsit(){
    try {
        const response  = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey');
    } catch (error) {
        console.error(error);   
    }
}

const page = async () => {
  return <RecipeList />;
};

export default page;
