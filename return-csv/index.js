const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const s3 = new AWS.S3();
    const csv_data = await s3.getObject({
        Bucket: 'intuit-oa-20190708',
        Key: 'csv/name.csv'
    }).promise();
    
    const response = {
        statusCode: 200,
        body: csv_data.Body.toString()
    };
    return response;
};
