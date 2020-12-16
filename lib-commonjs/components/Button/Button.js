'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var React = require('react');
var core = require('@babylonjs/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (props) {
    var canvas = document.getElementById('root');
    var engine = new core.Engine(canvas);
    console.log(engine);
    var children = props.children, _a = props.onClick, onClick = _a === void 0 ? function () { } : _a, rest = _tslib.__rest(props, ["children", "onClick"]);
    var styles = React.useMemo(function () {
        return {
            padding: '10px',
            border: '2px solid #61dafb',
            borderRadius: '5px',
            textTransform: 'uppercase',
            color: 'black',
            cursor: 'pointer'
        };
    }, []);
    return (React__default['default'].createElement("button", _tslib.__assign({ style: styles, onClick: onClick }, rest), children !== null && children !== void 0 ? children : 'EMPTY props.children'));
};

exports.Button = Button;
//# sourceMappingURL=Button.js.map
