import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import breakfast from "./breakfast.svg";
import child from "./child.svg";
import concierge from "./concierge.svg";
import gym from "./gym.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import pool from "./pool.svg";
import room_sevice from "./room_sevice.svg";
import shuttle from "./shuttle.svg";
import wifi from "./wifi.svg";

export default function Amenities({ ...rest }) {
  return (
    <Box className="amenities__details" shadow>
      <Heading border>Зручності:</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={pool}>
          <span>Басейн</span>
        </ListItem>
      )}

      {hasGym && (
        <ListItem imageSrc={gym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}

      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}

      {hasFreeWiFi && (
        <ListItem imageSrc={wifi}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}

      {hasParking && (
        <ListItem imageSrc={parking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}

      {hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}

      {hasAirportShuttle && (
        <ListItem imageSrc={shuttle}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}

      {hasConciergeService && (
        <ListItem imageSrc={concierge}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}

      {hasRoomService && (
        <ListItem imageSrc={room_sevice}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}

      {hasChildFriendly && (
        <ListItem imageSrc={child}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
