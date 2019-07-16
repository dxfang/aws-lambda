const AWS = require('aws-sdk')

exports.handler = async (event) => {
    const s3 = new AWS.S3();
    const json_data = await s3.getObject({
        Bucket: 'intuit-oa-20190708',
        Key: 'json/name.json'
    }).promise();
    
    const response = {
        statusCode: 200,
        body: json_data.Body.toString()
    };
    return response;
};
