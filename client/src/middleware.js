import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

// Esta es tu clave secreta que usaste para firmar el token
const secretKey = process.env.JWT_SECRET_KEY;

function getUserRoleFromToken(token) {
    try {
        // Decodifica el token
        const decoded = jwt.verify(token, secretKey)
        // Retorna el rol del usuario
        console.log(decoded.rol);
        return decoded.rol
    } catch (error) {
        // Si hay un error al decodificar el token, retorna null
        return null
    }
}

export function middleware(request) {
    // Obtiene el token de usuario de las cookies
    const userToken = request.cookies.get('userToken')
    // Comprueba si el token de usuario existe
    // Obtiene el rol del usuario a partir del token de usuario
    const userRole = getUserRoleFromToken(userToken)
    console.log(userToken)
    // Comprueba si el usuario tiene el rol de 'admin'
    if (userRole !=='admin') {
        // Si no existe, redirige a '/account/login'
        return NextResponse.redirect('http://localhost:3000/login')
    }

    // Si el usuario es un 'admin', permite que la solicitud continúe normalmente
    return NextResponse.next()
}

export const config = {
    matcher: '/newPost'
}
