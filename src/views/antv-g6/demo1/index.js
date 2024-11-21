import React, { useEffect } from 'react';
import { data } from './data';
import { Graph } from '@antv/g6';

export function G6Demo1 () {
    const ref = React.useRef(null)
    let graph = null

    useEffect(() => {
        if(!graph) {
            graph = new Graph({
                container: ref.current,
                data,
                node: {
                    palette: {
                        type: 'group',
                        field: 'cluster',
                    },
                },
                layout: {
                    type: 'force',
                },
                behaviors: ['drag-canvas', 'drag-node'],
            });
        }
        // console.log('graph', graph, data)
        graph.render()
    }, [])

    return (
        <div ref={ref}> </div>
    );
}
