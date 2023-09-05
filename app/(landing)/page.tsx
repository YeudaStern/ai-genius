import { LandingNavbar } from "@/components/loading-navbar";
import { LandingHero } from "@/components/loading-hero";
import { LandingContent } from "@/components/loading-content";

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
            <p className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-white text-center p-3"> Created by Yehuda Shtern - All rights reserved</p>

        </div>
    );
}

export default LandingPage;