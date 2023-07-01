import { useParams } from "react-router-dom";

const Quote = () => {
  const { id } = useParams();
  return <div>quote</div>;
};
export default Quote;
