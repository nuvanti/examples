import { createBasicUiModel } from "@nuvanti/basic-ui-model";
import { createRadModel } from "@nuvanti/rad-model";
import { } from "@nuvanti/ui";
import { modify } from "@nuvanti/ts-style";

const { radModel, addTable, generateFromRad } = createRadModel({
  name: "Nuvanti",
  id: "AMacekin",
  defaultFieldDisplay: () => {
    throw "";
  },
  defaultFormField: () => {
    throw "";
  },
});

addTable("User", (table) => {
  table.nuvaId("globalId").nonNull().unique();
  table.bool("disabled").nonNull();
});

addTable("Category", (table) => {
  table.string("name", 15);
  table.string("description", 500);
  table.selectFormControl();
});

const { addPage, generateUi } = createBasicUiModel();

// addPage({
//   path: "/",
//   content: simpleEditableGridPage({ table: "Category", radModel }),
// });

// const shell = simpleNavbar({
//   links: [
//     { label: "Home", path: "/" },
//     { label: "Categories", path: "/categories" },
//     { label: "Contacts", path: "/contacts" },
//     { label: "Peeps", path: "/peeps" },
//   ],
// });

/** @type {import("@nuvanti/runtime-model").RuntimeModel} */
export const app = {
  ...generateFromRad(),
  ui: generateUi(shell, createUiModel),
  runProfile: [
    {
      asUser: `AMacekin`,
      name: "default",
      procedure: [
        modify(
          `insert into db.User (globalId, disabled) values (cast('AMacekin' as NuvaId), false)`
        ),
      ],
      time: `2021-11-11T16:37:49.715Z`,
    },
  ],
};
