import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ searchParams }) {
  const cabins = await getCabins();
  if (cabins.length <= 0) return null;
  let filtered = [];
  if (searchParams === "all") filtered = cabins;
  if (searchParams === "small")
    filtered = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (searchParams === "medium")
    filtered = cabins.filter(
      (cabin) => cabin.maxCapacity <= 6 && cabin.maxCapacity > 3
    );
  if (searchParams === "large")
    filtered = cabins.filter((cabin) => cabin.maxCapacity > 6);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filtered.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin._id} />
      ))}
    </div>
  );
}

export default CabinList;
