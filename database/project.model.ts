/* Note:
 The steps for creating a new model:
 1. Import everything from mongoose 
 2. Create a typescript interface so we always know which fields we have
 3. Create a schema for the database
 4. Turn the schema into a model
 5. Export the model so you can use it in your project
*/

import { Schema, models, model, Document } from "mongoose";

// 1. Create interface
export interface IProject extends Document {
  title: string;
  description: string;
  url: string;
  codeUrl: string;
  imageUrl: string;
  isFeatured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Create schema
const ProjectSchema: Schema = new Schema<IProject>({
  title: { type: String, required: true },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters long"],
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) =>
        /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i.test(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  codeUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) =>
        /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i.test(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isFeatured: { type: Boolean, required: true },
},
{ timestamps: true } 
);

// 3. Create model
const Project = models.Project || model("Project", ProjectSchema);

// 4. Export model
export default Project