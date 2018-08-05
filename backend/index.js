const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_TRIPS_QUERY = 'select * from trip';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'pixafari',
	multipleStatements: true
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

//--------------------------------//
//------Unique ID Generator-------//
//--------------------------------//
var ID = function () {
  	// Math.random should be unique because of its seeding algorithm.
  	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
  	// after the decimal.
  	return '_' + Math.random().toString(36).substr(2, 9);
};



//--------------------------------//
//---------Add New Trip----------//
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


//--------------------------------//
//---------Show all trips----------//
//-------------------------------//
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


//--------------------------------//
//---------Profile Page----------//
//-------------------------------//

app.get('/profile', (req, res) => {
	const { userName } = req.query;
	const SELECT_PROFILE = `drop view t3;

create view t3 as (select groupID, count(*) as total from (
select member.groupID as groupID, member.userID as userID from 
(select member.groupID as groupID from member 
join user on user.userID = member.userID 
where user.userName = '${userName}') AS t1
join member on member.groupID = t1.groupID) as t2
group by groupID);

select trip.trip_name as trip_name, t3.groupID as groupID, COALESCE(votes,0) as votes, total  from (
select t3.groupID as groupID, count(*) as votes from t3
join vote on vote.groupID = t3.groupID
group by groupID) as t4
right join t3 on t3.groupID = t4.groupID
left join trip on trip.groupID = t3.groupID; 
`;
	connection.query(SELECT_PROFILE, (err, results) => {
		if(err) {
			return res.send(err)
		} 
		else {
			return res.json({
				data: results[2]
			})
		}
	});
});


//--------------------------------//
//---------Result Page----------//
//-------------------------------//
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