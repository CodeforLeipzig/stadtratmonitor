class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    User.find(session[:user_id]) if session[:user_id].present?
  end

  def signed_in?
    !!current_user
  end

  def glossary
    render action: "glossary"
  end

  def impressum
    render action: "impressum"
  end

  helper_method :current_user, :signed_in?
end
