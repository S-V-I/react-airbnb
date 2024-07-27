import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function PropertyDetails({ ...rest }) {
  return (
    <Box className="property__details" shadow>
      <Heading border>Деталі помешкання:</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property__details__list">
      <ListItem imageSrc={guest}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={bedroom}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={bed}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathroom}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
