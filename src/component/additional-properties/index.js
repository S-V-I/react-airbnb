import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function AdditionalProperties({ ...rest }) {
  return (
    <Box className="additional__properties" shadow>
      <Heading border>Додаткові властивості</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ rules, policy, transportation, languages, offers, checkin }) {
  return (
    <ul className="additional__properties__list">
      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span>{policy}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkin}</span>
      </ListItem>
    </ul>
  );
}
