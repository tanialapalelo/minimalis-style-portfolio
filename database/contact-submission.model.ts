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
export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 2. Create schema
const ContactSchema: Schema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
},
{ timestamps: true } 
);

// 3. Create model
const Contact = models.Contact || model("Contact", ContactSchema);

// 4. Export model
export default Contact