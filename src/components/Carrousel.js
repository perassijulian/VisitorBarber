import React, {useState, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';

import '../Carousel.scss';

export const CaroulselItem = ({ children, width }) => {
    return (
        <div className='carousel--item' style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = (props, { children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    
    const updateIndex = (newIndex) => {
        
        if (newIndex < 0) {
            newIndex = React.Children.count(props.children) - props.amountItems;
        } else if (newIndex >= React.Children.count(props.children)- (props.amountItems-1)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        if (props.repeat) {    
            const interval = setInterval(() => {
                if (!paused) {
                updateIndex(activeIndex+1);
                }
            }, 5000);
            
            return () => {
                if (interval) {
                    clearInterval(interval);
                }
            };
        }
    });
    
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex+1),
        onSwipedRight: () => updateIndex(activeIndex-1)
    });

    return (
        <div className="carousel">
            <button
                className='carousel--button--left'
                onClick={() => {
                    updateIndex(activeIndex-1)
                }}>
                «
            </button>
            <div 
                {...handlers}
                className='carousel--pause'
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div className='carousel--inner' style={{ transform: `translateX(-${activeIndex*(100/props.amountItems)}%)` }}>
                    {React.Children.map(props.children, (child,index) => {
                        return React.cloneElement( child, {width: `${100/props.amountItems}%` });
                    })}
                </div>
            </div>
            <button
                className='carousel--button--right'
                onClick={() => {
                    updateIndex(activeIndex+1)
                }}>
                »
            </button>
        </div>
    );
};

export default Carousel;