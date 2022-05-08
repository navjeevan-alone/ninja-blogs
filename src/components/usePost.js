// import { useState } from "react";

// function usePost({ url, data }) {
//   const [isPending, setIsPending] = useState(true);
//   // const [post, setPost] = useState(null);
//   const [error, setError] = useState(null);
//   const options = {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(data),
//   };
//   // custom hook parameters : url,method,headers,body
//   // setPost(
//   fetch(url, options)
//     .then(() => {
//       // if (!res.ok) {
//       //   throw Error(`Sorry! Cannot can Fetch the data`);
//       // }
//       // console.log("New blog added");
//       console.log("POST request Successfull to " + url);
//       setIsPending(false);
//       setError(null);
//     })
//     .catch((err) => {
//       setError(err.message);
//       setIsPending(false);
//       console.log(err.message);
//     });
//   // );

//   return { isPending, error, setPost };
// }

// export default usePost;
