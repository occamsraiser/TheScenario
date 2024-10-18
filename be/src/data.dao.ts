import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Data } from "./data.db";

@Injectable()
export class DataDao {

    constructor(
        @InjectModel(Data.name, "local")
        private dataModel: Model<Data>,
    ) {}

    // VM -- added below methods to communicate w/ the db. 
    // Organized these guys in the DAO layer so we could switch out
    // of mongoose w/o having to change services or the controller.

    async getAll(): Promise<Data[]> {
        return this.dataModel.find();
    }

    async getById(id: string): Promise<any> {
        const matchedInstance = await this.dataModel.findById(id);
        if (!matchedInstance){
            throw new NotFoundException("get: id '"+id+"' not found");
        }
        return matchedInstance;
    }

    async getTestData(): Promise<Data[]>{
        // Simulate an async/await api call with delay
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve([
                    { _id: '1', content: 'This is item 1 blah blah' },
                    { _id: '2', content: 'This is item 2 bloo bloo' },
                    { _id: '3', content: 'This is item 3 blee blee' },
                ]);
            }, 1000);
        });
    }

    async create(content: string): Promise<Data> {
        return this.dataModel.create({content});
    }

    async update(id: string, content: string): Promise<Data> {
        const matchedInstance = await this.getById(id);
        if (!matchedInstance){
            throw new NotFoundException("update: id '"+id+"' not found");
        }
        matchedInstance.content = content;
        await matchedInstance.save();
        return matchedInstance;
    }

    async delete(id: string): Promise<any> {
        const deletion = await this.dataModel.deleteOne({_id: id});
        if (deletion.deletedCount === 0){
            throw new NotFoundException("delete: id '"+id+"' not found");
        }
        return deletion;
    }
}