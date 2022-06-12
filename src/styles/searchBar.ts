import styled from 'styled-components';

const SearchBarForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  input:nth-child(1) {
    flex-grow: 1;
  }
  input:nth-child(2) {
    flex-shrink: 0;
    min-width: 30px;
  }
  // 2(버튼)은 고정해두고 1(텍스트인풋)만 움직이도록 함
`;

const TextInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.highlight};
  padding: 1rem;
  font-size: 1.5rem;
  margin: 1rem;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    margin: 1rem 2rem 1rem 0;
  }
`;

const SubmitBtn = styled.input`
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.colors.highlight};
  &:hover {
    background-color: initial;
    color: ${({ theme }) => theme.colors.highlight};
    border: 2px solid ${({ theme }) => theme.colors.highlight};
  }
  margin-right: 1rem;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    margin: initial;
  }
`;

export { SearchBarForm, TextInput, SubmitBtn };
