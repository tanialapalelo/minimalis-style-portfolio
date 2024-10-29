import { Schema, models, model, Document } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface ISocialLink {
  platform: string;
  url: string;
}

export interface IUser extends Document {
  clerkId: string;
  name: string;
  roles: string[]; // Changed to array of strings
  description: string;
  email: string;
  social_links: ISocialLink[];
  cv_link: string; 
  createdAt?: Date; // Optional field, added by Mongoose timestamps
  updatedAt?: Date; // Optional field, added by Mongoose timestamps
}

const SocialLinkSchema: Schema = new Schema({
  platform: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i.test(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});

// 2. Create a Schema corresponding to the document interface.
const UserSchema: Schema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true },
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name must be at least 2 characters long'],
    },
    roles: {
      type: [String], // Changed to an array of strings
      required: [true, 'At least one role is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'At least one role is required',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (v: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    social_links: {
      type: [SocialLinkSchema],
      default: [],
    },
    cv_link: {
      type: String,
      validate: {
        validator: (v: string) => /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i.test(v),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// 3. Create a Model.
// models.User to check if the model already exists
// if not, create it: model called User is based on the UserSchema
const User = models.User || model("User", UserSchema);

export default User;

/* Note:
 The steps for creating a new model:
 1. Import everything from mongoose 
 2. Create a typescript interface so we always know which fields we have
 3. Create a schema for the database
 4. Turn the schema into a model
 5. Export the model so you can use it in your project
*/
