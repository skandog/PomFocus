// Having really difficulty bring Jest into this project
// Do at beginning next time!

import React from "react";
import { View } from "react-native";
import { Timing } from "./Timing";
import { render, fireEvent } from "@testing-library/react-native";

describe("Timing", () => {
  it("should render a View with a button", () => {
    const { getByTestId } = render(<Timing mins={10} />);
    const view = getByTestId("timing-view");
    const button = getByTestId("timing-button");
    expect(view).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("should call onChangeTime with mins value when button is pressed", () => {
    const onChangeTime = jest.fn();
    const { getByTestId } = render(
      <Timing mins={10} onChangeTime={onChangeTime} />
    );
    const button = getByTestId("timing-button");
    fireEvent.press(button);
    expect(onChangeTime).toHaveBeenCalledWith(10);
  });

  it("should display the correct mins value on the button", () => {
    const { getByTestId } = render(<Timing mins={15} />);
    const button = getByTestId("timing-button");
    expect(button.props.title).toEqual(15);
  });
});
