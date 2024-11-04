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
export interface IWorkExperience extends Document {
  jobTitle: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Create schema
const WorkExperienceSchema: Schema = new Schema<IWorkExperience>({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters long"],
  }
},
{ timestamps: true } 
);

// 3. Create model
const WorkExperience = models.WorkExperience || model<IWorkExperience>("WorkExperience", WorkExperienceSchema);

// 4. Export model
export default WorkExperience;