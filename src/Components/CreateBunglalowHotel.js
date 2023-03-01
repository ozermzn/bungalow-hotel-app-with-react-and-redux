import bungalowImage from "../images/createPage/bungalow.jpg";
import Input from "./Input";
import Button from "./Button";
import { useAddBungalowMutation } from "../store";
import { Navigate } from "react-router-dom";

function CreateBungalowHotel() {
  const [addBungalow, results] = useAddBungalowMutation();

  const handleAddBungalowSubmit = (e) => {
    e.preventDefault();
    addBungalow({
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      location: e.target.location.value,
    });
  };

  return (
    <div className="flex items-center p-5 m-5">
      <img src={bungalowImage} alt="cabin" className="rounded-lg" />
      <div>
        <form onSubmit={handleAddBungalowSubmit}>
          <div className="p-2 flex gap-5">
            <div className="">
              <label
                htmlFor="name"
                className="text-xl font-semibold text-slate-500 mx-5"
              >
                Name
              </label>
              <Input
                name="name"
                id="name"
                type={"text"}
                placeholder="A bungalow"
              />
            </div>
            <div>
              <label
                className="text-xl font-semibold text-slate-500 mx-5 my-1"
                htmlFor="price"
              >
                Price
              </label>
              <Input
                type={"number"}
                name="price"
                id="price"
                placeholder="0.00₺"
              />
            </div>
          </div>
          <div className="p-2">
            <label
              htmlFor="description"
              className="text-xl font-semibold text-slate-500 mx-5"
            >
              Description
            </label>
            <Input
              name="description"
              id="description"
              type={"text"}
              placeholder="Life, smooth, sun and snow..."
            />
          </div>
          <div className="p-2">
            <label
              htmlFor="location"
              className="text-xl font-semibold text-slate-500 mx-5"
            >
              Location
            </label>
            <Input
              name="location"
              id="location"
              type={"text"}
              placeholder="Turkey / Uludağ"
            />
          </div>

          <Button className="mx-5" primary>
            Submit
          </Button>
          {results.isSuccess && <Navigate to="/" replace={true} />}
        </form>
      </div>
    </div>
  );
}
export default CreateBungalowHotel;
