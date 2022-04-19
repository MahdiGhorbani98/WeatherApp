/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Home = () => {
  return (
    <div>
      <input
        css={css`
          font-size: 20px;
          color: #53a3ce;
          padding: 10px 20px;
          border-radius: 7px;
          border: 2.5px solid skyblue;
          outline: none;
          &:focus {
            border: 2.5px solid #53a3ce;
          }
          ::placeholder {
            color: #63a9cfb8;
          }
        `}
        type="text"
        placeholder="Enter a City"
      />{" "}
    </div>
  );
};

export default Home;
