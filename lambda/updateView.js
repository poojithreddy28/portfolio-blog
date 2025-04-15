const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { postId } = JSON.parse(event.body || '{}');

  if (!postId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing postId' }),
    };
  }

  try {
    const result = await dynamo.update({
      TableName: process.env.DYNAMODB_TABLE,
      Key: { postId },
      UpdateExpression: 'SET #v = if_not_exists(#v, :zero) + :inc',
      ExpressionAttributeNames: {
        '#v': 'views',
      },
      ExpressionAttributeValues: {
        ':inc': 1,
        ':zero': 0,
      },
      ReturnValues: 'UPDATED_NEW',
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ views: result.Attributes.views }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not update view count' }),
    };
  }
};