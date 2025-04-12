import AWS from 'aws-sdk';

const dynamo = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION });

export default async function handler(req, res) {
  const { postId } = req.query;

  if (!postId) return res.status(400).json({ error: 'Missing postId' });

  try {
    const result = await dynamo.get({
      TableName: process.env.DYNAMODB_TABLE,
      Key: { postId },
    }).promise();

    const data = result.Item || { views: 0, likes: 0 };
    res.status(200).json(data);
  } catch (err) {
    console.error('Stats Error:', err);
    res.status(500).json({ error: 'Could not fetch stats' });
  }
}