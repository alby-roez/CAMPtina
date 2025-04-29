import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

export const loginUsuari = async (email,password) => {
    try {
        const resposta = await axiosClient.get('/usuaris')

        const usuariTrobat = resposta.data.find(
            (usuari) => usuari.email === email
        )

        const PASSWORD_TEMPORAL = "1234"

        if (!usuariTrobat || password !== PASSWORD_TEMPORAL) {
            return {
                success: false,
                error: "Email o contrasenya incorrectes"
            }
        }

        return {
            success: true,
            nom: usuariTrobat.nom,
            cognom1: usuariTrobat.cognom1,
            email: usuariTrobat.email,
            rol: usuariTrobat.rolId,
            token: "fals-jwt-token"
        }
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || 
                "Error de connexió amb el servidor",
        }
    }

}

export const logoutUsuari = () => {
    return {
        success: true,
        message: "Sessió tancada correctament",
      }
}