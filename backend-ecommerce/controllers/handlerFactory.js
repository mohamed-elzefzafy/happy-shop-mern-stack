const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const ApiError = require("../utils/apiError");
const ProductModel = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const reviewModel = require("../models/reviewModel");


const setImageUrl = (doc) => {
  if (doc.imageCover) {
    const imageUrl =  `${process.env.BASE_URL}/products/${doc.imageCover}`;
    doc.imageCover = imageUrl;
  }
  if (doc.images) {
    const imagesList = []; 
    doc.images.forEach((image) => {
      const imageUrl =  `${process.env.BASE_URL}/products/${image}`;
      imagesList.push(imageUrl);
    })
    doc.images = imagesList;
    
  }
}







exports.deleteOne = (model) => asyncHandler(async (req , res , next) => {

  const {id} = req.params;
const document = await model.findByIdAndDelete({_id : id});

if (!document) {
  return next(new ApiError(`not found item for id ${id}` , 404))
}



// trigger "remove" event when delete document
document.remove();


res.status(200).json({status : "deleted succesufully"});

});


exports.updateOne = (model) => asyncHandler(async (req , res , next) => {

  if ( model === ProductModel ) {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title)
    }
    } else {


      if (req.body.name) {
        req.body.slug = slugify(req.body.name)
      }
    }
    const document = await model.findByIdAndUpdate(req.params.id, req.body ,   {new : true});
  
    if (!document) {
       return next(new ApiError(`not found item for id ${req.params.id}` , 404))
     }
  
     // trigger "save" event when update document
     const doc = await document.save();
  

    if (model === ProductModel ) {
      setImageUrl(doc);
    }

     res.status(201).json({data : doc})
  
  
  });
  
  

  exports.createOne = (model) => asyncHandler(async (req , res) => {

    if ( model === ProductModel  ) {  
        req.body.slug = slugify(req.body.title)
      } else if (model === reviewModel ) {
            req.body.slug = undefined
      }
       else {
          req.body.slug = slugify(req.body.name)
        
      }

      const document  = await model.create(req.body);

      if (model === ProductModel ) {
        setImageUrl(document);
      }


      if (model === ProductModel ) {
        setImageUrl(document);
      }
  
      res.status(201).json({data : document});
  
  });
  





  exports.getOneById = (model , populationOptions) =>   asyncHandler( async (req , res , next) => {

    const {id} = req.params;
    // 1 - build query 
    let query = model.findById(id);
    if (populationOptions) {
      query = query.populate(populationOptions);
    }
      // 2 - excute query 
      const document = await query;

    if (!document)
    {
    return  next(new ApiError(`not found item for id ${req.params.id}` , 404))
    
    }  

    if (model === ProductModel ) {
      setImageUrl(document);
    }

    res.status(200).json({ data : document});
    
    
    })
    


    exports.getAll = (model , modelName) => asyncHandler( async (req , res) => {

      let filter = {};
      if (req.filterObject) {
        filter = req.filterObject
      }
      const countDocuments = await model.countDocuments();
      const apifeatures = new ApiFeatures( model.find(filter) , req.query).filter().sort().
      limitField().search(modelName).pagination(countDocuments)
    
    const {mongooseQuery , paginationResult} = apifeatures;
    const document = await mongooseQuery; 



        if (model === ProductModel ) {
          document.forEach((doc) => setImageUrl(doc));
        }
    

    res.status(200).json({results : document.length ,paginationResult ,  data : document});
    
    })