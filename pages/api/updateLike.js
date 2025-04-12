import AWS from 'aws-sdk';

const dynamo = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { postId } = req.body;
  if (!postId) return res.status(400).json({ error: 'Missing postId' });

  try {
    const result = await dynamo.update({
      TableName: process.env.DYNAMODB_TABLE,
      Key: { postId },
      UpdateExpression: 'SET likes = if_not_exists(likes, :zero) + :inc',
      ExpressionAttributeValues: {
        ':inc': 1,
        ':zero': 0,
      },
      ReturnValues: 'UPDATED_NEW',
    }).promise();

    res.status(200).json({ likes: result.Attributes.likes });
  } catch (err) {
    console.error('Like Error:', err);
    res.status(500).json({ error: 'Could not update like count' });
  }
}