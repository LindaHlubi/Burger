var express = require("express");

var router = express.Router();



var burger = require("../models/burger.js");


router.get("/", (req, res) => {
  burger.selectAll ((data) => {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.get('/api/', (req, res) => {
	burger.selectAll((data) => {
		res.send(data);
	});
});

router.post('/api/burgers', (req, res) => {
	burger.create(['burger_name'], [req.body.burger_name], (result) => {
	
		res.json({ id: result.insertId });
	});
});
router.put('/api/burgers/:id', (req, res) => {
	const condition = `id = ${req.params.id}`;
	burger.update(
		{
			devoured: req.body.devoured,
		},
		condition,
		(result) => {
			if (result.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		}
	);
});

router.delete('/api/burgers/:id', (req, res) => {
	const condition = `id = ${req.params.id}`;

	burger.delete(condition, (result) => {
		if (result.affectedRows === 0) {

			return res.status(404).end();
		}
		res.status(200).end();
	});
});

// Export routes for server.js to use.
module.exports = router;
