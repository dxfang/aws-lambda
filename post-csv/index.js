const AWS = require('aws-sdk')

exports.handler = async (event) => {

    const s3 = new AWS.S3();

    // Create 'name.csv' file and upload to S3
    await s3.upload({
        Bucket: 'intuit-oa-20190708',
        Key: 'csv/name.csv',
        Body: event.body
    }).promise();
    
    const response = {
        statusCode: 200,
        body: event.body
    };
    return response;
};