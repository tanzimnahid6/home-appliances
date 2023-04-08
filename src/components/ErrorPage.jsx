import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
      <div className="text-4xl text-center text-yellow-500 my-44">
        <h1>{error.data}</h1>
        <h1>{error.status}</h1>
      </div>
    );
};

export default ErrorPage;