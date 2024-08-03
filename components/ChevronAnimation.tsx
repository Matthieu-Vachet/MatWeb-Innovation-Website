import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ChevronAnimation: React.FC = () => {
    return (
        <div className="flex gap-5">
            <div>
                <p className="text-lg text-gray-700">Faites défiler</p>
            </div>
            <div className="flex justify-center items-center relative space-x-2">
                <div className="chevron animate-chevron">
                    <FaChevronRight className="text-2xl text-gray-700" />
                </div>
                <div className="chevron animate-chevron delay-1">
                    <FaChevronRight className="text-2xl text-gray-700" />
                </div>
                <div className="chevron animate-chevron delay-2">
                    <FaChevronRight className="text-2xl text-gray-700 -mx-5" />
                </div>
            </div>
        </div>
    );
};

export default ChevronAnimation;
