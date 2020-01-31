import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import css from './Board.less';
import Layout from '@enact/ui/Layout';

import Square from '../components/Square';

const BoardBase = kind({
    name: 'Board',

    styles: {
        css: css,
        className: 'board'
    },

    propTypes: {
        state: PropTypes.array,
    },

    render: ({state, onSelect, ...rest}) => {
        return (
            <fieldset>
                <Layout>
                    <Column>
                        <Cell>
                            <Row style={{height: '100%'}}>
                            <Cell><Square value={state[0][0]} onSelect={onSelect} /></Cell>
                            <Cell><Square value={state[0][1]} onSelect={onSelect} /></Cell>
                            <Cell><Square value={state[0][2]} onSelect={onSelect} /></Cell>
                            </Row>
                        </Cell>
                        <Cell>
                            <Row style={{height: '100%'}}>
                            <Cell><Square value={state[1][0]} onSelect={onSelect} /></Cell>
                            <Cell><Square value={state[1][1]} onSelect={onSelect} /></Cell>
                            <Cell><Square value={state[1][2]} onSelect={onSelect} /></Cell>
                            </Row>
                        </Cell>
                        <Cell>
                            <Row style={{height: '100%'}}>
                            <Cell><Square value={state[2][0]} onSelect={onSelect} /></Cell>
                            <Cell><Square value={state[2][1]} onSelect={onSelect} /></Cell>
                            <Cell><Square value={state[2][2]} onSelect={onSelect} /></Cell>
                            </Row>
                        </Cell>
                    </Column>
                </Layout>
            </fieldset>
        );
    }

});

export default BoardBase;
export {BoardBase as Board, BoardBase};