
class ResetPasswordTokenExpired(Exception):
    def __init__(self, message, code=401):
        self.message = message 
        self.code = code 
        
        super().__init__(self.message)