import { FaPepperHot as icon } from "react-icons/fa";

export default {
  name: "topping",
  title: "Toppings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Topping Name",
      type: "string",
      description: "Name of the topping",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is vegetarian?",
      option: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegetarian ? "🍃" : ""}`,
    }),
  },
};
