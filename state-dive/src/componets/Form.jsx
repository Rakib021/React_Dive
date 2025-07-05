import React from "react";

export default function Form({ status = "SUCCESS" }) {
  if (status === "SUCCESS") return <h1> That's right!</h1>;
  return (
    <>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {status === "Error" && <p className="Error">There Was an error!!</p>}
      </form>
      
    </>
  );
}
