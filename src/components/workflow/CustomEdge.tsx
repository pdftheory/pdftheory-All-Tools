'use client';

import React from 'react';
import {
    EdgeProps,
    getBezierPath,
    EdgeLabelRenderer,
    BaseEdge,
    useReactFlow
} from 'reactflow';
import { X } from 'lucide-react';

/**
 * Custom Edge with Delete Button
 * Displays a delete button when the edge is selected
 */
export function CustomEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    selected,
}: EdgeProps) {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onEdgeDelete = () => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
    };

    return (
        <>
            <BaseEdge
                path={edgePath}
                markerEnd={markerEnd}
                style={{
                    ...style,
                    strokeWidth: selected ? 3 : 2,
                    stroke: selected ? '#3b82f6' : '#94a3b8',
                }}
            />
            <EdgeLabelRenderer>
                {selected && (
                    // eslint-disable-next-line react/forbid-dom-props -- Dynamic positioning required by React Flow
                    <div
                        className="edge-label-wrapper nodrag nopan"
                        style={{
                            '--label-x': `${labelX}px`,
                            '--label-y': `${labelY}px`,
                        } as React.CSSProperties}
                    >
                        <button
                            onClick={onEdgeDelete}
                            className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                            title="删除连接 (Delete)"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </EdgeLabelRenderer>
        </>
    );
}

export default CustomEdge;
