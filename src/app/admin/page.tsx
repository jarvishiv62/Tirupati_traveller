// src/app/admin/page.tsx — Admin dashboard stub
export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="text-gray-500 mt-2">Full implementation in Chunk 10.</p>
      <div className="mt-6 flex gap-4">
        <a href="/admin/blogs" className="btn-primary">Manage Blogs</a>
        <a href="/admin/blogs/create" className="btn-outline">Create Blog Post</a>
      </div>
    </div>
  );
}
