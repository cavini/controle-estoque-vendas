const fs = require('fs');
const { mongoClient, MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://arthur:arthur123@controleestoquevendas.f1qzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(uri);
client.connect();

exports.getSellerById = async (req) => {
  const result = await client
    .db('master')
    .collection('sellers')
    .findOne({ _id: req.params.id });
};

exports.createSeller = async (newSeller) => {
  try {
    const result = await client
      .db('master')
      .collection('sellers')
      .insertOne(newSeller);

    if (result) {
      return { status: 'success', code: 201 };
    }
  } catch (error) {
    return error;
  }
};

exports.getAllsellers = async (_req, res) => {
  try {
    const sellers = await client.db('master').collection('sellers').find();
    res.status(200).json({
      status: 'success',
      data: {
        sellers,
      },
    });
  } catch (error) {
  } finally {
    await client.close();
  }
};

exports.getAllSellers = async (_req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      sellers,
    },
  });
};
