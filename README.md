# AWS Lambda - CSV to JSON Converter

The post-csv API supports a POST method, which takes a CSV formatted body and stores as a CSV file into an S3 bucket. Next, csv-to-json parser is triggered upon the creation of the CSV file in S3 and converts this CSV file into a JSON file. Both CSV file and JSON file content can be fetched by 2 APIs with GET method(return-csv/return-json).