import Image from "next/image";
import Link from "next/link";

const RecipeItemDetails = ({ getRecipeDetails }: any) => {
  return (
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <Link className="pb-5" href={"/recipe-list"}>Go to recipe list</Link>
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" w-full lg:sticky top-0 sm:flex gap-2">
          <Image
            src={getRecipeDetails?.image}
            alt={getRecipeDetails?.name}
            height={200}
            width={300}
            className="rounded-md"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-extrabold text-gray-950">
            {getRecipeDetails?.name}
          </h2>
          <div className="flex flex-wrap gap-4 mt-5">
            <p className="text-2xl text-gray-700">
              {getRecipeDetails?.mealType[0]}
            </p>
          </div>
          <div className="mt-5">
            <p className="text-xl text-gray-800">{getRecipeDetails?.cuisine}</p>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold ">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {getRecipeDetails?.ingredients.map(
                (ingredient: any, index: number) => (
                  <li key={index}>{ingredient}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItemDetails;
