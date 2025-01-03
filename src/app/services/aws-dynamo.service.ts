import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk"
import { AWS_CONFIG } from '../classes/constants';

@Injectable({
  providedIn: 'root'
})
export class AwsDynamoService {
  private dynamoDb: AWS.DynamoDB.DocumentClient;

  constructor() {   
    AWS.config.update(AWS_CONFIG);
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
}

getItems(tableName: string): Promise<any> {
    const params = {
        TableName: tableName
    };
    return this.dynamoDb.scan(params).promise();
}

addItem(tableName: string, item: any): Promise<any> {
    const params = {
        TableName: tableName,
        Item: item
    };
    return this.dynamoDb.put(params).promise();
}

  deleteItem(tableName: string, key: { [key: string]: any }): Promise<any> {
    const params = {
      TableName: tableName,
      Key: key
    };
    return this.dynamoDb.delete(params).promise();
  }
}
