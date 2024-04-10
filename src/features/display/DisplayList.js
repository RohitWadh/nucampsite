import { Row, Col } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';
import { selectedFeaturedCampsite } from '../campsites/campsitesSlice';

const DisplayList = () => {
    const items = [selectedFeaturedCampsite(), selectFeaturedPromotion()]

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;