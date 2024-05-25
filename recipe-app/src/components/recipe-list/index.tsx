import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

const RecipeList = ({ recipeList }: { recipeList: any }) => {
  console.log(recipeList);

  return (
    <div className=" p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList && recipeList.length > 0
          ? recipeList?.map((recipe: any) => {
              return (
                <Link href={`/recipe-list/${recipe.id}`}>
                  <Card key={recipe.id}>
                    <CardContent className=" bg-white rounded-md overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.name}
                        width={300}
                        height={180}
                        className=" object-cover object-top hover:scale-105"
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-600">
                          {recipe.name}
                        </h3>
                        <div className=" mt-4 flex items-center flex-wrap gap-2">
                          <p className=" text-lg text-gray-600">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600">{recipe.cuisine}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          : "No recipes found"}
      </div>
    </div>
  );
};

export default RecipeList;
