"use client";

import React, { use, useEffect } from "react";

import { postUser, getUsers } from "../lib/api-client/client";

const DBTEST = () => {
  useEffect(() => {
    postUser({ name: "test" }).then((res) => {
      console.log(res);
    });

    getUsers().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>page</div>;
};

export default DBTEST;
