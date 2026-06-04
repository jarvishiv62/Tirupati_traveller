// src/app/admin/layout.tsx
// Admin auth guard layout — TODO: CHUNK 10 wire to real auth
import { redirect } from 'next/navigation';
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // TODO: CHUNK 10 — replace stub with real session check
  // const session = await getServerSession();
  // if (!session) redirect('/admin-login');
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-secondary text-white py-3 px-6 flex items-center justify-between">
        <span className="font-semibold">Tirupati Travel — Admin</span>
        <a href="/" className="text-sm text-white/70 hover:text-white">← View Site</a>
      </div>
      {children}
    </div>
  );
}
