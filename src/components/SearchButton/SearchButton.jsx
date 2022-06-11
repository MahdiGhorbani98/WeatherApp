import { BiSearchAlt2 } from "react-icons/bi";

import * as Styled from "../shared/ButtonStyled/Button.styled";

const SearchButton = ({ startRequest }) => {
  return (
    <Styled.Button
      border_radius={"0px 3px 3px 0px"}
      aria-label="search"
      onClick={startRequest}
    >
      <BiSearchAlt2 style={{ width: "30px", height: "30px", color: "#fff" }} />
    </Styled.Button>
  );
};

export default SearchButton;
