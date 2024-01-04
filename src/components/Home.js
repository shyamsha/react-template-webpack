import React, { useEffect } from "react";
import {
  useGetProductQuery,
  useLoginMutation,
  useUpdateMutation,
} from "src/lib/services/api";
import { useSelector } from "react-redux";
import { counter } from "../store/reducerFunctions";
// import { useLocation } from "react-router-dom";
const Home = () => {
  const { countVal } = useSelector(counter);
  // let location = useLocation();
  // console.log(location);
  // useEffect(() => {
  //   const body = { email: "john@mail.com", password: "changeme" };
  //   login(body)
  //     .then((response) => {
  //       console.log(response, "--->response");
  //     })
  //     .catch((err) => {
  //       console.log(err, "-->error");
  //     });
  // }, []);
  const { data: product, error, isLoading } = useGetProductQuery(4);

  const [user, { data, isLoading: loginLoading }] = useLoginMutation();
  const [updateProduct, { data: update }] = useUpdateMutation();
  const loginHandler = () => {
    const userData = {
      email: "john@mail.com",
      password: "changeme",
    };
    user(userData);
  };
  const updateHandler = () => {
    const Data = {
      title: "new title",
      price: 100,
    };
    updateProduct({ updateProduct: Data, id: 1 });
  };
  console.log(update, "-->data");
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      {error && <div>{error.statusText}</div>}
      <h1>Count-{countVal}</h1>
      <button onClick={loginHandler}>login</button>
      <button onClick={updateHandler}>update</button>

      <ul>
        <li>{product?.title}</li>
        <li>{product?.price}</li>
      </ul>
    </div>
  );
};

export default Home;
