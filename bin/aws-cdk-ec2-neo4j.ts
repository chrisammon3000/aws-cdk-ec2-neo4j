#!/usr/bin/env node
import 'source-map-support/register';
import * as config from '../config.json';
import * as cdk from 'aws-cdk-lib';
import { Neo4jStack } from '../lib/aws-cdk-ec2-neo4j-stack';

const app = new cdk.App();
const appStack = new Neo4jStack(app, 'Neo4jStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
});

for (const [key, value] of Object.entries(config.tags)) {
    cdk.Tags.of(appStack).add(key, value);
}