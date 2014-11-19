Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer if Rails.env.test?
  provider :browser_id
end
