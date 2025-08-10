package dto

type LoginRequest struct {
    Username string `json:"username"`
    Password string `json:"password"`
}

type RegisterRequest struct {
    Username string `json:"username"`
    Email    string `json:"email"`
    Password string `json:"password"`
}

type ForgotPasswordRequest struct {
    Email string `json:"email"` 
}

type ResetPasswordRequest struct {
    Token       string `json:"token"`
    NewPassword string `json:"new_password"`
}

type ResendVerificationRequest struct {
    Email string `json:"email"`
}
