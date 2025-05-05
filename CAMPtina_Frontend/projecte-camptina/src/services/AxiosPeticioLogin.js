import axiosClient from './auth'

/**
 * Autenticació per gestionar login, logout i token JWT.
 */

/**
 * Configura o elimina el token JWT a localStorage.
 * @function
 * @param {string|null} token - Token JWT a emmagatzemar. Si és null, elimina el token existent.
 */
const setAuthToken = (token) => {
    if(token) {
        localStorage.setItem('jwtToken', token)
    } else {
        localStorage.removeItem('jwtToken')
    }
}


/**
 * Realitza el procés de login d'usuari.
 * @async
 * @function
 * @param {string} email - Email de l'usuari
 * @param {string} contrasenya - Contrasenya de l'usuari
 * @returns {Promise<Object>} Objecte amb resultat de l'operació:
 *  - {boolean} success - Indica si l'operació ha tingut èxit
 *  - {string} [id] - ID de l'usuari (només si success=true)
 *  - {string} [nom] - Nom de l'usuari
 *  - {string} [cognom1] - Primer cognom
 *  - {string} [email] - Email autenticat
 *  - {string} [rol] - Rol de l'usuari
 *  - {string} [token] - Token JWT
 *  - {string} [error] - Missatge d'error (només si success=false)
 * @throws {Error} Captura errors de xarxa o del servidor i retorna objecte amb missatge localitzat
 */
export const loginUsuari = async (email,contrasenya) => {
    try {
        const resposta = await axiosClient.post('auth/login', {
            email: email,
            contrasenya: contrasenya
        })

        
        // Obtenim dades del token
        const token = resposta.data.token
        
        // Configurem el token globalment
        setAuthToken(token)

        return {
            success: true,
            id: resposta.data.usuariId,
            nom: resposta.data.nom,
            cognom1: resposta.data.cognom1,
            email: resposta.data.email,
            rol: resposta.data.rolNom,
            token: token
        }
    } catch (error) {
        let errorMessage = "Error de connexió amb el servidor"
        
        if(error.response) {
            errorMessage = error.response.data?.error || 
                          error.response.data?.message || 
                          "Credencials incorrectes"
        }

        // Netegem token en cas d'error
        setAuthToken(null)
        
        return {
            success: false,
            error: errorMessage
        }
    }

}

/**
 * Tanca la sessió de l'usuari eliminant el token JWT.
 * @function
 * @returns {Object} Objecte amb resultat de l'operació:
 *  - {boolean} success - Sempre true
 *  - {string} message - Missatge de confirmació
 */
export const logoutUsuari = () => {
    setAuthToken(null)
    return {
        success: true,
        message: "Sessió tancada correctament",
      }
}

// Configuració inicial si hi ha token
//const token = localStorage.getItem('jwtToken')
//if(token) {
//    setAuthToken(token)
//}