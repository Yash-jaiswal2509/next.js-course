import Image from "next/image";

const RecipeItemDetails = ({ getRecipeDetails }: any) => {
  return (
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <Image
          src={getRecipeDetails.image}
          alt={getRecipeDetails.name}
          height={200}
          width={300}
        />
      </div>
    </div>
  );
};

export default RecipeItemDetails;
