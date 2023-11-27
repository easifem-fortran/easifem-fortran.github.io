// author: Vikas Sharma vickysharma0812@gmail.com

var colors = {
  char: "#D8DEE9",
  comment: "#616E88",
  boolean: "#BF616A",
  number: "#B48EAD",
  keywordTypes: "#8FBCBB",
  keywordEnd: "#88C0D0",
  keywordExtra: "#81A1C1",
  easifemTypes: "#B48EAD",
  easifemMethods: "#EBCB8B",
  keyword: "#5E81AC",
  operator: "#BF616A",
  punctuation: "#D08770",
  primitive: "#EBCB8B",
  string: "#A3BE8C",
  changed: "#A3BE8C",
  tag: "#81A1C1",
  deleted: "#D8DEE9",
  builtin: "#81A1C1",
  variable: "#D8DEE9",
  function: "#D08770",
  attr_name: "#EBCB8B",
  inserted: "#D08770",
  className: "#8FBCBB",
  method: "#EBCB8B",
};
module.exports = {
  plain: {
    color: "#ECEFF4",
    backgroundColor: "#2E3440",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: colors.comment,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ["number"],
      style: {
        color: colors.number,
      },
    },
    {
      types: ["keywordTypes"],
      style: {
        color: colors.keywordTypes,
      },
    },
    {
      types: ["keywordEnd"],
      style: {
        color: colors.keywordEnd,
      },
    },
    {
      types: ["keywordExtra"],
      style: {
        color: colors.keywordExtra,
      },
    },
    {
      types: ["easifemTypes"],
      style: {
        color: colors.easifemTypes,
      },
    },
    {
      types: ["easifemMethods"],
      style: {
        color: colors.easifemMethods,
      },
    },
    {
      types: ["keyword"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["operator"],
      style: {
        color: colors.operator,
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: colors.punctuation,
      },
    },
    {
      types: ["primitive"],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ["string"],
      style: {
        color: colors.string,
      },
    },
  ],
};
