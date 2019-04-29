export const areasDict = [
  {
    areaId: 0,
    areaName: "Strefa basenów",
    attractions: [
      {
        attractionId: 0,
        attractionName: "Sztuczne fale"
      },
      {
        attractionId: 1,
        attractionName: "Bicze wodne"
      },
      {
        attractionId: 2,
        attractionName: "Basen otwarty"
      }
    ]
  },
  {
    areaId: 1,
    areaName: "Strefa saun",
    attractions: [
      {
        attractionId: 3,
        attractionName: "Sauna fińska"
      },
      {
        attractionId: 4,
        attractionName: "Sauna rosyjska"
      }
    ]
  },
  {
    areaId: 2,
    areaName: "Strefa spa",
    attractions: [
      {
        attractionId: 5,
        attractionName: "Masaż"
      },
      {
        attractionId: 6,
        attractionName: "Kąpiel błotna"
      },
      {
        attractionId: 7,
        attractionName: "Sala solankowa"
      }
    ]
  }
];

export const pricesDict = [
  {
    areaId: 0,
    areaName: "Strefa basenów",
    ticketTypes: [
      {
        ticketTypeId: 0,
        ticketTypeName: "Bilet poranny 6:00-12:00",
        price: 30,
        currency: "zł",
        periodDiscount: {
          //lub null
          rate: 0.25,
          dateStart: "2019-04-01",
          dateEnd: "2019-06-01"
        }
      },
      {
        ticketTypeId: 1,
        ticketTypeName: "Bilet popłudniowy 12:00-18:00",
        price: 35,
        currency: "zł",
        periodDiscount: null
      },
      {
        ticketTypeId: 2,
        ticketTypeName: "Bilet wieczorny 18:00-24:00",
        price: 40,
        currency: "zł",
        periodDiscount: null
      },
      {
        ticketTypeId: 3,
        ticketTypeName: "Bilet całodniowy",
        price: 50,
        currency: "zł",
        periodDiscount: null
      },
      {
        ticketTypeId: 4,
        ticketTypeName: "Karnet miesięczny",
        price: 300,
        currency: "zł",
        periodDiscount: null
      }
    ]
  },
  {
    areaId: 1,
    areaName: "Strefa saun",
    ticketTypes: [
      {
        ticketTypeId: 5,
        ticketTypeName: "Bilet poranny 6:00-12:00",
        price: 50,
        currency: "zł",
        periodDiscount: {
          rate: 0.25,
          dateStart: "2019-04-01",
          dateEnd: "2019-06-01"
        }
      },
      {
        ticketTypeId: 6,
        ticketTypeName: "Bilet wieczorny 18:00-24:00",
        price: 60,
        currency: "zł",
        periodDiscount: null
      },
      {
        ticketTypeId: 7,
        ticketTypeName: "Karnet miesięczny",
        price: 400,
        currency: "zł",
        periodDiscount: null
      }
    ]
  },
  {
    areaId: 2,
    areaName: "Strefa spa",
    ticketTypes: [
      {
        ticketTypeId: 8,
        ticketTypeName: "Bilet wieczorny 18:00-24:00",
        price: 80,
        currency: "zł",
        periodDiscount: {
          rate: 0.1,
          dateStart: "2019-04-01",
          dateEnd: "2019-06-01"
        }
      },
      {
        ticketTypeId: 9,
        ticketTypeName: "Karnet miesięczny",
        price: 1000,
        currency: "zł",
        periodDiscount: null
      }
    ]
  }
];

export const classDiscountsDict = [
  {
    classDiscountId: 0,
    className: "studenci",
    discountRate: 0.49,
    discountLabel: "Studenci 51%"
  },
  {
    classDiscountId: 1,
    className: "uczniowie",
    discountRate: 0.3,
    discountLabel: "Uczniowie 70%"
  },
  {
    classDiscountId: 2,
    className: "emeryci",
    discountRate: 0.5,
    discountLabel: "Emeryci 50%"
  }
];

export const attractionOccupancy = [
  {
    areaId: 0,
    areaName: "Strefa basenów",
    attractions: [
      {
        attractionId: 0,
        attractionName: "Sztuczne fale",
        numberOfPeople: 21,
        occupancyRatio: 0.46 //jakiś wskaźnik zapełnienia, gdzie 1 to nominalna maksymalna ilość ludzi, 0 obiekt pusty
      },
      {
        attractionId: 1,
        attractionName: "Bicze wodne",
        numberOfPeople: 15,
        occupancyRatio: 0.66
      },
      {
        attractionId: 2,
        attractionName: "Basen otwarty",
        numberOfPeople: 40,
        occupancyRatio: 0.75
      }
    ]
  },
  {
    areaId: 1,
    areaName: "Strefa saun",
    attractions: [
      {
        attractionId: 3,
        attractionName: "Sauna fińska",
        numberOfPeople: 7,
        occupancyRatio: 0.3
      },
      {
        attractionId: 4,
        attractionName: "Sauna rosyjska",
        numberOfPeople: 15,
        occupancyRatio: 0.8
      }
    ]
  },
  {
    areaId: 2,
    areaName: "Strefa spa",
    attractions: [
      {
        attractionId: 5,
        attractionName: "Masaż",
        numberOfPeople: 5,
        occupancyRatio: 0.74
      },
      {
        attractionId: 6,
        attractionName: "Kąpiel błotna",
        numberOfPeople: 10,
        occupancyRatio: 0.75
      },
      {
        attractionId: 7,
        attractionName: "Sala solankowa",
        numberOfPeople: 25,
        occupancyRatio: 0.6
      }
    ]
  }
];

export const userDb = [
  {
    email: "asd@asd.com",
    password: "asd",
    isAdmin: false
  },
  {
    email: "admin@asd.com",
    password: "admin",
    isAdmin: true
  }
];

//logowanie
/*
zapytanie:
{
  login: "",
  password: ""
}
odpowiedź:
{
  userToken: "",
  lastLogIn: "",
  name: "",
  surname: "",
  //generealnie wszystkie podstawowe inf o użytkowniku (nie wiem, może historia zakupów też)
}
*/

//rejestracja
/*
zapytanie:
{
  login: "",
  password: "",
  name: "",
  surname: ""
}
odpowiedź:
{
  success: true/false,
  status: ""  //puste lub informacja w stylu "Email w użyciu"
}
*/

//kupno
/*
zapytanie:
{
  userToken: "",
  items: [
    {
      ticketTypeId: int,
      classDiscountId: int, 
    },
    ...
  ]
}
odpowiedź:
{
  success: true/false,
  status: ""
}
*/

//zmiana danych konta
/*
zapytanie:
{
  userToken: "",
  email: "",
  password: "",
  name: "",
  surname: "",
  //inne podstawowe dane (?)
}
odpowiedź:
{
  success: true/false,
  status: "",
  //jak success, w sumie najwygodniej jak odeślecie zaktualizowane informacje w takim samym formacie
}
*/

//zmiana zawartości słownika
/*
zapytanie:
{
  //po prostu nowy stan słownika (z wprowazonymi zmianami), w takim formacie jak go dostaję
}
odpoweidź:
{
  //nowy słownik
}
*/
