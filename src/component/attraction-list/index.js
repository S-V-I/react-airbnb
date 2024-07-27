import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function AttractionList({ list }) {
  return (
    <Box className="attraction__block" shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attraction__list">
        {list.map(({ id, ...rest }) => {
          return (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          );
        })}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <a href={link} className="attraction__name">
      {name}
    </a>
  );
}
