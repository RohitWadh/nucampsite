import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;
}

export const selectFeaturePartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}