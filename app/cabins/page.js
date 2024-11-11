import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
  description: "A luxury cabin rental service",
};

export const revalidate = 0;

async function page({ searchParams }) {
  const params = searchParams.capacity ?? "all";
  return (
    <div className="space-y-5">
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Filter />
      <Suspense fallback={<Spinner />} key={params}>
        <CabinList searchParams={params} />
      </Suspense>
        <ReservationReminder/>
    </div>
  );
}

export default page;
