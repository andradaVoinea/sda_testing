import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

describe('Todo', () => {
  const setupComponent = (params = {}) => {
    let description = 'description';
    if (params.description) {
      description = params.description;
    }

    let handleComplete = () => {};
    if (params.handleComplete) {
      handleComplete = params.handleComplete;
    }

    let idx = 1;
    if (params.idx) {
      idx = params.idx;
    }

    const utils = render(
      <Todo
        description={description}
        handleComplete={handleComplete}
        idx={idx}
      />
    );

    return utils;
  };

  it('renders a component', () => {
    const utils = setupComponent();
    const text = utils.queryByText('description');
    expect(text).not.toBeNull();
  });

  it('renders a component', () => {
    const utils = setupComponent({ description: 'another one' });
    const text = utils.queryByText('another one');
    expect(text).not.toBeNull();
  });

  it('calls handleComplete with an index', async () => {
    const handleCompleteSpy = jest.fn();
    const utils = setupComponent({ handleComplete: handleCompleteSpy });
    const text = utils.queryByText('description');
    const user = userEvent.setup();
    await user.click(text);
    expect(handleCompleteSpy).toHaveBeenCalledWith(1);
  });
});
