// src/models/Blog.ts
// Blog post Mongoose schema
// Used by API routes in /api/blogs/

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageId?: string;
  imageUrl?: string;
  author: string;
  tags: string[];
  category: string;
  publishedAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true, maxlength: 300 },
    imageId: { type: String },
    imageUrl: { type: String },
    author: { type: String, default: 'Tirupati Travel' },
    tags: [{ type: String, trim: true }],
    category: { type: String, default: 'Travel Tips' },
    publishedAt: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: false },
    metaTitle: { type: String },
    metaDescription: { type: String },
  },
  {
    timestamps: true,
  }
);

// Index for fast slug lookups and listing
BlogSchema.index({ slug: 1 });
BlogSchema.index({ isPublished: 1, publishedAt: -1 });
BlogSchema.index({ tags: 1 });

// Avoid recompiling model on hot-reloads in dev
const Blog: Model<IBlog> =
  mongoose.models.Blog ?? mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
