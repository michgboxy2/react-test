import React from "react";
import { mount } from "enzyme";

import CommentBox from "../CommentBox";
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area and 2 buttons", () => {
  beforeEach(() => {
    //simulate an onChange event on the text area
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });

    //force a document update
    wrapped.update();
  });
  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clears the form, text area gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
 