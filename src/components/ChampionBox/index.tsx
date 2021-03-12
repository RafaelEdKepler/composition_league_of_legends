import { useState, useEffect } from 'react';

import { Container, SelectChampion } from './style'

interface ContainerProps {
    quantityBright: string,
    selecting: boolean
}


const ChampionBox: React.FC<ContainerProps> = ({ quantityBright, selecting }) => {
    const [bright, setBright] = useState(parseInt(quantityBright));
    const [isSelecting, setIsSelecting] = useState(selecting);
    const [isGrowing, setIsGrowing] = useState(false);

    useEffect(() => {
        if (isSelecting) {
            setTimeout(function () {
                if (bright === 150) {
                    setIsGrowing(false);
                }
                if (bright === 90) {
                    setIsGrowing(true);
                }

                if (!isGrowing) {
                    setBright(bright - 10);
                } else {
                    setBright(bright + 10);
                }
            }, 200)
        }
    }, [bright, isSelecting]);

    return (
        <Container quantityBright={bright.toString()}>
            <SelectChampion></SelectChampion>
        </Container>
    );
};

export default ChampionBox;