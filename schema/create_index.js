db.Locations.createIndex( { name:1, }, { unique:1 } );

db.Locations.createIndex( { name:1, building:1 } );