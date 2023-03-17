class ApplicationController < ActionController::API
    SECRET_KEY ='w@rr10r$d0r1t0$'
    
    def authenticate
        # puts request.headers['Authorization']
        decoded_token = JWT.decode(request.headers['Authorization'], SECRET_KEY, true, { algorithm: 'HS256' }) # take from: https://github.com/jwt/ruby-jwt
        user = User.find(decoded_token[0]['user_id'])
        if user
            @current_user = user
        else
            raise 'SECURITY ALERT!'
        end
    end
end