import styled from "styled-components";

export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;
export const Header = styled.div`
  background-color: azure;
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
export const SearchIcon = styled.img`
  width: 22px;
  height: 32px;
 
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

export const LogoImage = styled.img`
  width: 20px;
  height: 36px;
  margin: 15px;
`;
