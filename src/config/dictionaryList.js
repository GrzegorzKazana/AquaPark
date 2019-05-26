export default [
  {
    name: "AREAS",
    reducerName: "areas",
    url: "zones/getallzoneswithattractions",
    updateUrl: ""
  },
  {
    name: "PRICES",
    reducerName: "prices",
    url: "zones/GetAllZonesWithTickets",
    updateUrl: "zones/AddZonesWithTickets",
    formatDictUpdate: (token, data) => ({
      userToken: token,
      ZonesWithTicketsDto: data
    })
  },
  {
    name: "CLASS_DISCOUNTS",
    reducerName: "discounts",
    url: "discounts/GetAllSocialClassDiscounts",
    updateUrl: "discounts/AddSocialClassDiscounts/",
    formatDictUpdate: (token, data) => ({
      userToken: token,
      socialClassDiscounts: data
    })
  }
];
