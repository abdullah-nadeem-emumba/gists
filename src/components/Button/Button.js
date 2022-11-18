import React from "react";
import { WhiteButton, GreenButton } from "./Button.styles";

export default function Button({ children, color }) {
  switch (color) {
    case "white":
      return <WhiteButton>{children}</WhiteButton>;
    case "green":
      return <GreenButton>{children}</GreenButton>;
  }
}
