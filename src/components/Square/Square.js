import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import css from './Square.less';
import Spottable from '@enact/spotlight/Spottable';

const SquareBase = kind({
    name: 'Square',

    styles: {
        css: css,
        className: 'square'
    },

    propTypes: {
        index: PropTypes.number,
        value: PropTypes.string
    },

    defaultProps: {
        value: null
    },

    handlers: {
        onSelect: (ev, {player, onSelect, onWin}) => {
            if (onSelect) {
                value = player;
                onSelect({index})
            }
        }
    },

    render: ({value, onSelect, ...rest}) => {
        return (
            <button {...rest} onClick={onSelect}>
                {value}
            </button>
        );
    }
});

const Square = Spottable(SquareBase);

export default Square;
export {SquareBase, Square};