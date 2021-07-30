const fs = require('fs');
const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://arthur:arthur123@controleestoquevendas.f1qzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(uri);
client.connect();

exports.getSaleById = async (req) => {
  const result = await client
    .db('master')
    .collection('sales')
    .findOne({ _id: req.params.id });
};

exports.createSale = async (newSaleListing) => {
  try {
    const result = await client
      .db('master')
      .collection('sales')
      .insertMany([...newSaleListing]);

    if (result) {
      return { status: 'success', code: 201 };
    }
  } catch (error) {
    return error;
  }
};

const listDatabases = async (client) => {
  const databases = await client.db().admin().listDatabases();
  console.log(databases);
  databases.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
};

exports.getAllSales = (_req, res) => {
  try {
    const sales = client.db('master').collection('sales').find({});

    return sales;
  } catch (error) {
  } finally {
    client.close();
  }

  return sales;
};
