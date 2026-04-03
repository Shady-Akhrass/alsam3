import React from 'react';

export interface SkeletonLine {
    width?: string | number;
    height?: string | number;
    margin?: string | number;
    borderRadius?: string | number;
}

export interface SkeletonBlock {
    width?: string | number;
    height?: string | number;
    margin?: string | number;
    borderRadius?: string | number;
    lines?: SkeletonLine[];
}

export interface SkeletonConfig {
    blocks?: SkeletonBlock[];
    lines?: SkeletonLine[];
    circle?: {
        size?: string | number;
        margin?: string | number;
    };
    avatar?: {
        size?: string | number;
        margin?: string | number;
    };
    layout?: 'vertical' | 'horizontal' | 'grid';
    spacing?: string | number;
    animation?: 'pulse' | 'wave' | 'shimmer';
    className?: string;
}

interface SkeletonProps extends SkeletonConfig {
    loading?: boolean;
    children?: React.ReactNode;
}

export default function Skeleton({
    loading = true,
    children,
    blocks = [],
    lines = [],
    circle,
    avatar,
    layout = 'vertical',
    spacing = '1rem',
    animation = 'pulse',
    className = '',
}: SkeletonProps) {
    if (!loading) {
        return <>{children}</>;
    }

    const renderLine = (line: SkeletonLine, index: number) => {
        const style: React.CSSProperties = {
            width: line.width || '100%',
            height: line.height || '1rem',
            margin: line.margin || '0 0 0.5rem 0',
            borderRadius: line.borderRadius || '0.25rem',
        };

        return (
            <div
                key={`line-${index}`}
                className={`skeleton-line skeleton-${animation}`}
                style={style}
            />
        );
    };

    const renderBlock = (block: SkeletonBlock, index: number) => {
        const style: React.CSSProperties = {
            width: block.width || '100%',
            height: block.height || '100px',
            margin: block.margin || '0 0 1rem 0',
            borderRadius: block.borderRadius || '0.5rem',
        };

        return (
            <div
                key={`block-${index}`}
                className={`skeleton-block skeleton-${animation}`}
                style={style}
            >
                {block.lines && block.lines.map((line, lineIndex) => renderLine(line, lineIndex))}
            </div>
        );
    };

    const renderCircle = () => {
        if (!circle) return null;

        const style: React.CSSProperties = {
            width: circle.size || '40px',
            height: circle.size || '40px',
            margin: circle.margin || '0 0 1rem 0',
            borderRadius: '50%',
        };

        return (
            <div
                className={`skeleton-circle skeleton-${animation}`}
                style={style}
            />
        );
    };

    const renderAvatar = () => {
        if (!avatar) return null;

        const style: React.CSSProperties = {
            width: avatar.size || '48px',
            height: avatar.size || '48px',
            margin: avatar.margin || '0 0 1rem 0',
            borderRadius: '50%',
        };

        return (
            <div
                className={`skeleton-avatar skeleton-${animation}`}
                style={style}
            />
        );
    };

    const containerStyle: React.CSSProperties = {
        display: layout === 'horizontal' ? 'flex' : 'block',
        flexDirection: layout === 'horizontal' ? 'row' : 'column',
        gap: spacing,
        flexWrap: layout === 'grid' ? 'wrap' : 'nowrap',
    };

    return (
        <div className={`skeleton-container ${className}`} style={containerStyle}>
            {renderAvatar()}
            {renderCircle()}
            {blocks.map((block, index) => renderBlock(block, index))}
            {lines.map((line, index) => renderLine(line, index))}
        </div>
    );
}

// Predefined skeleton configurations
export const SkeletonConfigs = {
    // Login page skeleton
    loginForm: {
        blocks: [
            {
                width: '60px',
                height: '60px',
                margin: '0 auto 2rem auto',
                borderRadius: '50%',
            },
            {
                lines: [
                    { width: '80%', height: '1.5rem', margin: '0 auto 0.5rem auto' },
                    { width: '60%', height: '1rem', margin: '0 auto 2rem auto' },
                ],
            },
        ],
        lines: [
            { height: '3rem', margin: '0 0 1.5rem 0', borderRadius: '0.5rem' },
            { height: '3rem', margin: '0 0 1.5rem 0', borderRadius: '0.5rem' },
            { height: '2.5rem', margin: '0 0 1rem 0', borderRadius: '0.5rem' },
        ],
        layout: 'vertical' as const,
        animation: 'pulse' as const,
    },

    // Card skeleton
    card: {
        avatar: { size: '48px', margin: '0 1rem 0 0' },
        lines: [
            { width: '30%', height: '1.2rem', margin: '0 0 0.5rem 0' },
            { width: '80%', height: '1rem', margin: '0 0 0.5rem 0' },
            { width: '60%', height: '1rem', margin: '0 0 1rem 0' },
        ],
        layout: 'horizontal' as const,
        animation: 'shimmer' as const,
    },

    // List skeleton
    list: {
        lines: [
            { height: '1rem', margin: '0 0 0.5rem 0' },
            { height: '1rem', margin: '0 0 0.5rem 0' },
            { height: '1rem', margin: '0 0 0.5rem 0' },
        ],
        layout: 'vertical' as const,
        animation: 'wave' as const,
    },

    // Table skeleton
    table: {
        lines: [
            { height: '2rem', margin: '0 0 0.5rem 0', borderRadius: '0.25rem' },
            { height: '2rem', margin: '0 0 0.5rem 0', borderRadius: '0.25rem' },
            { height: '2rem', margin: '0 0 0.5rem 0', borderRadius: '0.25rem' },
        ],
        layout: 'vertical' as const,
        animation: 'pulse' as const,
    },

    // Profile skeleton
    profile: {
        circle: { size: '120px', margin: '0 auto 2rem auto' },
        lines: [
            { width: '40%', height: '1.5rem', margin: '0 auto 1rem auto' },
            { width: '60%', height: '1rem', margin: '0 auto 0.5rem auto' },
            { width: '50%', height: '1rem', margin: '0 auto 0.5rem auto' },
            { width: '70%', height: '1rem', margin: '0 auto 0.5rem auto' },
        ],
        layout: 'vertical' as const,
        animation: 'shimmer' as const,
    },
};
