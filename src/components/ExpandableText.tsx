'use client';

import { useState } from 'react';

interface ExpandableTextProps {
    text: string;
    maxLength?: number;
}

export default function ExpandableText({ text, maxLength = 300 }: ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldTruncate = text.length > maxLength;
    const displayText = isExpanded ? text : text.slice(0, maxLength);

    return (
        <div className="expandable-text">
            <p id="artist-profile" className="text-xs leading-relaxed mb-4 text-muted-foreground">
                {displayText}
                {shouldTruncate && !isExpanded && '...'}
            </p>
            {shouldTruncate && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                    aria-controls="artist-profile"
                    className="bg-clip-text text-transparent bg-gradient-to-tr from-violet-700 to-violet-300 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary rounded">
                    {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
}
