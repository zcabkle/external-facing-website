import { render, fireEvent, screen } from "@testing-library/react";
import { Navbar } from "../src/components/Navbar/Navbar.js"

//test block
test("Navbar", () => {
  // render the component on virtual dom
  render(<Navbar />);

})