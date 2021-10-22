import styled from 'styled-components';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import countries from './countries';
import useAutocomplete from './useAutocomplete';

const SearchForm = () => {
  const {
    value,
    handleValueChange,
    suggestions,
    select,
    currentFocus,
    handleKeyDown,
  } = useAutocomplete();
  const hasSuggestions = !(Array.isArray(suggestions) && !suggestions.length);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Container>
          <Input
            onKeyDown={handleKeyDown}
            value={value}
            onChange={(e) => handleValueChange(e.target.value, countries)}
          />
          <SubmitButton>
            <SearchIcon />
          </SubmitButton>
          {hasSuggestions && (
            <List>
              {suggestions.map(({ rest, itemValue }, i) => (
                <Item
                  key={itemValue}
                  active={i === currentFocus}
                  onClick={() => select(itemValue)}
                >
                  <Match>{value}</Match>
                  {rest}
                </Item>
              ))}
            </List>
          )}
        </Container>
      </Form>
    </div>
  );
};

const Container = styled.div`
  position: relative;
`;

const List = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 40vh;
  background-color: #293241;
  border-radius: 0 0 5px 5px;
  overflow-y: scroll;
`;

const Item = styled.div`
  border-left: 3px solid ${({ active }) => (active ? 'blue' : 'initial')};
  background-color: ${({ active }) => (active ? 'gray' : 'initial')};
  padding: 0 15px;
  color: ${({ active }) => (active ? 'white' : '#f2e9e4')};
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const Input = styled.input`
  background-color: #293241;
  color: #f2e9e4;
  border: none;
  width: 400px;
  padding: 15px 15px;
  border-radius: 5px 0 0 0;

  &:focus {
    outline: none;
  }
`;

const Match = styled.strong`
  color: #c9ada7;
`;

const Form = styled.form`
  width: 100vw;
  height: 100vh;
  background-color: #4a4e69;
  padding-top: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const SubmitButton = styled.button`
  outline: none;
  background-color: #293241;
  padding: 15px 20px;
  border: none;
  color: #f2e9e4;
  border-radius: 0 5px 0 0;

  &:focus {
    outline: none;
  }
`;

export default SearchForm;
