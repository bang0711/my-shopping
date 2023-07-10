import React from "react";

type Props = {};

function NotFound({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h1 className="text-4xl font-bold">Something Went Wrong...</h1>

      <h2 className="font-extralight animate-pulse">
        It looks like the Product could not be found!
      </h2>
    </div>
  );
}

export default NotFound;
