require 'capybara/apparition'
Capybara.register_driver :apparition do |app|
   Capybara::Apparition::Driver.new(
     app,
     headless: true,
     browser_options: [ :no_sandbox, disable_features: 'VizDisplayCompositor']
   )
end

Capybara.javascript_driver = :apparition

# https://github.com/teamcapybara/capybara#setup
Capybara.server = :puma, { Silent: true }
