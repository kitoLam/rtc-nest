import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import neo4j, { Driver } from "neo4j-driver";

@Injectable()
export class Neo4jService implements OnModuleInit, OnApplicationShutdown {
  private driver: Driver;

  onModuleInit() {
    const uri = process.env.NEO4J_URI || "bolt://localhost:7687";
    const user = process.env.NEO4J_USER || "neo4j";
    const password = process.env.NEO4J_PASSWORD || "password";

    this.driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  }

  async onApplicationShutdown() {
    await this.driver.close();
  }

  getDriver(): Driver {
    return this.driver;
  }

  // Helper method to run a read query
  async read(cypher: string, params?: Record<string, any>) {
    const session = this.driver.session({ defaultAccessMode: neo4j.session.READ });
    try {
      const result = await session.run(cypher, params);
      return result;
    } finally {
      await session.close();
    }
  }

  // Helper method to run a write query
  async write(cypher: string, params?: Record<string, any>) {
    const session = this.driver.session({ defaultAccessMode: neo4j.session.WRITE });
    try {
      const result = await session.run(cypher, params);
      return result;
    } finally {
      await session.close();
    }
  }
}
