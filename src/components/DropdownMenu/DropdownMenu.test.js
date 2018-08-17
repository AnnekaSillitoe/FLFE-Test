import React from "react";
import { shallow } from "enzyme";
import DropdownMenu from "./DropdownMenu";

test("DropdownMenu renders correctly", () => {
  const dropdownMenu = shallow(<DropdownMenu />);
  expect(dropdownMenu).toMatchSnapshot();
});

test("renders the correct text for each dropdown menu idea", () => {
  const dropdownMenu = shallow(<DropdownMenu />);
  const a1 = dropdownMenu.find("a").first();
  const name1 = a1.text();
  const a2 = dropdownMenu.find("a").at(1);
  const name2 = a2.text();
  const a3 = dropdownMenu.find("a").at(2);
  const name3 = a3.text();

  expect(name1).toEqual("FutureLearn");
  expect(name2).toEqual("Course Creator");
  expect(name3).toEqual("Admin");
});
