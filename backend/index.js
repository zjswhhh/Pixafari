const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_TRIPS_QUERY = 'select * from trip';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'pixafari'
});

connection.connect(err => {
	if(err) {
		return err;
	}
});



app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello from Pixafari server,  go to /trips to see all the trips.')
});

//------Unique ID Generator-------//

var ID = function () {
  	// Math.random should be unique because of its seeding algorithm.
  	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
  	// after the decimal.
  	return '_' + Math.random().toString(36).substr(2, 9);
};

//-------------------------------//

app.get('/trips/add', (req, res) => {
	const { trip_name, start_date, end_date, budget, destination, trip_type} = req.query;
	const groupID = ID();
	const INSERT_TRIPS_QUERY = `insert into trip (groupID, trip_name, start_date, end_date, budget, destination, trip_type) values ('${groupID}', '${trip_name}', '${start_date}', '${end_date}', ${budget}, '${destination}', '${trip_type}')`;
	connection.query(INSERT_TRIPS_QUERY, (err, results) => {
		if(err) {
			return res.send(err)
		}
		else {
			return res.send('Successfully added trip.')
		}
	});
	
});

app.get('/trips', (req, res) => {
	connection.query(SELECT_ALL_TRIPS_QUERY, (err, results) => {
		if(err) {
			return res.send(err)
		} 
		else {
			return res.json({
				data: results
			})
		}
	});
});

app.get('/results', (req, res) => {
	const { trip_name } = req.query;
	const SELECT_RESULT = `select * from trip where trip_name = '${trip_name}'`;
	connection.query(SELECT_RESULT, (err, results) => {
		if(err) {
			return res.send(err)
		}
		else {
			return res.json({
				data: results
			})
		}
	});
});

app.listen(4000, () => {
	console.log(`Pixafari server listening on port 4000`)
});