import type { Metadata } from 'next';
import { AuthGuard } from '@/components/auth-guard';

export const metadata: Metadata = {
  title: 'Feed | Geev',
  description: 'Browse giveaways and help requests',
};

export default function FeedPage() {
  return (
    <AuthGuard>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Feed</h1>
        <p className="text-muted-foreground">
          Feed content will be implemented here
        </p>
      </div>
    </AuthGuard>
  );
}
