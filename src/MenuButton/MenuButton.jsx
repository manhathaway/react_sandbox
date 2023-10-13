import './MenuButton.css'
import { useState } from 'react';
import MenuIcon from '../SVGs/menu_icon.svg';

function MenuButton() {
    const [trigger, setTrigger] = useState(false);
    const [triggerPg1, setTriggerPg1] = useState(false);
    const [triggerPg2, setTriggerPg2] = useState(false);

    return (
        <div className='body'>
            <h2 className='heading'>Menu Button</h2>
            <div className='content'>
                <div className="MenuButton">
                    <button onClick={(() => setTrigger(!trigger))}type="button" className="MenuButton-button"><img className="MenuButton-button-icon" src={MenuIcon} alt="Menu icon."/></button>
                    { trigger && (
                    <div className="MenuButton-options">
                        <p className="MenuButton-option">-</p>
                        <p className="MenuButton-option">-</p>
                        <p className="MenuButton-option">-</p>
                    </div>
                    ) }
                </div>
                <div className="MenuButton-main">
                    <p className="MenuButton-main-heading">Clever Heading Title</p>
                    <button type="button" onClick={() => setTriggerPg1(!triggerPg1)} className="MenuButton-paragraph-button">{ triggerPg1 ? 'Collapse' : 'Expand' }</button>
                    { triggerPg1 && <p className="MenuButton-main-paragraph">This is a paragraph. Really, I'm just writing this because I need some content here. Isn't it annoying when you're working on these small projects and you have to take the time to come up with some shit to write down on elements such as these which aren't even the focal point of the component? Whatever, I guess that's just how it is...</p> }
                    <button type="button" onClick={() => setTriggerPg2(!triggerPg2)} className="MenuButton-paragraph-button">{ triggerPg2 ? 'Collapse' : 'Expand' }</button>
                    { triggerPg2 && <p className="MenuButton-main-paragraph">This is another paragraph. I'm adding this paragraph because I need to verify that the menu button in the top left remains there when scrolling through this component.</p> }
                </div>
            </div>
        </div>
    );
}

export default MenuButton;