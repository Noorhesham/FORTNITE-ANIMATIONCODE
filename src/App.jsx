import Hero from "./components/Hero";
import FortniteNewsSection from "./components/FortniteNews";
import PinnedCategoriesSection from "./components/PinnedSection";
import SmoothScroll from "./ScrollProviderContext";
import Section from "./components/Section";
import DrivingGrid from "./components/DrivingGrid";
import GsapTutorialPage from "./components/Gsap";
import HooksDeepDive from "./components/Hooks";
import Counter from "./Counter";
import HeroTutorial from "./components/HeroTutorial";
import Title from "./components/Title";
function App() {
  return (
    <div className=" min-h-screen bg-black ">
      {/* <Counter /> */}
      {/* <HooksDeepDive /> */}
      {/* <HeroTutorial /> */}
      {/* <GsapTutorialPage /> */}
      {/* <Title
        title="NEWS"
        description="The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?"
      /> */}

      <>
        <SmoothScroll />
        <Hero />
        <FortniteNewsSection />
        <PinnedCategoriesSection />
        <Section
          title="BY EPIC"
          description="The fate of the Islands at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?"
          buttonText="PLAY NOW"
          image="/p1.jpg"
        />

        <Section
          title="BATTLE PASS"
          description="FORTNITE CREW IS THE ULTIMATE MONTHLY FORTNITE SUBSCRIPTION OFFER. THIS SUBSCRIPTION INCLUDES THE BATTLE PASS, 1000 MONTHLY V-BUCKS, AND A MONTHLY CREW PACK (THE CREW PACK IS AN OUTFIT BUNDLE EXCLUSIVE TO FORTNITE CREW MEMBERS THAT'S YOURS TO KEEP!)"
          buttonText="LEARN MORE"
          image="/p1.jpg"
          reverse={true}
        />
        <Section
          title="XP BEYOND"
          description="WANT A BATTLE ROYALE BREAK? IN ADDITION TO BATTLE ROYALE AND ZERO BUILD, YOU CAN EARN XP TOWARDS YOUR BATTLE PASS IN ANY CREATOR-MADE ISLANDS THROUGH GAMEPLAY OR TIME PLAYED ON THE ISLAND. PLAY THE WAY YOU WANT TO UNLOCK KADO THORNE, KHABY LAME, AND MORE!"
          buttonText="LEARN MORE"
          image="/p3.jpg"
        />
        <section></section>
      </>
    </div>
  );
}

export default App;
