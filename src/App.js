import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App bg-slate-300 flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl font-bold mt-5 tracking-wide">
        Basic Information.
      </h1>

      <form
        onSubmit={submitHandler}
        className="w-[450px] h-max mt-4 bg-slate-500 p-2 rounded-md "
      >
        <div className="flex flex-col justify-center items-center mt-7 p-2">
          <input
            className="rounded-md px-3 py-2 w-60"
            type="text"
            placeholder="first name"
            onChange={changeHandler}
            name="firstname"
            value={formData.firstname}
          />
          <br></br>

          <input
            className="rounded-md px-3 py-2 w-60"
            type="text"
            placeholder="last name"
            onChange={changeHandler}
            name="lastname"
            value={formData.lastname}
          />
          <br></br>

          <input
            className="rounded-md px-3 py-2 w-60"
            type="text"
            placeholder="email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />

          <textarea
            className="rounded-md px-3 py-2 w-72"
            placeholder="enter your comment"
            onChange={changeHandler}
            name="comment"
            value={formData.comment}
          />
        </div>

        <br></br>

        <div className="p-2 ml-1 mt-2">
          <input
            className=""
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
          />

          <label
            className="text-lg font-medium ml-3 tracking-wide"
            htmlFor="isVisible"
          >
            Am I Visible
          </label>

          <br></br>

          <fieldset className="mt-7 flex  space-x-1 tracking-wide">
            <legend className="text-xl font-semibold">Mode:</legend>
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="online-mode"
              id="online-mode"
              checked={formData.mode === "online-mode"}
            />
            <label className="p-2 text-lg font-medium " htmlFor="online-mode">
              Online Mode
            </label>

            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="offline-mode"
              id="offline-mode"
              checked={formData.mode === "offline-mode"}
            />
            <label className="p-2 text-lg font-medium" htmlFor="offline-mode">
              Offline Mode
            </label>
          </fieldset>
        </div>

        <br></br>

        <label
          className="text-lg font-semibold p-3 tracking-wide"
          htmlFor="favCar"
        >
          Select Your Favourite Car :-
        </label>
        <select
          className="rounded-md px-5 py-1.5 text-md mt-2 "
          onChange={changeHandler}
          name="favCar"
          value={formData.favCar}
          id="favCar"
        >
          <option value="scorpio">scorpio</option>
          <option value="thar">thar</option>
          <option value="BMW">BMW</option>
          <option value="Jaguar">Jaguar</option>
          <option value="Audi">Audi</option>
        </select>

        <br></br>

        <div className="flex justify-center mt-2 mb-5 ">
          <button className="px-4 py-1.5 text-md mt-10 tracking-wide">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
