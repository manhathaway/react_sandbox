import './DropDown.css'
import { useState } from 'react';

function DropDown() {
    const [dropDown1, setDropDown1] = useState(false)
    const [dropDown2, setDropDown2] = useState(false)
    const [dropDown3, setDropDown3] = useState(false)

    return(
        <div className="body">
            <h2 className="heading">Drop-Down Menu</h2>
            <div className="content">
                <div className="DropDown-navbar">
                    <div className="DropDown-nav-column">
                        <p onMouseEnter={() => setDropDown1(true)} onMouseLeave={() => setDropDown1(false)} className="DropDown-nav-options">Option</p>
                        { dropDown1 &&
                        <div onMouseEnter={() => setDropDown1(true)} onMouseLeave={() => setDropDown1(false)} className="DropDown-nav-suboptions">
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                        </div> }
                    </div>
                    <div className="DropDown-nav-column">
                        <p onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => setDropDown2(false)} className="DropDown-nav-options">Option</p>
                        { dropDown2 &&
                        <div onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => setDropDown2(false)} className="DropDown-nav-suboptions">
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                        </div> }
                    </div>
                    <div className="DropDown-nav-column">
                    <p onMouseEnter={() => setDropDown3(true)} onMouseLeave={() => setDropDown3(false)} className="DropDown-nav-options">Option</p>
                        { dropDown3 &&
                        <div onMouseEnter={() => setDropDown3(true)} onMouseLeave={() => setDropDown3(false)} className="DropDown-nav-suboptions">
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                            <button type="submit" className="DropDown-nav-suboption">-</button>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;