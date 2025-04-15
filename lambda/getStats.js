const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const postId = event.queryStringParameters?.postId;

  if (!postId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing postId' }),
    };
  }

  try {
    const result = await dynamo.get({
      TableName: process.env.DYNAMODB_TABLE,
      Key: { postId },
    }).promise();

    const data = result.Item || { views: 0, likes: 0 };

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not fetch stats' }),
    };
  }
};