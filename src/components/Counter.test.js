import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
  const setupComponent = () => {
    const user = userEvent.setup();
    const utils = render(<Counter />);
    return { ...utils, user };
  };

  it("increments by one", async () => {
    const { queryByText, user, debug } = setupComponent();
    const addButton = queryByText("Add");
    let currentValue = queryByText("Current value is: 0");

    expect(currentValue).not.toBeNull();

    await user.click(addButton);
    currentValue = queryByText("Current value is: 0");
    expect(currentValue).toBeNull();
    currentValue = queryByText("Current value is: 1");
    expect(currentValue).not.toBeNull();
  });

  it("decrements by one", async () => {
    const { queryByText, user, debug } = setupComponent();
    const substractButton = queryByText("Substract");
    let currentValue = queryByText("Current value is: 0");
    expect(currentValue).not.toBeNull();

    await user.click(substractButton);
    currentValue = queryByText("Current value is: 0");
    expect(currentValue).toBeNull();
    currentValue = queryByText("Current value is: -1");
    expect(currentValue).not.toBeNull();
  });

  it("times three", async () => {
    const { queryByText, user, debug } = setupComponent();
    const timesThreeButton = queryByText("*3");
    const addButton = queryByText("Add");
    let currentValue = queryByText("Current value is: 0");
    expect(currentValue).not.toBeNull();
    await user.click(addButton);
    await user.click(timesThreeButton);
    currentValue = queryByText("Current value is: 3");
    expect(currentValue).not.toBeNull();
  });

  it("adds custom value", async () => {
    const { user, queryByLabelText, queryByText, getByText } = setupComponent();
    const addButton = queryByText("Add");
    const subButton = queryByText("Substract");
    const multiButton = queryByText("*3");
    const divButton = queryByText("/3");
    const inputField = queryByLabelText("Number");

    await user.type(inputField, "12");
    await user.click(addButton);
    getByText("Current value is: 12");

    await user.clear(inputField);
    await user.type(inputField, "24");

    await user.click(subButton);
    getByText("Current value is: -12");

    await user.clear(inputField);
    await user.type(inputField, "36");

    await user.click(multiButton);
    getByText("Current value is: -432");

    await user.clear(inputField);
    await user.type(inputField, "432");

    await user.click(divButton);
    getByText("Current value is: -1");
  });
});

describe("Counter with before each", () => {
  let utils;
  let user;
  beforeEach(() => {
    utils = render(<Counter />);
    user = userEvent.setup();
  });

  it("divides by three", async () => {
    let currentValue = utils.queryByText("Current value is: 0");
    const divThreeButton = utils.queryByText("/3");
    const addButton = utils.queryByText("Add");
    await user.click(addButton);
    await user.click(addButton);
    await user.click(addButton);
    await user.click(addButton);
    await user.click(addButton);
    await user.click(addButton);

    utils.debug();
    await user.click(divThreeButton);
    currentValue = utils.queryByText("Current value is: 2");

    expect(currentValue).not.toBeNull();
  });
});
