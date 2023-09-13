import * as config from '../config.json';
import * as cdk from 'aws-cdk-lib';
import { Neo4j } from './graph-database';

export class Neo4jStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const neo4j = new Neo4j(this, 'Neo4j');

  }
}
