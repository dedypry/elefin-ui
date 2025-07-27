import badge from "./badge";
import button from "./button";
import list from "./list";
import MenuItem from "./MenuItems";
import pagination from "./pagination";
import paper from "./Paper";
import switchOverrides from "./switch";
import tabs from "./tabs";
import TextField from "./text-field";

const components = (): Record<string, unknown> => {
  return Object.assign(
    {},
    button,
    TextField,
    MenuItem,
    list,
    paper,
    switchOverrides,
    badge,
    pagination,
    tabs
  ) as Record<string, unknown>;
};

export default components;
