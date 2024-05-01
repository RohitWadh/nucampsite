import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnerList = () => {
    const partners = useSelector(selectAllPartners);

    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <errMsg errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner}/>
                    </div>
                )
            })}
        </Col>
    );
}

export default PartnerList;