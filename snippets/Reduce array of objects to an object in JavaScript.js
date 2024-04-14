const ethnicities = [
  {
    id: 1,
    name: 'Asian'
  },
  {
    id: 2,
    name: 'African'
  },
  {
    id: 3,
    name: 'Caucasian'
  }
]


const ethnicitiesObject = ethnicities.reduce(
    (previousObject, currentObject) => {
        return Object.assign(previousObject, {
            [currentObject.id]: currentObject.name
        })
    },
{});

ethnicitiesObject