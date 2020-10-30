import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import "firebase/firestore";

function UploadBeat() {
  const { register, handleSubmit } = useForm();
  // const db = firebase.firestore();

  const beatName = document.getElementById("beat-name");
  const beatUpload = document.getElementById("beat-upload");

  const onSubmit = () => {
    db.collection("Beats")
      .add({
        name: beatName,
        beatUpload: beatUpload,
      })
      .then(function (docRef) {
        console.log("Document written ");
      })
      .catch(function (error) {
        console.log("Error adding document: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="beatName"> Name: </label>
      <input name="beatName" id="beat-name" ref={register} />
      <br />
      <label htmlFor="beatUpload"> Upload your beat: </label>
      <br />
      <input type="file" name="beatUpload" id="beat-upload" />
      <input type="submit" defaultValue="Submit" ref={register} />
    </form>
  );
}

export default UploadBeat;

// To do:
// - Add functionality for user to submit data in forms and it appears in Firestore
// - How to get mp3 files uploaded to firestore
