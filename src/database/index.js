import Dexie  from 'dexie';
const db = new Dexie('Locations');

db.version(1).stores({ 
    locations: "++id, locationname, addressline1, suiteno, addressline2, cityname, state, zipcode, phonenumber, timezone, facilitytimes,tags",
});

export default db;