import { useState } from "react";

export default function Forms() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [message, setmessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const form_data = {
      firstName,
      lastName,
      message,
    };
    console.log(form_data);
  }
  return (
    <div className="container">
      <div className="text">Contact us Form</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                // console.log(e.target.value);
                setfirstName(e.target.value);
              }}
            />
            <div className="underline"></div>
            <label>First Name</label>
          </div>

          <div className="input-data">
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => {
                // console.log(e.target.value);
                setlastName(e.target.value);
              }}
            />
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data textarea">
            <textarea
              rows="8"
              cols="80"
              value={message}
              onChange={(e) => {
                // console.log(e.target.value);
                setmessage(e.target.value);
              }}
              required
            ></textarea>
            <br />
            <div className="underline"></div>

            <label>Write your message</label>
            <br />

            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
