var colors = {
  forground: '#2E3440',
  // background: "#ECEFF4",
  char: '#2E3440',
  comment: '#616E88',
  boolean: '#D42C8F',
  number: '#70641D',
  keyword: '#5107E8',
  keywordTypes: '#4089BD',
  keywordEnd: '#789639',
  keywordExtra: '#C9A53E',
  easifemTypes: '#43BC7A',
  easifemMethods: '#BD285E',
  operator: '#BF616A',
  punctuation: '#D08770',
  primitive: '#D9882B',
  string: '#2EACAB',
  changed: '#2EACAB',
  tag: '#A72ED9',
  deleted: '#D8DEE9',
  builtin: '#068DCC',
  variable: '#D8DEE9',
  function: '#DB40AA',
  attr_name: '#BD8C31',
  inserted: '#D08770',
  className: '#C91F1E',
  method: '#1919CD',
};

module.exports = {
  plain: {
    color: colors.forground,
    backgroundColor: colors.background,
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: colors.comment,
      },
    },
    {
      types: ['boolean'],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ['number'],
      style: {
        color: colors.number,
      },
    },
    {
      types: ['keywordTypes'],
      style: {
        color: colors.keywordTypes,
      },
    },
    {
      types: ['keywordEnd'],
      style: {
        color: colors.keywordEnd,
      },
    },
    {
      types: ['keywordExtra'],
      style: {
        color: colors.keywordExtra,
      },
    },
    {
      types: ['easifemTypes'],
      style: {
        color: colors.easifemTypes,
      },
    },
    {
      types: ['easifemMethods'],
      style: {
        color: colors.easifemMethods,
      },
    },
    {
      types: ['keyword'],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ['operator'],
      style: {
        color: colors.operator,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: colors.punctuation,
      },
    },
    {
      types: ['primitive'],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ['string'],
      style: {
        color: colors.string,
      },
    },
  ],
};
