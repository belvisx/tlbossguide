import { bosses } from "@/lib/bosses";
import { PhaseSidebar } from "../_components/phases";
import { MapPin } from "lucide-react";
import FavoriteButton from "../_components/favorite";

interface BossPageParams {
    id: string;
}

interface Props {
    params: BossPageParams;
}

export function generateStaticParams() {
    return bosses.map((boss) => ({
        id: boss.name.toLowerCase(),
    }));
}

export default function BossPage({ params }: Props) {
    const boss = bosses.find((b) => b.name.toLowerCase() === decodeURIComponent(params.id.toLowerCase()));

    if (!boss) {
        return <h1 className="text-center text-2xl font-bold mt-10">Boss não encontrado</h1>;
    }

    return (
        <div className="flex flex-col items-center my-10 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl w-full text-white p-6 shadow-lg rounded-lg">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center space-x-4">
                        <img src={boss.icon} alt={boss.name} className="w-16 h-16 object-contain" />
                        <h1 className="text-4xl font-bold">{boss.name}</h1>
                    </div>
                    <img className="w-80 h-80 object-cover rounded-lg mt-4" src={boss.img} alt={boss.name} />
                </div>
                <div className="flex flex-col text-center lg:text-left">
                    <div className="flex justify-center mb-12">
                        <FavoriteButton boss={boss} />
                    </div>
                    <p className="text-lg">{boss.description}</p>
                    <a className="text-lg font-semibold" href={boss.location} target="_blank">
                        <div className="flex justify-center items-center text-center mt-12 rounded-2xl bg-[#6C3232] p-2 gap-2">
                            <MapPin />
                            <span className="text-lg font-bold">Location</span>
                        </div>
                    </a>
                </div>
            </div>
            {boss.strategy && (
                <div className="mt-8 w-full max-w-5xl text-white p-6 shadow-lg rounded-lg">
                    {boss.strategy.phases && <PhaseSidebar bossName={boss.name} />}
                </div>
            )}
        </div>
    );
}
