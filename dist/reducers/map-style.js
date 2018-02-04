'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_MAP_STYLE = undefined;

var _handleActions;

// Actions


// Constants


var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _mapStyleUpdaters = require('./map-style-updaters');

var _colorUtils = require('../utils/color-utils');

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// bedrock browserInit flattens our immutable object into a plain object
// we have to recreate the state after the app is loaded
var getDefaultState = function getDefaultState() {
  var visibleLayerGroups = {};
  var styleType = _defaultSettings.INITIAL_STYLE_TYPE;
  var topLayerGroups = {};

  return {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    topLayerGroups: topLayerGroups,
    mapStyles: {},
    buildingLayer: {
      isVisible: false,
      color: (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_BLDG_COLOR),
      opacity: 0.7
    }
  };
};

var INITIAL_MAP_STYLE = exports.INITIAL_MAP_STYLE = getDefaultState();

var mapStyleReducer = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[_actionTypes2.default.MAP_CONFIG_CHANGE] = _mapStyleUpdaters.mapConfigChangeUpdater, _handleActions[_actionTypes2.default.MAP_STYLE_CHANGE] = _mapStyleUpdaters.mapStyleChangeUpdater, _handleActions[_actionTypes2.default.MAP_BUILDING_CHANGE] = _mapStyleUpdaters.mapBuildingChangeUpdater, _handleActions[_actionTypes2.default.LOAD_MAP_STYLES] = _mapStyleUpdaters.loadMapStylesUpdater, _handleActions[_actionTypes2.default.LOAD_MAP_STYLE_ERR] = _mapStyleUpdaters.loadMapStyleErrUpdater, _handleActions[_actionTypes2.default.RECEIVE_MAP_CONFIG] = _mapStyleUpdaters.receiveMapConfigUpdater, _handleActions), INITIAL_MAP_STYLE);

