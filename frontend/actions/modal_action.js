export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openMODAL = (modal) => ({
    type: OPEN_MODAL,
    modal: modal
});

export const closeMODAL = () => ({
    type: CLOSE_MODAL
});