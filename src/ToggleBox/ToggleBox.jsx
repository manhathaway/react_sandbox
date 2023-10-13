import './ToggleBox.css'
import { useState } from 'react';

function ToggleBox() {
    const [toggleDown, setToggleDown] = useState(false);
    const [toggleRight, setToggleRight] = useState(false);

    return (
        <div className="body">
            <h2 className="heading">Toggle Box</h2>
            <div className="content ToggleBox-content">
                <div className="ToggleBox-bar">
                    <p className="ToggleBox-label">My secret is below.</p>
                    <button type="button" onClick={() => {setToggleDown(!toggleDown)}} className="ToggleBox-button">{toggleDown ? "Collapse" : "Expand"}</button>
                </div>
                {toggleDown && <p className="ToggleBox-paragraph ToggleBox-paragraph-down">~ I'm gay. ~</p>}
                <div className="ToggleBox-bar-grid-parent">
                    <div className="ToggleBox-bar">
                        <p className="ToggleBox-label">Now it's aside.</p>
                        <button type="button" onClick={() => {setToggleRight(!toggleRight)}} className="ToggleBox-button">{toggleRight ? "Collapse" : "Expand"}</button>
                    </div>
                    {toggleRight && <p className="ToggleBox-paragraph ToggleBox-paragraph-right">~ I'm gay. ~</p>}
                </div>
            </div>
        </div>
    );
}

export default ToggleBox;