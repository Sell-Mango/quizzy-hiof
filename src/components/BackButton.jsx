import React from "react";

export default function BackButton({ label, reset, onSelect }) {

    const handleClick = () => {
        console.log("clicked");
        onSelect(reset, null)
    }

    return (
        <button
            className="inline-flex items-center px-4 py-2 stroke-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-colors"
            onClick={handleClick}
        >
            Tilbake til {label}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    )
}