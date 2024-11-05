import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div>
      <Spinner />
      <p className="text-center text-accent-300">Cabins Loading....</p>
    </div>
  );
}

export default loading;
