"use strict";
const events = {
    info: {
        finishServer: 'Finishing server',
    }
};
const ControllerMsg = {
    success: {
        CREATE_CARD_SUCCESS: "CREATE_CARD_SUCCESS",
        ACTIVATED_CARD_SUCCESS: "ACTIVATED_CARD_SUCCESS",
        RETURN_DATA_CARD_SUCCESS: "RETURN_DATA_CARD_SUCCESS" //Indica que se logró mostrar la información privada de la tarjeta física
    },
    error: {
        CREATE_CARD_FAILURE: "CREATE_CARD_FAILURE",
        ACTIVATED_CARD_FAILURE: "ACTIVATED_CARD_FAILURE",
        RETURN_DATA_CARD_FAILURE: "RETURN_DATA_CARD_FAILURE",
        CARD_NOT_BELLOW_USER: "CARD_NOT_BELLOW_USER" //     
    }
};
const Operations = {
    CONTROLLER_BAD_REQUEST: 'Se ha ejecutado un request y este no cumple con el formato esperado',
    CARD_NOT_BELONG_USER: 'Se ha hecho una petición de consulta de datos personales de una tarjeta que no pertenece a este usuario.',
    CARD_CREATION_REJECTED: 'Este error se produce al obtener un rechazo por parte de BHUB en la creación de la tarjeta virtual.',
    CARD_CREATION_WRONG_STATUS: 'Este caso sucede cuando OP retorna un codigo de estado incorrecto a lo esperado para crear la tarjeta',
    PC_ERROR_UPDATING_ADDRESS: 'Se ha intentado actualizar la dirección de correspondencia de la cuenta en BHUB y ha ocurrido un error',
    PC_ERROR_UPDATING_AFFINITY: 'Se ha intentado actualizar el grupo de afinidad de la cuenta en BHUB y ha ocurrido un error',
    PC_ERROR_CREATING: 'Se ha intentado crear una tarjeta en BHUB y ha ocurrido un error'
};
module.exports = { events, ControllerMsg, Operations };
