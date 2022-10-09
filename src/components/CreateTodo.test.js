import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateTodo from './CreateTodo';

describe('CreateTodo', () => {
  const setupComponent = (addTodo = jest.fn()) => {
    const user = userEvent.setup();
    const utils = render(<CreateTodo addTodo={addTodo} />);

    return { ...utils, user, addTodo };
  };

  it('adds a todo', async () => {
    const {
      queryByText,
      queryByPlaceholderText,
      queryByLabelText,
      user,
      addTodo,
    } = setupComponent();

    const inputByLabel = queryByLabelText('Creaza todo');
    const inputByPlaceholder = queryByPlaceholderText('Descriere Todo');
    const submitButton = queryByText('Submit');

    expect(inputByLabel).not.toBeNull();
    expect(inputByPlaceholder).not.toBeNull();
    expect(submitButton).not.toBeNull();

    await user.type(inputByLabel, 'ceva_todo');
    await user.click(submitButton);

    expect(addTodo).toHaveBeenCalledWith('ceva_todo');
  });
});
