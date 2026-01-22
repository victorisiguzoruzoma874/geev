import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login | Geev',
  description: 'Connect your wallet to get started',
};

export default function LoginPage() {
  return (
    <div className="container py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Geev</h1>
        <p className="text-muted-foreground text-center mb-8">
          Connect your wallet to start giving and receiving
        </p>
        
        <div className="bg-card border rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Wallet connection will be implemented here
          </p>
          <Link 
            href="/"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
