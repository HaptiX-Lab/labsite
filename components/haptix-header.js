import React from 'react'; 
import BgHeader from '../public/ContoursOnly.svg';
import BgHand from '../public/HandOnly.svg';

const HaptixHeader = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '400px', margin:0}}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', transform: 'translate(-50%, -50%) scale(3)' }}>
                <BgHeader style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', transform: 'translate(-50%, -50%) scale(3)' }}>
                <BgHand style={{ width: '100%', height: '100%' }} />
            </div>
        </div> 
    );
};

export default HaptixHeader;