exports.default = mapStyleReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3R5bGUuanMiXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFN0YXRlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwic3R5bGVUeXBlIiwidG9wTGF5ZXJHcm91cHMiLCJtYXBTdHlsZXMiLCJidWlsZGluZ0xheWVyIiwiaXNWaXNpYmxlIiwiY29sb3IiLCJvcGFjaXR5IiwiSU5JVElBTF9NQVBfU1RZTEUiLCJtYXBTdHlsZVJlZHVjZXIiLCJNQVBfQ09ORklHX0NIQU5HRSIsIk1BUF9TVFlMRV9DSEFOR0UiLCJNQVBfQlVJTERJTkdfQ0hBTkdFIiwiTE9BRF9NQVBfU1RZTEVTIiwiTE9BRF9NQVBfU1RZTEVfRVJSIiwiUkVDRUlWRV9NQVBfQ09ORklHIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7O0FBYUE7OztBQWZBOztBQUdBOzs7O0FBRUE7O0FBUUE7O0FBR0E7Ozs7QUFLQTtBQUNBO0FBQ0EsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU1DLHFCQUFxQixFQUEzQjtBQUNBLE1BQU1DLCtDQUFOO0FBQ0EsTUFBTUMsaUJBQWlCLEVBQXZCOztBQUVBLFNBQU87QUFDTEQsd0JBREs7QUFFTEQsMENBRks7QUFHTEUsa0NBSEs7QUFJTEMsZUFBVyxFQUpOO0FBS0xDLG1CQUFlO0FBQ2JDLGlCQUFXLEtBREU7QUFFYkMsYUFBTyw4REFGTTtBQUdiQyxlQUFTO0FBSEk7QUFMVixHQUFQO0FBV0QsQ0FoQkQ7O0FBa0JPLElBQU1DLGdEQUFvQlQsaUJBQTFCOztBQUVQLElBQU1VLGtCQUFrQixzRUFFbkIsc0JBQVlDLGlCQUZPLDZEQUduQixzQkFBWUMsZ0JBSE8sNERBSW5CLHNCQUFZQyxtQkFKTywrREFLbkIsc0JBQVlDLGVBTE8sMkRBTW5CLHNCQUFZQyxrQkFOTyw2REFPbkIsc0JBQVlDLGtCQVBPLGdFQVN0QlAsaUJBVHNCLENBQXhCOztrQkFZZUMsZSIsImZpbGUiOiJtYXAtc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG4vLyBBY3Rpb25zXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmltcG9ydCB7XG4gIG1hcENvbmZpZ0NoYW5nZVVwZGF0ZXIsXG4gIG1hcFN0eWxlQ2hhbmdlVXBkYXRlcixcbiAgbWFwQnVpbGRpbmdDaGFuZ2VVcGRhdGVyLFxuICBsb2FkTWFwU3R5bGVzVXBkYXRlcixcbiAgbG9hZE1hcFN0eWxlRXJyVXBkYXRlcixcbiAgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXJcbn0gZnJvbSAnLi9tYXAtc3R5bGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuXG4vLyBDb25zdGFudHNcbmltcG9ydCB7XG4gIElOSVRJQUxfU1RZTEVfVFlQRSxcbiAgREVGQVVMVF9CTERHX0NPTE9SXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuLy8gYmVkcm9jayBicm93c2VySW5pdCBmbGF0dGVucyBvdXIgaW1tdXRhYmxlIG9iamVjdCBpbnRvIGEgcGxhaW4gb2JqZWN0XG4vLyB3ZSBoYXZlIHRvIHJlY3JlYXRlIHRoZSBzdGF0ZSBhZnRlciB0aGUgYXBwIGlzIGxvYWRlZFxuY29uc3QgZ2V0RGVmYXVsdFN0YXRlID0gKCkgPT4ge1xuICBjb25zdCB2aXNpYmxlTGF5ZXJHcm91cHMgPSB7fTtcbiAgY29uc3Qgc3R5bGVUeXBlID0gSU5JVElBTF9TVFlMRV9UWVBFO1xuICBjb25zdCB0b3BMYXllckdyb3VwcyA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgc3R5bGVUeXBlLFxuICAgIHZpc2libGVMYXllckdyb3VwcyxcbiAgICB0b3BMYXllckdyb3VwcyxcbiAgICBtYXBTdHlsZXM6IHt9LFxuICAgIGJ1aWxkaW5nTGF5ZXI6IHtcbiAgICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgICBjb2xvcjogaGV4VG9SZ2IoREVGQVVMVF9CTERHX0NPTE9SKSxcbiAgICAgIG9wYWNpdHk6IDAuN1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX01BUF9TVFlMRSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuXG5jb25zdCBtYXBTdHlsZVJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKFxuICB7XG4gICAgW0FjdGlvblR5cGVzLk1BUF9DT05GSUdfQ0hBTkdFXTogbWFwQ29uZmlnQ2hhbmdlVXBkYXRlcixcbiAgICBbQWN0aW9uVHlwZXMuTUFQX1NUWUxFX0NIQU5HRV06IG1hcFN0eWxlQ2hhbmdlVXBkYXRlcixcbiAgICBbQWN0aW9uVHlwZXMuTUFQX0JVSUxESU5HX0NIQU5HRV06IG1hcEJ1aWxkaW5nQ2hhbmdlVXBkYXRlcixcbiAgICBbQWN0aW9uVHlwZXMuTE9BRF9NQVBfU1RZTEVTXTogbG9hZE1hcFN0eWxlc1VwZGF0ZXIsXG4gICAgW0FjdGlvblR5cGVzLkxPQURfTUFQX1NUWUxFX0VSUl06IGxvYWRNYXBTdHlsZUVyclVwZGF0ZXIsXG4gICAgW0FjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJR106IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyXG4gIH0sXG4gIElOSVRJQUxfTUFQX1NUWUxFXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtYXBTdHlsZVJlZHVjZXI7XG4iXX0=