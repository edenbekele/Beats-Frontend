import React from "react";
import { useForm } from "react-hook-form";

function UploadBeat() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="beatName"> Name: </label>
      <input name="beatName" ref={register} />
      <br />
      <label htmlFor="beatUpload"> Upload your beat: </label>
      <br />
      <input type="file" name="beatUpload" />
      <button>Submit</button>
    </form>
  );
}

export default UploadBeat;
