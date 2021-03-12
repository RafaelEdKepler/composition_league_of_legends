import ChampionBox from '../ChampionBox';
import { Container } from './style';


const Team: React.FC = () => {
    return (
        <Container>
            <ChampionBox quantityBright="100" selecting={true} />
            <ChampionBox quantityBright="100" selecting={false} />
            <ChampionBox quantityBright="100" selecting={false} />
            <ChampionBox quantityBright="100" selecting={false} />
            <ChampionBox quantityBright="100" selecting={false} />
        </Container>
    );
}

export default Team;