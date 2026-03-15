import HeroSection from "@/components/HeroSection";
import AuthorityStats from "@/components/AuthorityStats";
import FoundersSection from "@/components/FoundersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian selection:bg-gold/30 selection:text-gold">
      <HeroSection />
      <AuthorityStats />
      <FoundersSection />
    </main>
  );
}
