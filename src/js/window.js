import React from 'react';
import '../css/window.css';

function Window({ closeWindow, openMain }) {
    return (
        <div className="window">
            <div className="theBox" id="pretty-scale-test">
                <h2>Select below</h2>
                <div className="pretty p-switch p-fill notpretty" id="pretty-scale-test">
                    <input type="checkbox" value="ff" defaultChecked={true} />
                    <div className="state p-primary">
                        <label>First Five</label>
                    </div>
                </div>
                <div className="pretty p-switch p-fill notpretty">
                    <input type="checkbox" value="fl" defaultChecked={true} />
                    <div className="state p-primary">
                        <label>1st Line</label>
                    </div>
                </div>
                <div className="pretty p-switch p-fill notpretty">
                    <input type="checkbox" value="sl" defaultChecked={true} />
                    <div className="state p-primary">
                        <label>2nd line</label>
                    </div>
                </div>
                <div className="pretty p-switch p-fill notpretty">
                    <input type="checkbox" value="tl" defaultChecked={true} />
                    <div className="state p-primary">
                        <label>3rd line</label>
                    </div>
                </div>
                <div className="pretty p-switch p-fill notpretty">
                    <input type="checkbox" value="fh" defaultChecked={true} />
                    <div className="state p-primary">
                        <label>1st housie</label>
                    </div>
                </div>
                <div className="pretty p-switch p-fill notpretty">
                    <input type="checkbox" value="sh" />
                    <div className="state p-primary">
                        <label>2nd housie</label>
                    </div>
                </div>
                <div className="pretty p-switch p-fill notpretty">
                    <input type="checkbox" value="th" />
                    <div className="state p-primary">
                        <label>3rd housie</label>
                    </div>
                </div>
                <div className='buttons'>
                    <span><a className='cancel' onClick={closeWindow}>cancel</a></span>
                    <span><a className='button' onClick={openMain}>ok</a></span>
                </div>
            </div>
        </div>
    );
}

export default Window;
