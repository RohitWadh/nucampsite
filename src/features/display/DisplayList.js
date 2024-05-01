import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';
import { selectedFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturePartner } from '../partners/partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectedFeaturedCampsite(state), 
        selectFeaturedPromotion(state), 
        selectFeaturePartner(state)
    ]);

    return (
        <Row>
            {items.map((item, idx) => {
                const {featuredItem, isLoading, errMsg } = item;
                
                if (isLoading) {
                    return <Loading key={idx} />
                }

                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />
                }

                return  (
                    featuredItem && (
                        <Col className='m-1' key={idx}>
                        {/*     <DisplayCard item={item} />*/}
                            <AnimatedDisplayCard item= {featuredItem} />
                        </Col>    
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;