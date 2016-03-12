var db = new Dexie("MyDatabase");

// Define Database Schema
db.version(1).stores({
    notes: "ip_recips,recip_condition,zip_code,county,er_visits,er_recips,major_diagnostic_category,pisode_disease_category,dual_status,year,ip_admits"
});

// Open Database
db.open(); 

db.transaction('rw', db.notes, function () {

    // Let's add some data to db:
    db.notes.add({ip_recips : "1735",recip_condition : "7506",zip_code : "10456",county : "Bronx ",er_visits : "6860",
  er_recips : "2798",
  major_diagnostic_category : "Diseases And Disorders Of The Cardiovascular System",
  episode_disease_category : "Hypertension",
  dual_status : "Non-Dual",
  year : "2012",
  ip_admits : "4098"});
   
   console.log(db.notes);

    // Let's query the db
    db.notes.where('ip_recips').equals(1735).each(function(notes) {
        console.log("Found close friend: ");
    });
    

}).catch(function(err) {

    // Catch any error event or exception and log it:
    console.error(err.stack || err);

});

