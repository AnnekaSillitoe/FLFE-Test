import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const mockEvent = jest.fn();
const props = {
  onClick: mockEvent,
};

test("Header renders correctly", () => {
  const header = shallow(<Header {...props} />);
  expect(header).toMatchSnapshot();
});

test("When clicking the button, it triggers the onClick", () => {
  const header = shallow(<Header {...props} />);
  const button = header.find("button");

  button.simulate("click");

  expect(mockEvent.mock.calls.length).toEqual(1);
});
