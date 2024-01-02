import React, { useEffect } from "react";
import { useGetProductQuery } from "src/lib/services/api";
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
  const { data: product, error, isLoading } = useGetProductQuery(72);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.statusText}</div>;
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <h1>Count-{countVal}</h1>

      <ul>
        <li>{product.title}</li>
        <li>{product.price}</li>
      </ul>
    </div>
  );
};

export default Home;
