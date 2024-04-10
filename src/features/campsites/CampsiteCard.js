import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = ({campsite}) => {
    const {image, name} = campsite;    
    return(
        <Card>
            <CardTitle>{name}</CardTitle>
            <CardImg
                width='100%' src={image} alt={name}    
            /> 
        </Card>
    );
}

export default CampsiteCard;