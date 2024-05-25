import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>Recipe List</div>
      <Link href={"/recipe-list"}><button>Click here for recipies</button></Link>
    </div>
  );
}
