class SessionsController < ApplicationController
  def create
    if user = User.find_or_create_from_auth_hash(auth_hash)
      session[:user_id] = user.id
    end
    redirect_to root_path
  end

  def destroy
    reset_session
    redirect_to root_path
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
