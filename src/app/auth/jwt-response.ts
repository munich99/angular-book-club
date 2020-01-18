export interface JwtResponse {
    id: number;
    email:string;
    password:string;
    access_token: string,
    expires_in: number
}
