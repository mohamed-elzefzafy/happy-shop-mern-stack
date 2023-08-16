const  Mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Mongoose.Schema({
  name : {
    type : String,
    trim : true,
    required : [true , "user name is required"],
  },
  slug : {
    type : String,
    lowercase : true
  },
  email : {
    type : String,
    required : [true , "email is required"],
    unique : true,
    lowercase : true
  },
  phone : String,
  profileImage : String,
  password : {
    type : String,
    required : [true , "password is required"],
    minlength : [6 , "password must be at least 6 characters" ]
  }, 
  passwordChangedAt : Date,
  passwordRestCode : String,
  passwordRestCodeExpires : Date,
  passwordRestverified : Boolean,
  role : {
    type : String,
    enum :  ["user" , "manger" , "admin"],
    default : "user"
  },
  active : {
    type : Boolean,
    default : true,
  },
  // child refrence (one to many)
  wishList : [
    {type : Mongoose.Schema.ObjectId ,
     ref : "Product"
    }
  ],
  addresses : [
    {
      id : {type : Mongoose.Schema.Types.ObjectId} ,
      alias : String ,
      details : String , 
      phone : String ,
      city : String ,
      postalCode : String
    }
  ]
} , {timestamps : true});


const setImageUrl = (doc) => {
  if (doc.profileImage) {
    const imageUrl =  `${process.env.BASE_URL}/Users/${doc.profileImage}`;
    doc.profileImage = imageUrl;
  }
}

userSchema.post("init" , (doc)=> {
setImageUrl(doc)
})


userSchema.post("save" , (doc)=> {
  setImageUrl(doc)
  })


userSchema.pre("save" , async function(next) {
  if (!this.isModified("password")) 
  return next();
  //hash the password
  this.password = await bcrypt.hash(this.password , 12);
  next();
})


const UserModel = Mongoose.model("User" , userSchema);

module.exports = UserModel;


