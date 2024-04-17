const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

const getCategoryPath = (categories, categoryName) => {
  let path = '';
  for (const category of categories) {
    if (category?.name === categoryName) {
      path = `/${categoryName}`;
      break;
    } else if (category?.subcategories.length) {
      const subPath = getCategoryPath(category?.subcategories, categoryName);
      if (subPath !== '') {
        path = `/${category?.name}${subPath}`;
        break;
      }
    }
  }
  return path;
};


// Unit testing (Jest)
describe("getCategoryPath", () => {
  const categories = [
    {
      name: "category1",
      subcategories: [
        {
          name: "category2",
          subcategories: [],
        },
        {
          name: "category3",
          subcategories: [
            {
              name: "category4",
              subcategories: [],
            },
          ],
        },
      ],
    },
    {
      name: "category5",
      subcategories: [],
    },
  ];

  it("should return the correct path for category4", () => {
    expect(getCategoryPath(categories, "category4")).toEqual(
      "/category1/category3/category4"
    );
  });

  it("should return the correct path for category5", () => {
    expect(getCategoryPath(categories, "category5")).toEqual("/category5");
  });

  it("should return an empty string if the category is not found", () => {
    expect(getCategoryPath(categories, "nonexistentcategory")).toEqual("");
  });
});
