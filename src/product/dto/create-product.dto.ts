import { IsBoolean, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    productName:String;
    
    @IsBoolean()
    isAvailable:Boolean;
}
