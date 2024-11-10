import { getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation() {
  const data = await getSettings();
  return (
    <div className="grid grid-cols-2 min-h-[400px] border border-primary-800 p-5 gap-5">
      <DateSelector />
      <ReservationForm maxCapacity={data.maxGuestPerBooking} />
    </div>
  );
}

export default Reservation;
