import React from "react";

const RegisterDoctor = () => {
  return (
    <div>
      <form action="#">
        <label>
          Date of Birth
          <input type="date" />
        </label>
        <label>
          IIN number
          <input type="text" />
        </label>
        <label>
          ID number
          <input type="text" />
        </label>
        <label>
          name
          <input type="text" />
        </label>
        <label>
          surname
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default RegisterDoctor;
