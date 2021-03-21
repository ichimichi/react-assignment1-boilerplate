import { Footer } from "./../Components/footer/Footer";
// please add your test cases here
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render Footer", () => {
  act(() => {
    render(<Footer></Footer>, container);
  });
  expect(container.textContent).toBe("News App @2020");
});
