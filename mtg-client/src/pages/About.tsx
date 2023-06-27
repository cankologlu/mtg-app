import React, {useEffect, useState} from "react";
import axios from "axios"

export default function About() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1337/about")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{message}</div>;
}