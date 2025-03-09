import Link from "next/link";
import { House } from "lucide-react";

export default function DimensionalTrial(){
    return(
        <div className="flex justify-center mt-8 w-full sm:w-auto flex-wrap">
            <img src="/giphy.gif" alt="gif" />
        <div  className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-24
            text-6xl text-[#962D2D]">404 ERROR</h1>
            <p className="text-center p-6">This page is under construction. <br />
            Please come back later.
            </p>
            <div className="flex justify-center items-center rounded-lg p-2 bg-[#326C43] gap-2 hover:opacity-50">
                <House/>
                <Link className="text-center" href='/'> Go home</Link>
            </div>
        </div>
        </div>
    )

}