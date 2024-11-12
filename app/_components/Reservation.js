import {getSettings} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import {auth} from "@/app/_lib/auth"
import LoginMessage from "@/app/_components/LoginMessage";

async function Reservation() {
    const data = await getSettings();
    const user = await auth();
    console.log(data)
    return (
        <div className="grid grid-cols-2 min-h-[400px] border border-primary-800 p-5 gap-5">
            <DateSelector/>
            {user?.user ? <ReservationForm maxCapacity={data?.maxGuestPerBooking} user={user.user}/> : <LoginMessage/>}
        </div>
    );
}

export default Reservation;
