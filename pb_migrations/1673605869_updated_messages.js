migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48lhtjuvow4quun")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnzhruyz",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48lhtjuvow4quun")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnzhruyz",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
