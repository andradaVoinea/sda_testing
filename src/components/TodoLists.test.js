import { render } from '@testing-library/react';
import TodoList from './TodoLists';
import userEvent from '@testing-library/user-event';

describe('TodoList', () => {
  let utils;
  let handleCompleteSpy;

  beforeEach(() => {
    handleCompleteSpy = jest.fn();
    utils = render(
      <TodoList
        todos={['todo_1', 'todo_2']}
        handleComplete={handleCompleteSpy}
      />
    );
  });

  it('renders a list of todos', async () => {
    const firstTodo = utils.queryByText('todo_1');
    const secondTodo = utils.queryByText('todo_2');
    const thirdTodo = utils.queryByText('todo_3');

    expect(firstTodo).not.toBeNull();
    expect(secondTodo).not.toBeNull();
    expect(thirdTodo).toBeNull();

    const user = userEvent.setup();
    await user.click(secondTodo);

    expect(handleCompleteSpy).toBeCalledWith(1);
  });
});
