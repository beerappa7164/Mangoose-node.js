


const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/shop';
const uri= 'mongodb+srv://beerappakoraba145:Beera@cluster0.nkocgop.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri);

// Creation of schema
const detailsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    comments: [{
        user: String,
        text: String
    }],
    metadata: {
        views: Number,
        likes: Number
    }
});

// Creation of model
const details = mongoose.model('details', detailsSchema,'details');

const data1={
    title: 'inseted data',
    content: 'Electric vehicles (EVs) are reshaping the automotive industry.',
    author: 'william',
    comments: [
      {
        user: 'EVEnthusiast',
        text: "I'm excited about the future of EVs! They're a game-changer for the environment."
      },
      {
        user: 'GreenTechAdvocate',
        text: 'Great overview! EVs are paving the way towards a greener future.'
      }
    ],
    metadata: { views: 2500, likes: 1000 }
}

const main = async () => {
    try {
        
        //Simply finding based on the condition
        // const data = await detailsone.find({  author: 'Dr. Sarah Adams'});
        // const data = await detailsone.find({  'metadata.views': {$eq : 900}});
        // console.log(data);

        


        //inserting a new documenmts
        // await details.insertMany(data1)
        // const data = await details.find({ 'author':'william'});
        // console.log(data);

        

        //updating the previous query
        // const updatequery= await details.findOneAndUpdate(
        //     {'author':'william'},
        //     {$set:{title:'new insered data'}}
        // )

        // const data = await details.find({ 'author':'william'});
        // console.log(data);


        


       
        //deleting the query
        await details.findOneAndDelete({
             author: 'Dr. Thomas Clarke'
        })
        const data = await details.find({ author: 'Dr. Thomas Clarke'});
        console.log(data);





    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
};

main();
