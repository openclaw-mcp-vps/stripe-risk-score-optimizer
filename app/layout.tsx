import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Risk Score Optimizer — Reduce Account Suspension Risk",
  description: "Analyze transaction patterns and flag high-risk activities before Stripe suspends your account. Real-time alerts, ML risk scores, and actionable insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1651cb34-83b1-4f85-a26a-0d29b5047a9f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
