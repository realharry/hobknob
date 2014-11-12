angular.module("config", [])

.constant("ENV", {
  "RequiresAuth": false,
  "etcdHost": "127.0.0.1",
  "etcdPort": "4001",
  "hobknobHost": "localhost",
  "hobknobPort": "3006",
  "categories": [
    {
      "name": "Simple Toggles"
    },
    {
      "name": "Domain Toggles",
      "id": 1,
      "values": [
        "com",
        "co.uk"
      ]
    },
    {
      "name": "Locale Toggles",
      "id": 2,
      "values": [
        "en-GB",
        "en-US",
        "fr-FR",
        "de-DE"
      ]
    }
  ]
})

;