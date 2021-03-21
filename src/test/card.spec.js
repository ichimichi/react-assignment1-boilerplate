import { Card } from "./../Components/card/Card";
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

it("render Card", () => {
  act(() => {
    render(
      <Card
        {...{
          title: "test",
          urlToImage: "http://test.com/test.jpg",
          content: "test content",
          url: "https://test.com/test",
        }}
      ></Card>,
      container
    );
  });
  expect(container.textContent).toBe("testRead Later");
});
