import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import "firebase/firestore";

function UploadBeat() {
  const { register, handleSubmit } = useForm();

  // const beatName = document.getElementById("beat-name");
  // const beatUpload = document.getElementById("beat-upload");

  db.collection("Beats")
    .doc("dMSSRUndR5ZgKnutosrm")
    .set({
      name: "A beat",
      beatUpload: "goats.mp3",
    })
    .then(function (docRef) {
      console.log("Document written ");
    })
    .catch(function (error) {
      console.log("Error adding document: ", error);
    });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="beatName"> Name: </label>
      <input name="beatName" id="beat-name" ref={register} />
      <br />
      <label htmlFor="beatUpload"> Upload your beat: </label>
      <br />
      <input type="file" name="beatUpload" id="beat-upload" />
      <button>Submit</button>
    </form>
  );
}

export default UploadBeat;
