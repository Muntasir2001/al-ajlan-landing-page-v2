import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import PracticeAreaColumn from "./PracticeAreaColumn";

const OurPracticeAreas = () => {
    return (
        <Layout className="py-12 md:py-24">
            <div className="flex justify-between flex-col md:flex-row gap-12 items-center text-right">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl text-black">Our Practice Areas</h2>
                    <p className="text-sm">a glimpse into our expertise...</p>
                </div>

                <Button variant="outline" className="text-black">
                    Explore More
                </Button>
            </div>

            <div className="flex gap-8 mt-12">
                {/* Left Panel with Logo */}
                <div className="relative shrink-0">
                    <div className="w-50 h-full border-4 border-black relative shadow-[3px_3px_12px_rgba(0,0,0,0.12)]">
                        {/* Subtle overlapping rectangle - horizontal */}
                        <div className="absolute top-3 left-3 w-50 h-full bg-gray-300 shadow-[2px_2px_8px_rgba(0,0,0,0.08)] -z-10"></div>
                        {/* AH. text at bottom */}
                        <div className="absolute bottom-4 left-4 font-bold text-black text-3xl uppercase">
                            AH.
                        </div>
                    </div>
                </div>

                {/* Services List - Two Columns */}
                <div className="flex gap-12 md:gap-16 md:ml-auto">
                    <PracticeAreaColumn
                        services={[
                            "Company Incorporation",
                            "Commercial Advisory",
                            "Courts Representation",
                            "Regulatory & Compliance",
                            "Local Content Compliance",
                            "Bankruptcy",
                            "Labor Disputes",
                            "Franchising Advisory",
                            "Administrative Disputes",
                        ]}
                    />
                    <PracticeAreaColumn
                        services={[
                            "Restructuring",
                            "Mergers & Acquisitions",
                            "Litigation, Arbitration & Mediation",
                            "Real Estate Matters",
                            "Workplace Policies & Internal Regulations",
                            "Intellectual Property",
                            "Inheritance & Wills Distribution",
                            "Banking & Financial Disputes",
                            "Contracts & Agreements Drafting",
                        ]}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default OurPracticeAreas;
