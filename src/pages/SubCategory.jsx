import { useParams } from "react-router-dom";

function SubCategory() {
  const { subcategory } = useParams();

  return <div>{subcategory}</div>;
}

export default SubCategory;
