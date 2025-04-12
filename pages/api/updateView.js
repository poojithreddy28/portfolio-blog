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
      UpdateExpression: 'SET #v = if_not_exists(#v, :zero) + :inc',
      ExpressionAttributeNames: {
        '#v': 'views', // 💥 Use alias for reserved word
      },
      ExpressionAttributeValues: {
        ':inc': 1,
        ':zero': 0,
      },
      ReturnValues: 'UPDATED_NEW',
    }).promise();

    res.status(200).json({ views: result.Attributes.views });
  } catch (err) {
    console.error('View Error:', err);
    res.status(500).json({ error: 'Could not update view count' });
  }
}