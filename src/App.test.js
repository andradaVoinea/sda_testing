import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./mocks/todos.json', () => ['todo_1', 'todo_2']);

describe('App', () => {
  let utils;

  beforeEach(() => {
    utils = render(<App />);
  });

  it('renders a list of todos', async () => {
    const todo1 = utils.queryByText('todo_1');
    let todo2 = utils.queryByText('todo_2');

    expect(todo1).not.toBeNull();
    expect(todo2).not.toBeNull();

    const user = userEvent.setup();
    await user.click(todo2);
    todo2 = utils.queryByText('todo_2');

    expect(todo2).toBeNull();
  });

  it('creates a new todo', async () => {
    const inputByLabel = utils.queryByLabelText('Creaza todo');
    const submitButton = utils.queryByText('Submit');

    let newTodo = utils.queryByText('ceva_todo');
    expect(newTodo).toBeNull();

    const user = userEvent.setup();
    await user.type(inputByLabel, 'ceva_todo');
    await user.click(submitButton);

    newTodo = utils.queryByText('ceva_todo');
    expect(newTodo).not.toBeNull();
  });
});
