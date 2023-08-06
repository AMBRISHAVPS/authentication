import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
  })
export class Product {
    @Prop()
    productName:string;

    @Prop()
    isAvailable:boolean;

}
export const productSchema = SchemaFactory.createForClass(Product);

