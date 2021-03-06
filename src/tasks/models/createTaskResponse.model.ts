import { ApiProperty } from "@nestjs/swagger";
import { TaskStatus } from "./task-status.enum";

export class createTaskResponse {
    @ApiProperty({type:String,example:'string'})
    id:string

    @ApiProperty({type:String,example:'string'})
    title:string

    @ApiProperty({type:String,example:'string'})
    description:string

    @ApiProperty({ type:String, example:'OPEN'})
    status:TaskStatus
}