import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const userSchema = new Schema({
  schemas: [{
    // type: String,
    // required: false
  }],
  name: {
    givenName: {
      type: String,
      required: false
    },
    familyName: {
      type: String,
      required: false
    }
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  emails: [
    {
      type: {
        type: String
      }
    }
  ]
});


module.exports = mongoose.model("UserSchema", userSchema);


// "schemas": [],
//   "name": {
//     "givenName": "Kim",
//     "familyName": "Berry"
//   },
//   "userName": "kim",
//   "password": "abc123",
//   "emails": [
//     {
//       "type": "home",
//       "value": "kim@gmail.com",
//       "primary": true
//     },
//     {
//       "type": "work",
//       "value": "kim@wso2.com"
//     }
//   ],
//   "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
//     "employeeNumber": "1234A",
//     "manager": {
//       "value": "Taylor"
//     }
//   }
// }