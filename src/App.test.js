import { render, screen } from "@testing-library/react";
import App from "./App";

import { validateFields } from "./components/Login";

describe("login page test", () => {
  test("validateFields function should pass on correct input", () => {
    const email = "hello@mail.com";
    const password = "mypassword";
    expect(validateFields(email, password)).toBe(false);
  });

  test("Email Address field in login form should be in the document", () => {
    const component = render(<App />);
    const labelNode = component.getByText("Email Address");
    expect(labelNode).toBeInTheDocument();
  });

});
