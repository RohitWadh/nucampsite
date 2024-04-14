import { CAMPSITES } from '../../app/shared/CAMPSITES'

export const selectAllCampsites = () => {
    return CAMPSITES;
};

/* export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
} */

export const selectCampstiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectedFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}