import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy — Palworld Breeding Calculator | PalBreed" };

export default function RefundPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1>Refund Policy</h1>
        <p>Palworld Breeding Calculator does not currently offer paid products, subscriptions, or services. All tools on palbreedingcalculator.net are free to use.</p>
        <p>If we introduce paid features in the future, this Refund Policy will be updated accordingly.</p>
      </div>
    </section>
  );
}
