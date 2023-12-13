import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPosts(slug) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Apprwrite service:: getPosts()::", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Apprwrite service:: getPosts()::", error);
      return false;
    }
  }
  async createPost(title, slug, content, featuredImage, status, userId) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Apprwrite service:: createPost()::", error);
      return false;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Apprwrite service:: updatePost()::", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Apprwrite service:: deletePost()::", error);
      return false;
    }
  }

  // Storage Service
  // upload a file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Apprwrite service:: uploadFile()::", error);
      return false;
    }
  }
  // Delete a file
  async DeleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwwriteBucketId, fileId);
    } catch (error) {
      console.log("Apprwrite service:: deleteFile()::", error);
      return false;
    }
  }
  // File Preview
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwwriteBucketId, fileId).href;
    } catch (error) {
      console.log("Apprwrite service:: getFilePreview()::", error);
      return false;
    }
  }
}

const service = new service();

export default service;
