import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className=" w-full min-h-screen">
      <Skeleton color="black" className="w-full" />
    </div>
  );
};

export default Loading;
