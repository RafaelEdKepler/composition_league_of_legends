import { useState, useEffect } from 'react';

import { Container } from './style'

export default function ChampionBox() {
    const [bright, setBright] = useState(100);
    const [isGrowing, setIsGrowing] = useState(false);

    useEffect(() => {
        setTimeout(function () {
            if (bright === 130) {
                setIsGrowing(false);
            }
            if (bright === 100) {
                setIsGrowing(true);
            }

            if (!isGrowing) {
                setBright(bright - 10);
            } else {
                setBright(bright + 10);
            }
        }, 200)
    }, [bright]);

    return (
        <Container bright={bright}>
        </Container>
    );
};