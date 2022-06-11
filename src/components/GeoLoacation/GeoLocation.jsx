import Geolocation from "react-geolocation";
import { HiLocationMarker } from "react-icons/hi";

import * as Styled from "../shared/ButtonStyled/Button.styled";

const GeoLocation = ({ GetLetAndLon }) => {
  return (
    <Geolocation
      render={({ getCurrentPosition, position }) => (
        <Styled.Button
          border_radius={"3px 0px 0px 3px"}
          onClick={() => GetLetAndLon(getCurrentPosition, position)}
        >
          <HiLocationMarker
            style={{ width: "30px", height: "30px", color: "#fff" }}
          />
        </Styled.Button>
      )}
    />
  );
};
export default GeoLocation;
