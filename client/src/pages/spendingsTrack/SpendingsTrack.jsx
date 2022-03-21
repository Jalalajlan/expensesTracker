import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import SpendingDetails from "../../component/Spendings_Details/SpendingDetails";

const SpendingsTrack = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <SpendingDetails />
      <p>spending Plan ID: {id}</p>
    </>
  );
};

export default SpendingsTrack;
