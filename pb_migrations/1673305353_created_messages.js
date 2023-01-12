migrate((db) => {
  const collection = new Collection({
    "id": "48lhtjuvow4quun",
    "created": "2023-01-09 23:02:33.426Z",
    "updated": "2023-01-09 23:02:33.426Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2rehastm",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fnzhruyz",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("48lhtjuvow4quun");

  return dao.deleteCollection(collection);
})
