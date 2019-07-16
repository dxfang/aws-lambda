const AWS = require('aws-sdk');
const csvjson = require('csvjson');		// A third-party module that parses CSV to JSON

exports.handler = async (event) => {
	await csvToJson();

	const response = {
		statusCode: 200,
		body: JSON.stringify('Process finished.'),
	};
	return response;
};

function csvToJson() {
	return new Promise((resolve, reject) => {
		const s3 = new AWS.S3();

		const toObject = csvjson.stream.toObject();
		const stringify = csvjson.stream.stringify();

		let pipeline = s3.getObject({
			Bucket: 'intuit-oa-20190708',
			Key: 'csv/name.csv'
		})
			.createReadStream()
			.pipe(toObject)
			.pipe(stringify);
			
		s3.upload({
			Bucket: 'intuit-oa-20190708',
			Key: 'json/name.json',
			Body: pipeline
			}
		).send((err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	})
}
