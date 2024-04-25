import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';
import { selectedFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturePartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectedFeaturedCampsite(state), 
        selectFeaturedPromotion(state), 
        selectFeaturePartner(state)
    ]);

    console.log('display items: ', items);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col className='m-1' key={idx}>
                        {/*     <DisplayCard item={item} />*/}
                            <AnimatedDisplayCard item= {item} />
                        </Col>    
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;