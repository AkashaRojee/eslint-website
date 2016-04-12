'use strict';

define(['react'], function(React) {
    return React.createClass({
        displayName: 'ParserOptions',
        getInitialState: function() {
            return this.props.options;
        },
        handleEcmaVersion: function(event) {
            this.setState({ ecmaVersion: parseInt(event.target.value) }, function() {
                this.props.onUpdate(this.state);
            });
        },
        handleSourceType: function(event) {
            this.setState({ sourceType: parseInt(event.target.value) }, function() {
                this.props.onUpdate(this.state);
            });
        },
        handleEcmaFeatures: function(event) {

        },
        render: function() {
            return (
                <div className="row">
                    <div className="col-md-4">
                        <h3>ECMA Version</h3>
                        <select value={this.state.ecmaVersion} onChange={this.handleEcmaVersion}>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                    <div className="col-md-4" onChange={this.handleSourceType}>
                        <h3>Source Type</h3>
                        <select value={this.state.sourceType}>
                            <option value="module">module</option>
                            <option value="script">script</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <h3>ECMA Features</h3>
                        <div className="ecmaFeatures list">
                            <div className="checkbox"><label><input checked={this.state.ecmaFeatures.jsx} type="checkbox" className="option-checkbox" id="jsx" />jsx</label></div>
                            <div className="checkbox"><label><input checked={this.state.ecmaFeatures.globalReturn} type="checkbox" className="option-checkbox" id="globalReturn" />globalReturn</label></div>
                            <div className="checkbox"><label><input checked={this.state.ecmaFeatures.impliedStrict} type="checkbox" className="option-checkbox" id="impliedStrict" />impliedStrict</label></div>
                            <div className="checkbox"><label><input checked={this.state.ecmaFeatures.experimentalObjectRestSpread} type="checkbox" className="option-checkbox" id="experimentalObjectRestSpread" />experimentalObjectRestSpread</label></div>
                        </div>
                    </div>
                </div>
            );
        }
    });
});